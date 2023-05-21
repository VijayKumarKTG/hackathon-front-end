import { Answer } from '@/types';
import axios from 'axios';
import Link from 'next/link';
import { useQuery } from 'wagmi';

const AnswerCardLarge = (answer: Answer) => {
  const { id, qid, downvotes, upvotes, uri } = answer;

  const { data, isError, isLoading } = useQuery(
    ['get-answer-metadata', id?.toString()],
    () => axios.get(uri)
  );

  if (isLoading) {
    return (
      <Wrapper
        id={id?.toString()}
        voteCount={upvotes?.sub(downvotes).toNumber()}>
        <div>Loading...</div>
      </Wrapper>
    );
  }

  if (isError) {
    return (
      <Wrapper
        id={id?.toString()}
        voteCount={upvotes?.sub(downvotes).toNumber()}>
        <div>Something went wrong!</div>
      </Wrapper>
    );
  }

  if (!data) {
    return (
      <Wrapper
        id={id?.toString()}
        voteCount={upvotes?.sub(downvotes).toNumber()}>
        <div>No data found.</div>
      </Wrapper>
    );
  }

  const metadata = data.data as any;

  return (
    <Link
      href={`/${qid?.toString()}#${id}`}
      className='cursor-pointer [border:none] p-6 bg-gray-500 rounded-xl w-full gap-x-8 flex flex-row box-border items-center justify-start text-white no-underline'>
      <div className='text-sm leading-5 text-silver-100'>
        {upvotes?.sub(downvotes).toString()} Votes
      </div>
      <p className='text-base leading-6 text-gainsboro'>{metadata?.answer}</p>
    </Link>
  );
};

export default AnswerCardLarge;

const Wrapper = ({
  children,
  voteCount,
  id,
}: {
  children: JSX.Element;
  voteCount: number;
  id: string;
}) => {
  return (
    <Link
      href={`/${id?.toString()}`}
      className='cursor-pointer [border:none] p-6 bg-gray-500 rounded-xl w-full gap-x-8 flex flex-row box-border items-center justify-start text-white no-underline'>
      <div className='text-sm leading-5 text-silver-100'>{voteCount} Votes</div>
      {children}
    </Link>
  );
};
