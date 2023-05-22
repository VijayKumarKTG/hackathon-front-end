import { useEffect, useState } from 'react';
import { useContractReads } from 'wagmi';
import { BigNumber } from 'ethers';

import usePaginationStore from '@/store/pagination';
import { Address, Question } from '@/types';
import { get_question_by_id_abi } from '@/abi/social';
import QuestionCardLarge from '../cards/questionLarge';

const Questions = ({ data }: { data: BigNumber[] }) => {
  const [currentPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [items, setItems] = useState<BigNumber[]>([]);

  const { pageSize } = usePaginationStore();

  useEffect(() => {
    if (data) {
      let count: any = data as BigNumber[];
      count = count.length;

      setTotalItems(count);
      setTotalPages(count < pageSize ? 1 : Math.ceil(count / pageSize));
    }
  }, []);

  useEffect(() => {
    if (totalItems > 0 && currentPage > 0) {
      let startIndex = 0;
      let endIndex = 0;

      if (totalPages === 1) {
        startIndex = 0;
        endIndex = totalItems;
      } else {
        startIndex = (totalPages - currentPage) * 10;
        endIndex = startIndex + 10;
      }

      let temp = [...data];

      setItems(temp.reverse().slice(startIndex, endIndex));
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
    contracts: items?.map((id: BigNumber) => ({
      ...contract,
      args: [id],
    })) as any,
    enabled: false,
  });

  let questions_list: Question[] = questions as Question[];

  useEffect(() => {
    if (items.length > 0) {
      refetchQuestions();
    }
  }, [items]);

  if (isQuestionsLoading) {
    return (
      <Wrapper total={data?.length}>
        <div>Loading...</div>
      </Wrapper>
    );
  }

  if (isQuestionsError) {
    return (
      <Wrapper total={data?.length}>
        <div>Something went wrong.</div>
      </Wrapper>
    );
  }

  if (items.length === 0 || questions_list?.length === 0) {
    return (
      <Wrapper total={data?.length}>
        <div>No questions to show.</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper total={data?.length}>
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
