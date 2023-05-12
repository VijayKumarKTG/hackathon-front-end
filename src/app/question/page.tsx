/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';

import RelatedQuestions from '@/components/relatedQuestions';
import TrendingTags from '@/components/trendingTags';
import TagChip from '@/components/tagChip';
import ContentCard from '@/components/cards/content';

const Question: NextPage = () => {
  return (
    <div className='bg-darkblue px-6 py-14 xl:p-[56px]'>
      <div className='grid grid-cols-12 gap-x-6 items-start justify-start'>
        <div className='hidden lg:flex col-span-3 flex-col gap-y-6'>
          <TrendingTags />
          <RelatedQuestions />
        </div>
        <div className='col-span-12 lg:col-span-9 rounded-3xl bg-gray-100 p-6 xl:p-9'>
          <div className='flex flex-col items-start justify-start gap-[8px] text-[32px] text-white mb-7'>
            <h1 className='text-[32px] leading-10 m-0'>
              Truffle init not creating .sol files
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
            <ContentCard />
          </div>

          <div className='text-[24px] leading-6 mb-3 font-medium text-silver-100'>
            2 Answers
          </div>

          <div className='m-0 mb-6'>
            <ContentCard />
          </div>

          <div className='m-0 mb-6'>
            <ContentCard />
          </div>

          <div className='m-0 mb-6'>
            <ContentCard />
          </div>

          <div className='m-0 mb-6'>
            <ContentCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
