/* eslint-disable @next/next/no-img-element */
const Registration = () => {
  return (
    <>
      <div className='bg-darkblue py-20 px-48'>
        <div className='flex text-40 text-white'>
          Register now and be
          <br /> a part of Web3 dApp
          <br /> community 🚀
        </div>
        <div className='flex flex-row items-stretch gap-x-16 mt-12 rounded-24'>
          <div className='basis-1/2'>
            <img
              className='w-[453px] h-[609px] mix-blend-luminosity'
              alt='Login Image'
              src='/registeration-img.png'
            />
          </div>
          <form className='basis-1/2 flex flex-col gap-y-8'>
            <div className='flex flex-row gap-x-8 w-full'>
              <div className='flex flex-col gap-y-2'>
                <label
                  className='text-[20px] text-white font-medium w-full'
                  htmlFor='profile'>
                  Profile
                </label>
                <div className='relative w-10 h-10 border-none px-5 py-4 rounded-lg bg-white text-gray-100 flex items-center justify-center'>
                  <input
                    className='absolute w-full h-full opacity-0'
                    type='file'
                    accept='images/*'
                    id='profile'
                    name='profile'
                    placeholder='Enter your profile'
                  />
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
                      d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                    />
                  </svg>
                </div>
              </div>

              <div className='flex flex-col gap-y-2 w-full box-border'>
                <label
                  className='text-[20px] text-white font-medium w-full'
                  htmlFor='banner'>
                  Banner
                </label>
                <div className='relative box-border w-full h-full border-none px-5 py-4 rounded-lg bg-white text-gray-100 flex items-center justify-center'>
                  <input
                    className='absolute w-full h-full opacity-0'
                    type='file'
                    accept='images/*'
                    id='banner'
                    name='banner'
                    placeholder='Enter your banner'
                  />
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
                      d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-y-2'>
              <label
                className='text-[20px] text-white font-medium w-full'
                htmlFor='name'>
                Name
              </label>
              <input
                className='w-full box-border border-none px-5 py-4 rounded-lg bg-white text-black text-lg leading-6'
                type='text'
                id='name'
                name='name'
                placeholder='Enter your name'
              />
            </div>

            <div className='flex flex-col gap-y-2'>
              <label
                className='text-[20px] text-white font-medium w-full'
                htmlFor='email'>
                Email
              </label>
              <input
                className='w-full box-border border-none px-5 py-4 rounded-lg bg-white text-black text-lg leading-6'
                type='mail'
                id='email'
                name='email'
                placeholder='Enter your email'
              />
            </div>

            <div className='flex flex-col gap-y-2'>
              <label
                className='text-[20px] text-white font-medium w-full'
                htmlFor='bio'>
                Bio
              </label>
              <textarea
                className='w-full box-border border-none px-5 py-4 rounded-lg bg-white text-black text-lg leading-6'
                id='bio'
                name='bio'
                rows={5}
                placeholder='Enter your bio'></textarea>
            </div>

            <button
              type='submit'
              className='border-none flex items-center justify-center py-4 rounded-11xl w-full bg-blue text-white font-medium text-lg leading-6'>
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
