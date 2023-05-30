import { Address, useAccount, useContractRead, useNetwork } from 'wagmi';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
import NFTCard from '../cards/nftcard';
import { get_user_badges_abi } from '@/abi/user';

const Achievements = () => {
  /**
   * @get hooks from wagmi
   */
  const { address } = useAccount();
  const { chain } = useNetwork();

  /**
   * @config to read user data with address
   */
  const { data, error, isError, isFetching } = useContractRead({
    address: process.env.NEXT_PUBLIC_STACK3_BADGES_ADDRESS as Address,
    abi: get_user_badges_abi,
    functionName: 'getUserBadges',
    chainId: chain?.id,
    args: [address],
    onError(error: Error) {
      console.log(error.message);
    },
  });

  console.log(data);

  return isFetching ? (
    <div className='bg-gray-100 rounded-xl p-6 lg:p-10 text-white'>
      <div className='mb-12'>
        <h2 className='m-0 mb-6 text-[28px]'>
          <Skeleton
            baseColor='#22294d'
            highlightColor='#313a67'
            height='42px'
            width='300px'
          />
        </h2>
        <div className='flex flex-row gap-8 overflow-x-scroll overflow-y-hidden items-center justify-start'>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
        </div>
      </div>
      <div className='mb-12'>
        <h2 className='m-0 mb-6 text-[28px] flex flex-col lg:flex-row gap-y-10'>
          <Skeleton
            baseColor='#22294d'
            highlightColor='#313a67'
            height='42px'
            width='300px'
          />
        </h2>
        <div className='flex flex-row gap-8 overflow-x-scroll overflow-y-hidden items-center justify-start'>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
        </div>
      </div>
      <div className=''>
        <h2 className='m-0 mb-6 text-[28px] flex flex-col lg:flex-row gap-y-10'>
          <Skeleton
            baseColor='#22294d'
            highlightColor='#313a67'
            height='42px'
            width='300px'
          />
        </h2>
        <div className='flex flex-row gap-8 overflow-x-scroll overflow-y-hidden items-center justify-start'>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='bg-gray-100 rounded-xl p-6 lg:p-10 text-white'>
      <div className='mb-12'>
        <h2 className='m-0 mb-6 text-[28px]'>Badges Collected</h2>
        <div className='flex flex-row gap-8 overflow-x-scroll overflow-y-hidden items-center justify-start'>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
        </div>
      </div>
      <div className='mb-12'>
        <h2 className='m-0 mb-6 text-[28px] flex flex-col lg:flex-row gap-y-10'>
          Raremint NFTs{' '}
          <span className='text-silver-100 text-base'>(5 NFTs)</span>
        </h2>
        <div className='flex flex-row gap-8 overflow-x-scroll overflow-y-hidden items-center justify-start'>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
        </div>
      </div>
      <div className=''>
        <h2 className='m-0 mb-6 text-[28px] flex flex-col lg:flex-row gap-y-10'>
          Merged NFTs{' '}
          <span className='text-silver-100 text-base'>(3 NFTs)</span>
        </h2>
        <div className='flex flex-row gap-8 overflow-x-scroll overflow-y-hidden items-center justify-start'>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isFetching} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
