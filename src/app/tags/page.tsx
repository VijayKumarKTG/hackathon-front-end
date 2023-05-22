/* eslint-disable @next/next/no-img-element */
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Address, useAccount, useContractRead, useNetwork } from 'wagmi';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import TrendingTags from '@/components/trendingTags';
import QuestionCardLarge from '@/components/cards/questionLarge';
import TagCardLarge from '@/components/cards/tagLarge';
import Pagination from '@/components/pagination';
import { get_user_by_address_abi } from '@/abi/user';

const Tags: NextPage = () => {
  const { address } = useAccount();
  const { chain } = useNetwork();

  const {
    data: user_data,
    isLoading: isUserLoading,
    isError: isUserError,
    isFetching,
  } = useContractRead({
    address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
    abi: get_user_by_address_abi,
    functionName: 'getUserByAddress',
    chainId: chain?.id,
    args: [address],
    onError(error: Error) {
      console.log(error.message);
    },
  });

  return isFetching ? (
    <div className='bg-darkblue px-6 py-14 xl:p-[56px]'>
      <div className='grid grid-cols-12 gap-x-6 items-start justify-start'>
        <div className='hidden lg:flex col-span-3 flex-col gap-y-6'>
          <TrendingTags />
        </div>
        <div className='col-span-12 lg:col-span-9 rounded-3xl bg-gray-100 p-9'>
          <div className='flex flex-col md:flex-row gap-y-6 items-center justify-between text-[32px] text-white mb-16 md:mb-7'>
            <h1 className='text-[32px] leading-10 text-center xl:text-left m-0'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height='42px'
                width='80px'
              />
            </h1>
            <Link href='/ask-question' className='w-full md:max-w-[220px]'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height={60}
                // width={220}
                borderRadius={500}
              />
            </Link>
          </div>

          <div className='text-[24px] leading-6 mb-4 font-medium text-silver-100'>
            <Skeleton
              baseColor='#22294d'
              highlightColor='#313a67'
              height='28px'
              width='110px'
            />
          </div>

          <div className='grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:md-grid-cols-4 gap-4 items-stretch'>
            <div className='cursor-pointer [border:none] rounded-xl w-full flex-col box-border justify-start no-underline'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height='138px'
                borderRadius={20}
                // width="110px"
              />
            </div>

            <div className='cursor-pointer [border:none] rounded-xl w-full flex-col box-border justify-start no-underline'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height='138px'
                borderRadius={20}
                // width="110px"
              />
            </div>

            <div className='cursor-pointer [border:none] rounded-xl w-full flex-col box-border justify-start no-underline'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height='138px'
                borderRadius={20}
                // width="110px"
              />
            </div>

            <div className='cursor-pointer [border:none] rounded-xl w-full flex-col box-border justify-start no-underline'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height='138px'
                borderRadius={20}
                // width="110px"
              />
            </div>

            <div className='cursor-pointer [border:none] rounded-xl w-full flex-col box-border justify-start no-underline'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height='138px'
                borderRadius={20}
                // width="110px"
              />
            </div>

            <div className='cursor-pointer [border:none] rounded-xl w-full flex-col box-border justify-start no-underline'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height='138px'
                borderRadius={20}
                // width="110px"
              />
            </div>

            <div className='cursor-pointer [border:none] rounded-xl w-full flex-col box-border justify-start no-underline'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height='138px'
                borderRadius={20}
                // width="110px"
              />
            </div>

            <div className='cursor-pointer [border:none] rounded-xl w-full flex-col box-border justify-start no-underline'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height='138px'
                borderRadius={20}
                // width="110px"
              />
            </div>

            <div className='cursor-pointer [border:none] rounded-xl w-full flex-col box-border justify-start no-underline'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height='138px'
                borderRadius={20}
                // width="110px"
              />
            </div>

            <div className='cursor-pointer [border:none] rounded-xl w-full flex-col box-border justify-start no-underline'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height='138px'
                borderRadius={20}
                // width="110px"
              />
            </div>

            <div className='cursor-pointer [border:none] rounded-xl w-full flex-col box-border justify-start no-underline'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height='138px'
                borderRadius={20}
                // width="110px"
              />
            </div>

            <div className='cursor-pointer [border:none] rounded-xl w-full flex-col box-border justify-start no-underline'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height='138px'
                borderRadius={20}
                // width="110px"
              />
            </div>

            <div className='cursor-pointer [border:none] rounded-xl w-full flex-col box-border justify-start no-underline'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height='138px'
                borderRadius={20}
                // width="110px"
              />
            </div>

            <div className='cursor-pointer [border:none] rounded-xl w-full flex-col box-border justify-start no-underline'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height='138px'
                borderRadius={20}
                // width="110px"
              />
            </div>

            <div className='cursor-pointer [border:none] rounded-xl w-full flex-col box-border justify-start no-underline'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height='138px'
                borderRadius={20}
                // width="110px"
              />
            </div>

            <div className='cursor-pointer [border:none] rounded-xl w-full flex-col box-border justify-start no-underline'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height='138px'
                borderRadius={20}
                // width="110px"
              />
            </div>

            <div className='cursor-pointer [border:none] rounded-xl w-full flex-col box-border justify-start no-underline'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height='138px'
                borderRadius={20}
                // width="110px"
              />
            </div>

            <div className='cursor-pointer [border:none] rounded-xl w-full flex-col box-border justify-start no-underline'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height='138px'
                borderRadius={20}
                // width="110px"
              />
            </div>

            <div className='cursor-pointer [border:none] rounded-xl w-full flex-col box-border justify-start no-underline'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height='138px'
                borderRadius={20}
                // width="110px"
              />
            </div>

            <div className='cursor-pointer [border:none] rounded-xl w-full flex-col box-border justify-start no-underline'>
              <Skeleton
                baseColor='#22294d'
                highlightColor='#313a67'
                height='138px'
                borderRadius={20}
                // width="110px"
              />
            </div>
          </div>
          <div className='flex justify-center mt-8'>
            <Skeleton
              baseColor='#22294d'
              highlightColor='#313a67'
              height='40px'
              borderRadius={20}
              width='230px'
            />
            {/* <Pagination currentPage={1} totalPages={192} /> */}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='bg-darkblue px-6 py-14 xl:p-[56px]'>
      <div className='grid grid-cols-12 gap-x-6 items-start justify-start'>
        <div className='hidden lg:flex col-span-3 flex-col gap-y-6'>
          <TrendingTags />
        </div>
        <div className='col-span-12 lg:col-span-9 rounded-3xl bg-gray-100 p-9'>
          <div className='flex flex-col md:flex-row gap-y-6 items-center justify-between text-[32px] text-white mb-16 md:mb-7'>
            <h1 className='text-[32px] leading-10 text-center xl:text-left m-0'>
              Tags
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
            1922 Tags
          </div>

          <div className='grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:md-grid-cols-4 gap-4 items-stretch'>
            <div>
              <TagCardLarge
                name='JavaScript'
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name='JavaScript'
                description="Javascript I wrote isn't working for  for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name='JavaScript'
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name='JavaScript'
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name='JavaScript'
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name='JavaScript'
                description="Javascript I wrote isn't working for  for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name='JavaScript'
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name='JavaScript'
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name='JavaScript'
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name='JavaScript'
                description="Javascript I wrote isn't working for  for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name='JavaScript'
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name='JavaScript'
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name='JavaScript'
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name='JavaScript'
                description="Javascript I wrote isn't working for  for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name='JavaScript'
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name='JavaScript'
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name='JavaScript'
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name='JavaScript'
                description="Javascript I wrote isn't working for  for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name='JavaScript'
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name='JavaScript'
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>
          </div>
          <div className='flex justify-center'>
            <Pagination currentPage={1} totalPages={192} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
