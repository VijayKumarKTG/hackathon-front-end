import Link from 'next/link';
import TagCardSmall from '../cards/tagSmall';

const TrendingTags = () => {
  return (
    <div className='rounded-3xl bg-gray-100 px-6 py-7'>
      <div className='mb-[14px] flex flex-row items-center justify-between'>
        <h2 className='font-medium m-0 text-white text-lg leading-7'>
          Trending 🔥
        </h2>
        <Link href='/tags' className='text-white text-sm'>
          View All
        </Link>
      </div>
      <div className='flex flex-col items-center justify-start gap-[9px]'>
        <TagCardSmall name='Web3' usersCount={234} />
        <TagCardSmall name='JavaScript' usersCount={98} />
        <TagCardSmall name='React' usersCount={67} />
        <TagCardSmall name='Ether.js' usersCount={388} />
        <TagCardSmall name='Polygon' usersCount={65} />
      </div>
    </div>
  );
};

export default TrendingTags;
