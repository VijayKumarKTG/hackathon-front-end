/* eslint-disable @next/next/no-img-element */
'use client';

import RelatedQuestions from '@/components/relatedQuestions';
import TrendingTags from '@/components/trendingTags';
import TagChip from '@/components/tagChip';
import ContentCard from '@/components/cards/content';
import { useContractRead, useQuery } from 'wagmi';
import { get_all_questions_by_id } from '@/abi/social';
import { Address, Question } from '@/types';
import axios from 'axios';

const Question = ({ params }: { params: { id: string } }) => {
  const {
    data: question,
    isLoading: isQuestionLoading,
    isError: isQuestionError,
  } = useContractRead({
    address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
    abi: get_all_questions_by_id,
    functionName: 'getQuestionById',
    args: [params?.id],
  });

  const qn: Question = question as Question;

  const {
    data: metadata,
    isError: isMetadataError,
    isLoading: isMetadataLoading,
  } = useQuery(['get-question-metadata', params.id], () => axios.get(qn.uri));

  if (isQuestionLoading || isMetadataLoading) {
    return (
      <Wrapper>
        <div>Loading...</div>
      </Wrapper>
    );
  }

  if (isQuestionError || isMetadataError) {
    return (
      <Wrapper>
        <div>Something went wrong!</div>
      </Wrapper>
    );
  }

  if (!question || !metadata) {
    return (
      <Wrapper>
        <div>Found no question with {params.id}! </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <>
        <div className='flex flex-col items-start justify-start gap-[8px] text-[32px] text-white mb-7'>
          <h1 className='text-[32px] leading-10 m-0'>
            {metadata?.data?.title}
          </h1>
          <div className='flex flex-row items-center justify-start gap-4 text-xs text-silver-100 mb-2'>
            <div>
              <span>{`Asked `}</span>
              <span className='font-semibold text-silver-200'>Today</span>
            </div>
            <div>
              <span>{`Modified `}</span>
              <span className='font-semibold text-silver-200'>Today</span>
            </div>
            <div>
              <span>{`Viewed `}</span>
              <span className='font-semibold text-silver-200'>6 Times</span>
            </div>
          </div>
          <div className='flex flex-row items-center justify-start gap-2 mb-8'>
            <TagChip title='JavaScript' />
            <TagChip title='NFT' />
            <TagChip title='Web3' />
          </div>
        </div>

        <div className='m-0 mb-12'>
          <ContentCard
            voteCount={qn?.upvotes.sub(qn?.downvotes).toNumber()}
            content={metadata?.data?.question}
            comments={qn?.comments}
            authorAddress={qn?.author}
          />
        </div>

        <div className='text-[24px] leading-6 mb-3 font-medium text-silver-100'>
          {qn?.answers?.length} Answers
        </div>
      </>
    </Wrapper>
  );
};

export default Question;

const Wrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <div className='bg-darkblue px-6 py-14 xl:p-[56px]'>
      <div className='grid grid-cols-12 gap-x-6 items-start justify-start'>
        <div className='hidden lg:flex col-span-3 flex-col gap-y-6'>
          <TrendingTags />
          <RelatedQuestions />
        </div>
        <div className='col-span-12 lg:col-span-9 rounded-3xl bg-gray-100 p-6 xl:p-9'>
          {children}
        </div>
      </div>
    </div>
  );
};
