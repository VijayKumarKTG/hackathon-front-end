/* eslint-disable @next/next/no-img-element */

import MarkdownRenderer from '@/components/mdx/renderer';

interface Props {
  content: string;
  voteCount: number;
}

const ContentCard = (props: Props) => {
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
        <div className='relative font-medium'>{props.voteCount}</div>
        <button className='border-none bg-transparent w-[max-content] h-[max-content] flex m-0 p-0 cursor-pointer'>
          <img
            className='relative w-8 h-[19px]'
            alt='Downvote'
            src='/vector1.svg'
          />
        </button>
      </div>
      {/* <>{props.content}</> */}
      <div>
        <MarkdownRenderer markdown={props.content} />
      </div>
    </div>
  );
};

export default ContentCard;
