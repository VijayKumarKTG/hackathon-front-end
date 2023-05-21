/* eslint-disable @next/next/no-img-element */

'use client';

import { useEffect, useRef } from 'react';
import axios from 'axios';
import {
  useAccount,
  useContractRead,
  useContractReads,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useQuery,
} from 'wagmi';
import { create } from 'zustand';
import { BigNumber } from 'ethers';

import { get_user_by_address_abi } from '@/abi/user';
import MarkdownRenderer from '@/components/mdx/renderer';
import AvatarLarge from '@/components/user/avatarLarge';
import { Address, Comment, UserContract, UserMetadata } from '@/types';
import {
  choose_best_answer_abi,
  get_comment_by_id,
  is_user_voted_a_abi,
  post_comment_abi,
  vote_answer_abi,
} from '@/abi/social';
import { uploadJSONToPinata } from '@/utils';
import CommentCard from '../comment';

enum VoteType {
  'Downvote' = -1,
  'Null' = 0,
  'Upvote' = 1,
}

type State = {
  isCommentActive: boolean;
  newComment: string;
  commentUrl: string;
  voteType: VoteType;
};

type Actions = {
  toggleCommentActive: (isCommentActive: boolean) => void;
  changeComment: (newComment: string) => void;
  changeCommentUrl: (commentUrl: string) => void;
  changeVoteType: (voteType: VoteType) => void;
};

const useCountStore = create<State & Actions>((set) => ({
  isCommentActive: false,
  newComment: '',
  commentUrl: '',
  voteType: VoteType.Null,
  toggleCommentActive: (isCommentActive: boolean) =>
    set((state: State) => ({ ...state, isCommentActive })),
  changeComment: (newComment: string) =>
    set((state: State) => ({ ...state, newComment })),
  changeCommentUrl: (commentUrl: string) =>
    set((state: State) => ({ ...state, commentUrl })),
  changeVoteType: (voteType: VoteType) =>
    set((state: State) => ({ ...state, voteType })),
}));

interface Props {
  uri: string;
  voteCount: number;
  comments: any[];
  authorAddress: Address;
  questionAuthor: Address;
  postId: number;
  isBestAnswer: boolean;
  isBestAnswerChosen: boolean;
}

const AnswerContentCard = (props: Props) => {
  const { chain } = useNetwork();
  const { address } = useAccount();

  const {
    isCommentActive,
    toggleCommentActive,
    newComment,
    changeComment,
    commentUrl,
    changeCommentUrl,
    voteType,
    changeVoteType,
  } = useCountStore();

  const {
    data: answer,
    isError: isAnswerError,
    isLoading: isAnswerLoading,
    refetch: fetch_answer,
  } = useQuery(
    ['answer-details', props?.postId, props?.uri],
    () => axios.get(props?.uri),
    {
      enabled: false,
    }
  );

  const answer_details = answer?.data as { answer: string };

  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
    refetch: fetch_user,
  } = useContractRead({
    address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
    abi: get_user_by_address_abi,
    functionName: 'getUserByAddress',
    chainId: chain?.id,
    args: [props?.authorAddress],
    enabled: false,
    onError(error: Error) {
      console.log(error.message);
    },
  });

  const author = user as UserContract;

  const {
    data: profile,
    isError: isProfileError,
    isLoading: isProfileLoading,
    refetch: fetch_metadata,
  } = useQuery(
    ['user-profile', props?.authorAddress],
    () => axios.get(author?.uri),
    { enabled: false }
  );

  const metadata = profile?.data as UserMetadata;

  useEffect(() => {
    fetch_answer();
    fetch_user();
    fetch_is_a_voted();
  }, []);

  useEffect(() => {
    if (user) {
      fetch_metadata();
    }
  }, [user]);

  /**
   * Commenting on this question
   */
  const isCommenting = useRef<boolean>(false);

  const { config: post_comment_config } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
    abi: post_comment_abi,
    functionName: 'postComment',
    args: [0, props.postId, commentUrl, process.env.NEXT_PUBLIC_HASH_SECRET],
  });

  const { write: post_comment } = useContractWrite({
    ...post_comment_config,
    onError(error) {
      console.log(error);
    },
    async onSuccess(data) {
      await data.wait();
      alert('Commented Successfully!');
      changeCommentUrl('');
      toggleCommentActive(false);
    },
  });

  if (commentUrl && post_comment && isCommenting.current) {
    console.log(post_comment);
    post_comment?.();
    isCommenting.current = false;
  }

  const onComment = async () => {
    const data = {
      comment: newComment,
    };

    const url = await uploadJSONToPinata(data);
    console.log(url);
    changeCommentUrl(url);
    isCommenting.current = true;
  };
  /**
   * Comment related code end here
   */

  // =================================================

  /**
   * Upvote/Downvote question
   */
  const isVoting = useRef<boolean>(false);

  const { config: vote_answer_config } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
    abi: vote_answer_abi,
    functionName: 'voteAnswer',
    args: [props.postId, voteType, process.env.NEXT_PUBLIC_HASH_SECRET],
    onError(error) {
      console.log(error);
    },
  });

  const { write: vote_answer } = useContractWrite({
    ...vote_answer_config,
    onError(error) {
      console.log(error);
    },
    async onSuccess(data) {
      await data.wait();
      alert(`${voteType === 1 ? 'Upvoted' : 'Downvoted'} Successfully!`);
      changeVoteType(VoteType.Null);
    },
  });

  if (voteType !== VoteType.Null && vote_answer && isVoting.current) {
    console.log(vote_answer);
    vote_answer?.();
    isVoting.current = false;
  }

  const onVote = async (vote: VoteType) => {
    changeVoteType(vote);
    isVoting.current = true;
  };
  /**
   * Voting related code end here
   */

  // =================================================

  /**
   * Check if user have voted on this answer
   */
  const { data: isAVoted, refetch: fetch_is_a_voted } = useContractRead({
    address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
    abi: is_user_voted_a_abi,
    functionName: 's_userVotedAnswer',
    args: [address, props.postId],
    enabled: false,
  });
  /**
   * User answer vote check end here
   */

  const contract = {
    address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
    abi: get_comment_by_id,
    functionName: 'getCommentById',
  };

  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
  } = useContractReads({
    contracts: props.comments?.map((comment: BigNumber) => ({
      ...contract,
      args: [comment],
    })) as any,
  });

  let comments_list: Comment[] = comments as Comment[];

  const { config: choose_best_answer_config } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
    abi: choose_best_answer_abi,
    functionName: 'chooseBestAnswer',
    args: [props.postId, process.env.NEXT_PUBLIC_HASH_SECRET],
    onError(error) {
      console.log(error);
    },
  });

  const { write: choose_best_answer } = useContractWrite({
    ...choose_best_answer_config,
    onError(error) {
      console.log(error);
    },
    async onSuccess(data) {
      await data.wait();
      alert('Best answer chosen');
    },
  });

  if (
    isAnswerLoading ||
    isUserLoading ||
    isProfileLoading ||
    isCommentsLoading
  ) {
    return (
      <Wrapper
        author={props.questionAuthor}
        haveVoted={isAVoted as boolean}
        vote={onVote}
        content={answer_details?.answer}
        isBestAnswer={props.isBestAnswer}
        isBestAnswerChosen={props.isBestAnswerChosen}
        chooseBestAnswer={choose_best_answer}
        voteCount={props.voteCount}>
        <div>Loading...</div>
      </Wrapper>
    );
  }

  if (isAnswerError || isUserError || isProfileError || isCommentsError) {
    return (
      <Wrapper
        author={props.questionAuthor}
        haveVoted={isAVoted as boolean}
        vote={onVote}
        content={answer_details?.answer}
        isBestAnswer={props.isBestAnswer}
        isBestAnswerChosen={props.isBestAnswerChosen}
        chooseBestAnswer={choose_best_answer}
        voteCount={props.voteCount}>
        <div>Something went wrong</div>
      </Wrapper>
    );
  }

  if (!author || !user) {
    return (
      <Wrapper
        author={props.questionAuthor}
        haveVoted={isAVoted as boolean}
        vote={onVote}
        content={answer_details?.answer}
        isBestAnswer={props.isBestAnswer}
        isBestAnswerChosen={props.isBestAnswerChosen}
        chooseBestAnswer={choose_best_answer}
        voteCount={props.voteCount}>
        <div>No data found redarding author.</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper
      haveVoted={isAVoted as boolean}
      vote={onVote}
      content={answer_details?.answer}
      voteCount={props.voteCount}
      author={props.questionAuthor}
      isBestAnswer={props.isBestAnswer}
      chooseBestAnswer={choose_best_answer}
      isBestAnswerChosen={props.isBestAnswerChosen}>
      <>
        <div className='flex items-center justify-between mt-10 w-full'>
          <button
            onClick={() => toggleCommentActive(!isCommentActive)}
            className='border-none py-3 px-5 rounded-md cursor-pointer font-semibold text-dark-blue'>
            {isCommentActive ? 'Cancel' : 'Add comment'}
          </button>
          <AvatarLarge
            image={metadata?.profile}
            name={metadata?.name}
            id={author?.id?.toString()}
          />
        </div>
        {isCommentActive && (
          <div>
            <textarea
              onChange={(event) => changeComment(event.target.value)}
              placeholder='Enter your comment'
              rows={4}
              className='mt-8 block w-full border-gray-300 shadow-sm focus:ring-indigo-500 sm:text-sm bg-gray-50 border rounded-md text-gray-900 text-sm focus:border-blue dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue dark:focus:border-blue resize-y'></textarea>
            <div className='w-full flex justify-end gap-x-4 mt-4'>
              <button
                onClick={() => toggleCommentActive(false)}
                className='border-none py-3 px-5 rounded-md cursor-pointer font-semibold bg-white text-dark-blue'>
                Cancel
              </button>
              <button
                onClick={onComment}
                className='border-none py-3 px-5 rounded-md cursor-pointer font-semibold bg-blue text-white'>
                Comment
              </button>
            </div>
          </div>
        )}
        {comments && comments.length > 0 && comments_list.length > 0 && (
          <div className='mt-8'>
            <h2 className='m-0 mb-4 text-white text-lg'>Comments</h2>
            <div className='flex flex-col gap-y-3'>
              {comments_list.map((comment: Comment) => (
                <CommentCard key={comment.id.toNumber()} {...comment} />
              ))}
            </div>
          </div>
        )}
      </>
    </Wrapper>
  );
};

export default AnswerContentCard;

const Wrapper = ({
  content,
  voteCount,
  children,
  vote,
  haveVoted,
  author,
  isBestAnswerChosen,
  isBestAnswer,
  chooseBestAnswer,
}: {
  children: JSX.Element;
  content: string;
  voteCount: number;
  vote: (vote: VoteType) => void;
  chooseBestAnswer: (() => void) | undefined;
  haveVoted: boolean;
  author: Address;
  isBestAnswerChosen: boolean;
  isBestAnswer: boolean;
}) => {
  const { address } = useAccount();

  return (
    <div className='rounded-xl bg-gray-500 px-4 py-6 xl:p-8 flex flex-row items-start gap-x-4 w-full'>
      <div className='flex flex-col items-center gap-y-2 justify-center text-silver-100'>
        <button
          disabled={haveVoted}
          onClick={() => vote(VoteType.Upvote)}
          className='border-none bg-transparent w-[max-content] h-[max-content] flex m-0 p-0 cursor-pointer text-silver-100 hover:text-blue'>
          <svg
            width='32'
            height='19'
            viewBox='0 0 32 19'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M31.71 16.5545L31.53 16.3465L17.93 0.851486C17.47 0.326735 16.78 0 16.01 0C15.24 0 14.55 0.336636 14.09 0.851486L0.5 16.3168L0.27 16.5743C0.1 16.8218 0 17.1188 0 17.4356C0 18.297 0.74 19 1.66 19L30.34 19C31.26 19 32 18.297 32 17.4356C32 17.1089 31.89 16.802 31.71 16.5545Z'
              fill='currentColor'
            />
          </svg>
        </button>
        <div className='relative font-medium'>{voteCount}</div>
        <button
          disabled={haveVoted}
          onClick={() => vote(VoteType.Downvote)}
          className='border-none bg-transparent w-[max-content] h-[max-content] flex m-0 p-0 cursor-pointer text-silver-100 hover:text-blue'>
          <svg
            width='32'
            height='19'
            viewBox='0 0 32 19'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M0.29 2.44554L0.47 2.65347L14.07 18.1485C14.53 18.6733 15.22 19 15.99 19C16.76 19 17.45 18.6634 17.91 18.1485L31.5 2.68317L31.73 2.42574C31.9 2.17822 32 1.88119 32 1.56436C32 0.702971 31.26 0 30.34 0H1.66C0.74 0 0 0.702971 0 1.56436C0 1.89109 0.11 2.19802 0.29 2.44554Z'
              fill='currentColor'
            />
          </svg>
        </button>
        {(author === address || isBestAnswer || !isBestAnswerChosen) && (
          <button
            disabled={author !== address}
            onClick={() => chooseBestAnswer?.()}
            className='border-none bg-transparent w-[max-content] h-[max-content] flex m-0 p-0 cursor-pointer text-silver-100 hover:text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-8 h-8'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
              />
            </svg>
          </button>
        )}
      </div>
      <div className='w-full'>
        <div>
          <MarkdownRenderer markdown={content} />
        </div>
        {children}
      </div>
    </div>
  );
};