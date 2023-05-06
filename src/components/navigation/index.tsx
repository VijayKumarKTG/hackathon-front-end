/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Search } from 'react-feather';

const Navigation = () => {
  return (
    <header className='w-[100%] h-[max-content] flex flex-row py-[16px] px-[60px] box-border justify-between items-center bg-darkblue'>
      <a className='flex flex-row gap-x-2 items-center w-[max-content]'>
        <img className='overflow-hidden' alt='' src='/logo_icon.svg' />
        <div className='leading-[26px] text-white'>Web3dApp</div>
      </a>
      <div className='rounded-11xl bg-gray-100 w-[390px] py-[0px] px-[24px] box-border flex gap-2 items-center justify-start'>
        <Search color='white' />
        <input
          className='border-none bg-transparent outline-none block w-full h-full py-[12px] text-white text-lg'
          type='search'
          placeholder='Search'
        />
      </div>
      <ul className='flex flex-row items-start justify-start gap-[24px] text-base leading-[16px] font-medium'>
        <li>
          <Link href='/' className='text-white no-underline'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/' className='text-white no-underline'>
            About
          </Link>
        </li>
        <li>
          <Link href='/' className='text-white no-underline'>
            Community
          </Link>
        </li>
        <li>
          <Link href='/' className='text-white no-underline'>
            Login
          </Link>
        </li>
      </ul>
      <div>
        <Link
          href='/'
          className='cursor-pointer outline-none [border:none] py-[20px] px-[32px] bg-blue rounded-61xl flex flex-row box-border items-center justify-center'>
          <b className='text-[16px] outline-none tracking-[1.6px] leading-[16px] uppercase text-white text-center font-bold'>
            CREATE ACCOUNT
          </b>
        </Link>
      </div>
    </header>
  );
};

export default Navigation;
