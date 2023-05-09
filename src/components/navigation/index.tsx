/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { useAccount, useDisconnect } from 'wagmi';

import { truncate } from '@/utils/truncate';

const Navigation = () => {
  const { address, isConnected } = useAccount();
  const { disconnect, isSuccess } = useDisconnect();

  return (
    <>
      <header className='w-[100%] h-[max-content] flex flex-row py-[16px] px-[60px] box-border justify-between items-center bg-darkblue'>
        <Link
          href='/'
          className='flex flex-row gap-x-2 items-center justify-center w-[max-content]'>
          <img className='overflow-hidden' alt='' src='/logo_icon.svg' />
          <div className='text-white'>Web3dApp</div>
        </Link>
        <div className='rounded-11xl bg-gray-100 w-[390px] py-[0px] px-[24px] box-border flex gap-2 items-center justify-start'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 text-white'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
          <input
            className='border-none bg-transparent outline-none block w-full h-full py-[12px] text-white text-lg'
            type='search'
            placeholder='Search'
          />
        </div>
        <ul className='flex flex-row items-center justify-start gap-[24px] text-base leading-[16px] font-medium'>
          <li>
            <Link href='/' className='text-white no-underline'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/questions' className='text-white no-underline'>
              Questions
            </Link>
          </li>
          <li>
            <Link href='/tags' className='text-white no-underline'>
              Tags
            </Link>
          </li>
        </ul>
        {isConnected ? (
          <div className='flex gap-x-4'>
            <Link
              href='/profile'
              className='cursor-pointer outline-none text-white flex flex-row box-border items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-10 h-10'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </Link>
            <button
              onClick={() => disconnect()}
              className='cursor-pointer outline-none [border:none] py-[20px] px-[32px] bg-blue rounded-61xl flex flex-row box-border items-center justify-center'>
              <b className='text-[16px] outline-none tracking-[1.6px] leading-[16px] uppercase text-white text-center font-bold'>
                DISCONNECT
              </b>
            </button>
          </div>
        ) : (
          <div>
            <Link
              href='/connect-wallet'
              className='cursor-pointer outline-none [border:none] py-[20px] px-[32px] bg-blue rounded-61xl flex flex-row box-border items-center justify-center'>
              <b className='text-[16px] outline-none tracking-[1.6px] leading-[16px] uppercase text-white text-center font-bold'>
                CONNECT WALLET
              </b>
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navigation;
