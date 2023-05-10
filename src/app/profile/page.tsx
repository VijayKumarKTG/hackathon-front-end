/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';

import Stats from '@/components/stats';
import Achievements from '@/components/achievement';
import Setting from '@/components/setting';

const Profile = () => {
  const [active, set_active] = useState<string>('Stats');

  return (
    <div className='relative w-full bg-darkblue'>
      <div className='w-full h-40'>
        <img
          className='object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1682847842653-a881916772b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
          alt='Banner'
        />
      </div>
      <div className='absolute top-20 left-0 right-0 flex items-end justify-between px-8'>
        <div className='w-36 h-36 rounded-xl overflow-hidden border-2 border-white'>
          <img
            className='object-cover w-full h-full'
            src='https://images.unsplash.com/photo-1683451822283-873f6dfc6aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80'
            alt='Banner'
          />
        </div>
        <ul className='list-none flex flex-row gap-x-4 m-0 p-0'>
          <li>
            <a className='text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-github'>
                <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
              </svg>
            </a>
          </li>
          <li>
            <a className='text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-twitter'>
                <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'></path>
              </svg>
            </a>
          </li>
          <li>
            <a className='text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-globe'>
                <circle cx='12' cy='12' r='10'></circle>
                <line x1='2' y1='12' x2='22' y2='12'></line>
                <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className='mt-20 px-8 pb-14'>
        <h1 className='m-0 mb-2 text-white'>John Doe</h1>
        <p className='m-0 mb-10 text-lg text-gray-200'>johndoe@gmail.com</p>
        <ul className='m-0 mb-10 p-0 flex items-center gap-x-8 list-none'>
          <li className='p-0 m-0'>
            <button
              onClick={() => set_active('Stats')}
              className={`cursor-pointer bg-transparent flex items-center gap-x-2 py-3 px-6 rounded-sm ${
                active === 'Stats' ? 'text-darkblue bg-white' : 'text-white'
              }`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
                />
              </svg>
              <span
                className={`${
                  active === 'Stats' ? 'font-semibold' : 'font-medium'
                } text-lg`}>
                Stats
              </span>
            </button>
          </li>
          <li className='p-0 m-0'>
            <button
              onClick={() => set_active('Achievements')}
              className={`cursor-pointer bg-transparent flex items-center gap-x-2 py-3 px-6 rounded-sm ${
                active === 'Achievements'
                  ? 'text-darkblue bg-white'
                  : 'text-white'
              }`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
                />
              </svg>
              <span
                className={`${
                  active === 'Achievements' ? 'font-semibold' : 'font-medium'
                } text-lg`}>
                Achievements
              </span>
            </button>
          </li>
          <li className='p-0 m-0'>
            <button
              onClick={() => set_active('Setting')}
              className={`cursor-pointer bg-transparent flex items-center gap-x-2 py-3 px-6 rounded-sm ${
                active === 'Setting' ? 'text-darkblue bg-white' : 'text-white'
              }`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z'
                />
              </svg>
              <span
                className={`${
                  active === 'Setting' ? 'font-semibold' : 'font-medium'
                } text-lg`}>
                Setting
              </span>
            </button>
          </li>
        </ul>
        {active === 'Stats' ? (
          <Stats />
        ) : active === 'Achievements' ? (
          <Achievements />
        ) : active === 'Setting' ? (
          <Setting />
        ) : null}
      </div>
    </div>
  );
};

export default Profile;
