/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Link from 'next/link';

import RelatedQuestions from '@/components/relatedQuestions';
import TrendingTags from '@/components/trendingTags';
import QuestionCardLarge from '@/components/cards/questionLarge';

const Questions: NextPage = () => {
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
              Questions tagged hardhat
            </h1>
            <Link
              href='/ask-question'
              className='no-underline w-full md:w-max cursor-pointer outline-none [border:none] py-[20px] px-[32px] bg-blue rounded-61xl flex flex-row box-border items-center justify-center'>
              <b className='text-[16px] outline-none tracking-[1.6px] leading-[16px] uppercase text-white text-center font-bold'>
                Ask A Question
              </b>
            </Link>
          </div>

          <div className='text-[24px] leading-6 mb-4 font-medium text-silver-100'>
            148 Questions
          </div>

          <div className='m-0 mb-3'>
            <QuestionCardLarge
              question="Javascript I wrote isn't working for for my html [closed]"
              voteCount={23}
            />
          </div>

          <div className='m-0 mb-3'>
            <QuestionCardLarge
              question='How can I anchor my absolute button to the end of a div/container so that when I scroll that div/container to right it will remain in the same place'
              voteCount={-5}
            />
          </div>

          <div className='m-0 mb-3'>
            <QuestionCardLarge
              question='How can I anchor my absolute button to the end of a div/container so that when I scroll'
              voteCount={234}
            />
          </div>

          <div className='m-0 mb-3'>
            <QuestionCardLarge
              question="Javascript I wrote isn't working for for my html [closed]"
              voteCount={23}
            />
          </div>

          <div className='m-0 mb-3'>
            <QuestionCardLarge
              question="Javascript I wrote isn't working for for my html [closed]"
              voteCount={23}
            />
          </div>

          <div className='m-0 mb-3'>
            <QuestionCardLarge
              question="Javascript I wrote isn't working for for my html [closed]"
              voteCount={23}
            />
          </div>

          <div className='m-0 mb-3'>
            <QuestionCardLarge
              question="Javascript I wrote isn't working for for my html [closed]"
              voteCount={23}
            />
          </div>

          <div className='m-0 mb-3'>
            <QuestionCardLarge
              question="Javascript I wrote isn't working for for my html [closed]"
              voteCount={23}
            />
          </div>

          <div className='m-0 mb-3'>
            <QuestionCardLarge
              question="Javascript I wrote isn't working for for my html [closed]"
              voteCount={23}
            />
          </div>

          <div className='m-0 mb-3'>
            <QuestionCardLarge
              question="Javascript I wrote isn't working for for my html [closed]"
              voteCount={23}
            />
          </div>

          <div className='m-0 mb-3'>
            <QuestionCardLarge
              question="Javascript I wrote isn't working for for my html [closed]"
              voteCount={23}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
