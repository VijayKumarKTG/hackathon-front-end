/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

import RelatedQuestions from '@/components/relatedQuestions';
import TrendingTags from '@/components/trendingTags';
import QuestionCardLarge from '@/components/cards/questionLarge';
import { useAccount, useContractRead, useContractReads } from 'wagmi';
import {
  get_all_questions_by_id,
  get_all_questions_by_user_address,
} from '@/abi/social';
import { Address, Question } from '@/types';

const Questions: NextPage = () => {
  const { address } = useAccount();

  const {
    data: ids,
    isLoading: isIdsLoading,
    isError: isIdsError,
  } = useContractRead({
    address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
    abi: get_all_questions_by_user_address,
    functionName: 'getQuestionsByUserAddress',
    args: [address],
  });

  let id_list: any[] = ids as any[];

  const contract = {
    address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
    abi: get_all_questions_by_id,
    functionName: 'getQuestionById',
  };

  const {
    data: questions,
    isLoading: isQuestionsLoading,
    isError: isQuestionsError,
    refetch,
  } = useContractReads({
    contracts: id_list?.map((id: any) => ({ ...contract, args: [id] })) as any,
    enabled: false,
  });

  let questions_list: Question[] = questions as Question[];

  useEffect(() => {
    if (id_list.length > 0) {
      refetch();
    }
  }, [id_list]);

  if (isIdsLoading || isQuestionsLoading) {
    return (
      <Wrapper>
        <div>Loading...</div>
      </Wrapper>
    );
  }

  if (isIdsError || isQuestionsError) {
    return (
      <Wrapper>
        <div>Something went wrong.</div>
      </Wrapper>
    );
  }

  if (id_list.length === 0 || questions_list?.length === 0) {
    return (
      <Wrapper>
        <div>No questions to show.</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <>
        <div className='text-[24px] leading-6 mb-4 font-medium text-silver-100'>
          {id_list?.length} Questions
        </div>

        {questions_list?.map((question: Question) => (
          <div className='m-0 mb-3' key={question?.id.toString()}>
            <QuestionCardLarge {...question} />
          </div>
        ))}
      </>
    </Wrapper>
  );
};

export default Questions;

const Wrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <div className='bg-darkblue px-6 py-14 xl:p-[56px]'>
      <div className='grid grid-cols-12 gap-x-6 items-start justify-start'>
        <div className='hidden lg:flex col-span-3 flex-col gap-y-6'>
          <TrendingTags />
          <RelatedQuestions />
        </div>
        <div className='col-span-12 lg:col-span-9 rounded-3xl bg-gray-100 p-9'>
          <div className='flex flex-col md:flex-row gap-y-6 items-center justify-between text-[32px] text-white mb-16 md:mb-7'>
            <h1 className='text-[32px] leading-10 text-center xl:text-left m-0'>
              All Questions
            </h1>
            <Link
              href='/ask-question'
              className='no-underline w-full md:w-max cursor-pointer outline-none [border:none] py-[20px] px-[32px] bg-blue rounded-61xl flex flex-row box-border items-center justify-center'>
              <b className='text-[16px] outline-none tracking-[1.6px] leading-[16px] uppercase text-white text-center font-bold'>
                Ask A Question
              </b>
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
