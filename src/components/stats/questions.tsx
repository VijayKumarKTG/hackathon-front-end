import { useEffect } from 'react';
import {
  useAccount,
  useContractRead,
  useContractReads,
  useNetwork,
} from 'wagmi';
import { BigNumber } from 'ethers';

import { get_questions_by_user_address } from '@/abi/user';
import usePaginationStore from '@/store/pagination';
import { Address, Question } from '@/types';
import { get_question_by_id_abi } from '@/abi/social';
import QuestionCardLarge from '../cards/questionLarge';

const Questions = () => {
  const { chain } = useNetwork();
  const { address } = useAccount();

  const {
    currentPage,
    totalItems,
    pageSize,
    totalPages,
    items,
    setTotalItems,
    setTotalPages,
    setItems,
  } = usePaginationStore();

  const { data, isLoading, isError, refetch } = useContractRead({
    address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
    abi: get_questions_by_user_address,
    functionName: 'getQuestionsByUserAddress',
    chainId: chain?.id,
    args: [address],
    enabled: false,
  });

  const ids = data as BigNumber[];

  console.log(ids);

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (data && !isLoading && !isError) {
      let count: any = data as BigNumber[];
      count = count.length;

      setTotalItems(count);
      setTotalPages(count < pageSize ? 1 : Math.ceil(count / pageSize));
    }
  }, [data]);

  useEffect(() => {
    if (totalItems > 0) {
      let startIndex = 0;
      let endIndex = 0;
      const items_list: number[] = [];

      if (totalPages === 1) {
        startIndex = 0;
        endIndex = totalItems;
      } else {
        startIndex = (totalPages - currentPage) * 10;
        endIndex = startIndex + 10;
      }

      for (let i = endIndex; i > startIndex; i--) {
        items_list.push(i);
      }

      setItems(items_list);
    }
  }, [totalItems, currentPage]);

  const contract = {
    address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
    abi: get_question_by_id_abi,
    functionName: 'getQuestionById',
  };

  const {
    data: questions,
    isLoading: isQuestionsLoading,
    isError: isQuestionsError,
    refetch: refetchQuestions,
  } = useContractReads({
    contracts: items?.map((id: number) => ({ ...contract, args: [id] })) as any,
    enabled: false,
  });

  let questions_list: Question[] = questions as Question[];

  useEffect(() => {
    if (items.length > 0) {
      refetchQuestions();
    }
  }, [items]);

  if (isLoading || isQuestionsLoading) {
    return (
      <Wrapper total={ids?.length}>
        <div>Loading...</div>
      </Wrapper>
    );
  }

  if (isError || isQuestionsError) {
    return (
      <Wrapper total={ids?.length}>
        <div>Something went wrong.</div>
      </Wrapper>
    );
  }

  if (items.length === 0 || questions_list?.length === 0) {
    return (
      <Wrapper total={ids?.length}>
        <div>No questions to show.</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper total={ids?.length}>
      <div>
        {questions_list?.map((question: Question) => (
          <div className='m-0 mb-3' key={question?.id.toString()}>
            <QuestionCardLarge {...question} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Questions;

const Wrapper = ({
  children,
  total,
}: {
  children: JSX.Element;
  total: number;
}) => {
  return (
    <div>
      <h2 className='m-0 mb-6 text-[28px] flex flex-col lg:flex-row lg:items-center lg:gap-x-4 gap-y-10'>
        {'Questions Asked '}
        <span className='text-silver-100 text-base'>({total} Questions)</span>
      </h2>
      {children}
    </div>
  );
};