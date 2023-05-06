import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  return (
    <div className='bg-midnightblue flex flex-col pt-[56px] px-[133px] pb-[32px] box-border items-start justify-start'>
      <div className='w-full flex flex-row items-center justify-between mb-[92px]'>
        <div className='flex flex-row'>
          <img className='w-[154px] h-[30px]' alt='' src='/group-1.svg' />
        </div>
        <div className='flex flex-row items-center justify-end gap-[12px]'>
          <img
            className='rounded-981xl w-[36px] h-[36px]'
            alt=''
            src='/insta.svg'
          />
          <img
            className='rounded-981xl w-[36px] h-[36px]'
            alt=''
            src='/facebook.svg'
          />
          <img
            className='rounded-981xl w-[36px] h-[36px]'
            alt=''
            src='/linked-in.svg'
          />
        </div>
      </div>
      <div className='w-full flex flex-row justify-between items-start pb-[125px] mb-[32px] border-b-[1px] border-solid border-white'>
        <div className='basis-2/3 flex flex-col items-start justify-start gap-y-[35px]'>
          <div className='w-[220px] box-border flex flex-col items-start justify-start border-b-[1px] border-solid border-white'>
            <h2 className='tracking-[0.9px] text-lg leading-[26px] uppercase flex items-center text-white'>
              Menu
            </h2>
          </div>
          <div className='flex flex-row items-start justify-between gap-x-[44px] text-sm leading-[16px]'>
            <div className='flex flex-col py-[0rem] px-[0.06rem] items-start justify-start gap-[1.13rem]'>
              <Link href='' className='text-white no-underline'>
                Home
              </Link>
              <Link href='' className='text-white no-underline'>
                About
              </Link>
              <Link href='' className='text-white no-underline'>
                Community
              </Link>
            </div>
            <div className='flex flex-col items-start justify-start gap-[1.13rem]'>
              <Link
                href=''
                className='text-white no-underline flex items-center w-[3.75rem]'>
                Login
              </Link>
              <Link href='' className='text-white no-underline'>
                Create Account
              </Link>
            </div>
          </div>
        </div>
        <div className='basis-1/3 rounded-21xl bg-gray-300 overflow-hidden flex flex-col py-[44px] px-[34px] box-border items-start justify-start'>
          <h2 className='tracking-[0.9px] text-lg leading-[25px] uppercase m-0 mb-[12px] text-white'>
            having questions?
          </h2>
          <p className='leading-[32px] text-lg flex items-center m-0 mb-[24px] text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
            nulla integer
          </p>
          <div className='w-full flex flex-row items-start justify-start'>
            <input
              className='w-full [border:none] font-medium text-white text-[14px] bg-gray-100 rounded-11xl flex flex-col py-[22px] px-[26px] box-border items-start justify-center'
              type='search'
              placeholder='# SEARCH BY TOPIC'
            />
          </div>
        </div>
      </div>
      <div className='text-[16px] leading-[26px] text-center text-white'>
        All rights reserved
      </div>
    </div>
  );
};

export default Footer;
