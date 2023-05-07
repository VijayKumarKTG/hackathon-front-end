import Link from 'next/link';

interface Props {
  question: string;
  voteCount: number;
}

const QuestionCardLarge = (props: Props) => {
  const { question, voteCount } = props;

  return (
    <Link
      href='/question'
      className='cursor-pointer [border:none] p-6 bg-gray-500 rounded-xl w-full gap-x-8 flex flex-row box-border items-center justify-start text-white no-underline'>
      <div className='text-sm leading-5 text-silver-100'>{voteCount} Votes</div>
      <p className='text-base leading-6 text-gainsboro'>{question}</p>
    </Link>
  );
};

export default QuestionCardLarge;
