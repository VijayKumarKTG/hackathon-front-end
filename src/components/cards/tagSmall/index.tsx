/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

interface Props {
  name: string;
  usersCount: number;
}

const TagCardSmall = (props: Props) => {
  const { name, usersCount } = props;

  return (
    <Link
      href='/questions'
      className='cursor-pointer [border:none] py-[8px] px-3.5 bg-gray-500 rounded-xl w-full gap-x-2 flex flex-row box-border items-center justify-start'>
      <div className='w-[37px] h-[37px] rounded-full bg-navy flex flex-row justify-center items-center'>
        <img className='w-6 h-6' alt='' src='/simpleiconsethereum.svg' />
      </div>
      <div className='flex flex-col items-start justify-start'>
        <div className='text-mini text-white text-left'>{name}</div>
        <div className='text-3xs text-silver-200 text-left mt-[-1px]'>
          {usersCount} Users
        </div>
      </div>
    </Link>
  );
};

export default TagCardSmall;
