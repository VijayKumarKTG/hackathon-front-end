/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client';
import { get_user_by_address_abi, register_user_abi } from '@/abi/user';
import { Address } from '@/types';
import { getPreviewImage } from '@/utils';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
} from 'wagmi';
import { create } from 'zustand';

type State = {
  profile: File | null;
  banner: File | null;
  name: string;
  email: string;
  bio: string;
};

type Actions = {
  changeProfile: (profile: File | null) => void;
  changeBanner: (banner: File | null) => void;
  changeName: (name: string) => void;
  changeEmail: (email: string) => void;
  changeBio: (bio: string) => void;
};

const useCountStore = create<State & Actions>((set) => ({
  profile: null,
  banner: null,
  name: '',
  email: '',
  bio: '',
  changeProfile: (profile: File | null) =>
    set((state: State) => ({ ...state, profile })),
  changeBanner: (banner: File | null) =>
    set((state: State) => ({ ...state, banner })),
  changeName: (name: string) => set((state: State) => ({ ...state, name })),
  changeEmail: (email: string) => set((state: State) => ({ ...state, email })),
  changeBio: (bio: string) => set((state: State) => ({ ...state, bio })),
}));

const Registration = () => {
  const {
    profile,
    banner,
    name,
    email,
    bio,
    // functions
    changeProfile,
    changeBanner,
    changeName,
    changeEmail,
    changeBio,
  } = useCountStore((state) => state);

  const { isConnected, address } = useAccount();
  const router = useRouter();

  const { config: register_user_config } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
    abi: register_user_abi,
    functionName: 'registerUser',
    args: ['uri/post/', process.env.NEXT_PUBLIC_HASH_SECRET],
  });

  const { write: register_user } = useContractWrite({
    ...register_user_config,
    onError(error) {
      console.log(error);
    },
    async onSuccess(data) {
      console.log(data.hash);

      router.push('/questions');
    },
  });

  useContractRead({
    address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
    abi: get_user_by_address_abi,
    functionName: 'getUserByAddress',
    args: [address],
    onError(error) {
      console.log(error.cause);
      register_user?.();
    },
    onSuccess(data) {
      console.log(data);
    },
  });

  useEffect(() => {
    if (!isConnected) {
      router.push('/connect-wallet');
    }
  }, [isConnected]);

  return (
    <div className='bg-darkblue px-6 py-14 min-[600px]:px-[100px] md:px-[192px] lg:px-[100px] flex flex-col lg:flex-row items-center justify-center gap-x-16 rounded-24 xl:py-40 xl:px-48'>
      <div className='w-full mb-14 lg:basis-1/2'>
        <h1 className='text-[30px] text-center lg:text-left lg:text-40 text-white m-0 mb-10'>
          Register now and be
          <br className='hidden lg:block' /> a part of Web3 dApp
          <br className='hidden lg:block' /> community 🚀
        </h1>
        <img
          className='w-full object-contain mix-blend-luminosity'
          alt='Login Image'
          src='/registeration-img.png'
        />
      </div>
      <form className='w-full flex flex-col gap-y-8 gap-4 lg:basis-1/2'>
        <div>
          <label className='block text-sm font-medium text-gray-50'>
            Profile photo
          </label>
          <div className='mt-1 bg-gray-50 border rounded-md border-gray-300 text-gray-900 text-sm focus:ring-blue focus:border-blue flex flex-col justify-center items-center w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue dark:focus:border-blue'>
            <div className='space-y-1 text-center'>
              <svg
                className='mx-auto h-12 w-12 text-white'
                stroke='currentColor'
                fill='none'
                viewBox='0 0 48 48'
                aria-hidden='true'>
                <path
                  d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <div className='flex text-sm text-white'>
                <label
                  htmlFor='file-upload'
                  className='relative flex flex-col items-center justify-center cursor-pointer rounded-md bg-transparent font-medium text-blue focus-within:outline-none focus-within:ring-2'>
                  <span>Upload a file</span>
                  <input
                    id='file-upload'
                    name='file-upload'
                    type='file'
                    className='sr-only'
                  />
                </label>
                <p className='pl-1'>or drag and drop</p>
              </div>
              <p className='text-xs text-white'>PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-50'>
            Cover photo
          </label>
          <div className='mt-1 bg-gray-50 border rounded-md border-gray-300 text-gray-900 text-sm focus:ring-blue focus:border-blue flex flex-col justify-center items-center w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue dark:focus:border-blue'>
            <div className='space-y-1 text-center'>
              <svg
                className='mx-auto h-12 w-12 text-white'
                stroke='currentColor'
                fill='none'
                viewBox='0 0 48 48'
                aria-hidden='true'>
                <path
                  d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <div className='flex text-sm text-white'>
                <label
                  htmlFor='file-upload'
                  className='relative flex flex-col items-center justify-center cursor-pointer rounded-md bg-transparent font-medium text-blue focus-within:outline-none focus-within:ring-2'>
                  <span>Upload a file</span>
                  <input
                    id='file-upload'
                    name='file-upload'
                    type='file'
                    className='sr-only'
                  />
                </label>
                <p className='pl-1'>or drag and drop</p>
              </div>
              <p className='text-xs text-white'>PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        <div className='col-span-6 sm:col-span-4'>
          <label
            htmlFor='first-name'
            className='block text-sm font-medium text-white'>
            Name
          </label>
          <input
            type='text'
            name='first-name'
            id='first-name'
            autoComplete='given-name'
            placeholder='Enter your name'
            className='mt-1 bg-gray-50 border rounded-md border-gray-300 text-gray-900 text-sm focus:ring-blue focus:border-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue dark:focus:border-blue'
          />
        </div>

        <div className='col-span-6 sm:col-span-4'>
          <label
            htmlFor='email-address'
            className='block text-sm font-medium text-white'>
            Email address
          </label>
          <input
            type='text'
            name='email-address'
            id='email-address'
            autoComplete='email'
            placeholder='Enter your email address'
            className='mt-1 bg-gray-50 border rounded-md border-gray-300 text-gray-900 text-sm focus:ring-blue focus:border-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue dark:focus:border-blue'
          />
        </div>

        <div className='col-span-6 sm:col-span-4'>
          <label htmlFor='bio' className='block text-sm font-medium text-white'>
            Bio
          </label>
          <div className='mt-1'>
            <textarea
              rows={4}
              name='comment'
              id='bio'
              placeholder='Enter your bio'
              className='mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-50 border rounded-md text-gray-900 text-sm focus:ring-blue focus:border-blue dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue dark:focus:border-blue resize-y'
              defaultValue={''}
            />
          </div>
        </div>

        <button
          type='submit'
          className='cursor-pointer border-none flex items-center justify-center py-4 rounded-11xl w-full bg-blue text-white font-medium text-lg leading-6'>
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
