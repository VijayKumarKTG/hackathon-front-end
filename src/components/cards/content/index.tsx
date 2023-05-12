/* eslint-disable @next/next/no-img-element */

import MarkdownRenderer from '@/components/mdx/renderer';

const markdown = `
I **love** using [Next.js](https://nextjs.org/) 
Hello, Next.js! You can import and use React components in MDX files.
I'm using Truffle to create my project folder but when I run truffle init, the command creates the folders with no file in them, only .gitkeep file...
Is there an issue or the current version of truffle doesn't create automatically the .sol files etc.?
I'm using these libraries versions:
Truffle v5.5.31 (core: 5.5.31) Ganache v7.4.3 Solidity - 0.8.17 (solc-js) Node v16.14.2 Web3.js v1.7.4
`;

const ContentCard = () => {
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
        <div className='relative font-medium'>10</div>
        <button className='border-none bg-transparent w-[max-content] h-[max-content] flex m-0 p-0 cursor-pointer'>
          <img
            className='relative w-8 h-[19px]'
            alt='Downvote'
            src='/vector1.svg'
          />
        </button>
      </div>
      <MarkdownRenderer markdown={markdown} />
    </div>
  );
};

export default ContentCard;
