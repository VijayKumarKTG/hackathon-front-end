/* eslint-disable @next/next/no-img-element */

'use client';

import axios from 'axios';
import { useContractRead, useNetwork, useQuery } from 'wagmi';

import { get_user_by_address_abi } from '@/abi/user';
import MarkdownRenderer from '@/components/mdx/renderer';
import AvatarLarge from '@/components/user/avatarLarge';
import { Address, UserContract, UserMetadata } from '@/types';
import { create } from 'zustand';

type State = {
  isCommentActive: boolean;
  newComment: string;
};

type Actions = {
  toggleCommentActive: (isCommentActive: boolean) => void;
  changeComment: (newComment: string) => void;
};

const useCountStore = create<State & Actions>((set) => ({
  isCommentActive: false,
  newComment: '',
  toggleCommentActive: (isCommentActive: boolean) =>
    set((state: State) => ({ ...state, isCommentActive })),
  changeComment: (newComment: string) =>
    set((state: State) => ({ ...state, newComment })),
}));

interface Props {
  content: string;
  voteCount: number;
  comments: any[];
  authorAddress: Address;
}

const ContentCard = (props: Props) => {
  const { chain } = useNetwork();

  const { isCommentActive, toggleCommentActive } = useCountStore();

  const {
    data,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useContractRead({
    address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
    abi: get_user_by_address_abi,
    functionName: 'getUserByAddress',
    chainId: chain?.id,
    args: [props?.authorAddress],
    onError(error: Error) {
      console.log(error.message);
    },
  });

  const author = data as UserContract;

  const {
    data: profile,
    isError: isProfileError,
    isLoading: isProfileLoading,
  } = useQuery(['user-profile', props?.authorAddress], () =>
    axios.get(author?.uri)
  );

  const user = profile?.data as UserMetadata;

  if (isUserLoading || isProfileLoading) {
    return (
      <Wrapper content={props.content} voteCount={props.voteCount}>
        <div>Loading...</div>
      </Wrapper>
    );
  }

  if (isUserError || isProfileError) {
    return (
      <Wrapper content={props.content} voteCount={props.voteCount}>
        <div>Something went wrong</div>
      </Wrapper>
    );
  }

  if (!author || !user) {
    return (
      <Wrapper content={props.content} voteCount={props.voteCount}>
        <div>No data found redarding author.</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper content={props.content} voteCount={props.voteCount}>
      <div className='flex items-center justify-between mt-10 w-full'>
        <button className='border-none py-3 px-5 rounded-md cursor-pointer font-semibold text-dark-blue'>
          Add comment
        </button>
        <AvatarLarge
          image={user?.profile}
          name={user?.name}
          id={author?.id?.toString()}
        />
      </div>
    </Wrapper>
  );
};

export default ContentCard;

const Wrapper = ({
  content,
  voteCount,
  children,
}: {
  children: JSX.Element;
  content: string;
  voteCount: number;
}) => {
  return (
    <div className='rounded-xl bg-gray-500 px-4 py-6 xl:p-8 flex flex-row items-start gap-x-4'>
      <div className='flex flex-col items-center gap-y-2 justify-center text-silver-100'>
        <button className='border-none bg-transparent w-[max-content] h-[max-content] flex m-0 p-0 cursor-pointer'>
          <img
            className='relative w-8 h-[19px]'
            alt='Upvote'
            src='/vector.svg'
          />
        </button>
        <div className='relative font-medium'>{voteCount}</div>
        <button className='border-none bg-transparent w-[max-content] h-[max-content] flex m-0 p-0 cursor-pointer'>
          <img
            className='relative w-8 h-[19px]'
            alt='Downvote'
            src='/vector1.svg'
          />
        </button>
      </div>
      <div>
        <div>
          <MarkdownRenderer markdown={content} />
        </div>
        {children}
      </div>
    </div>
  );
};
