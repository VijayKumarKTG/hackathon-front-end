/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <section className='bg-darkblue w-full overflow-hidden text-left text-white'>
      <div id='hero' className='flex flex-row item h-[max-content] py-14'>
        <div className='basis-1/2 flex flex-col justify-center items-start pl-[100px]'>
          <h1 className='text-[62px] font-bold leading-[75px] flex items-center m-0 mb-[14px]'>
            Interact with community, earn rewards
          </h1>
          <p className='leading-[32px] text-lg m-0 mb-[42px] w-[550px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aenean dis placerat.
          </p>
          <div className='flex flex-row py-[0rem] pr-[23.84rem] pl-[0rem] box-border items-start justify-start gap-[1.75rem]'>
            <Link
              href='/connect-wallet'
              className='w-[250px] cursor-pointer [border:none] py-[20px] px-[32px] bg-blue rounded-61xl flex flex-row box-border items-center justify-center'>
              <b className='text-[16px] tracking-[1.6px] leading-[16px] uppercase text-white text-center font-bold'>
                GET STARTED
              </b>
            </Link>
            <Link
              href='/'
              className='w-[180px] cursor-pointer [border:none] py-[20px] px-[32px] bg-gray-300 rounded-61xl flex flex-row box-border items-center justify-center'>
              <b className='text-[16px] tracking-[1.6px] leading-[16px] uppercase text-white text-center font-bold'>
                KNOW MORE
              </b>
            </Link>
          </div>
        </div>
        <img
          className='basis-1/2 mix-blend-luminosity'
          src='/hero-bg.png'
          alt='Hero section background'
        />
      </div>
      <div id='section-1' className='pt-14 pb-[120px] px-[120px]'>
        <h2 className='text-[42px] leading-[55px] text-bold text-center m-0 mb-[16px]'>
          How it works?
        </h2>
        <p className='text-lg leading-[32px] text-center m-0 mb-[80px] px-[250px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </p>
        <div className='grid grid-cols-4 gap-[24px]'>
          <div className='rounded-21xl bg-midnightblue px-[24px] py-[48px]'>
            <div className='rounded-xl bg-blue w-[4.25rem] h-[4.25rem] overflow-hidden flex flex-col items-center justify-center'>
              <div className='flex flex-row py-[0rem] px-[0rem] items-start justify-start'>
                <img
                  className='relative w-[2.63rem] h-[2.56rem] shrink-0 overflow-hidden opacity-[0.85]'
                  alt=''
                  src='/60e4a1e73807563947e7fb99-iconsectionabout1cryptotemplatesvg.svg'
                />
              </div>
            </div>
            <h3 className='tracking-[0.9px] leading-[1.62rem] uppercase m-0 mb-[8px] mt-[20px]'>
              ask and answer questions
            </h3>
            <p className='text-[1rem] leading-[1.63rem] flex items-center m-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla suspendisse tortor aene.
            </p>
          </div>
          <div className='relative col-span-2 row-span-2 rounded-21xl bg-blue overflow-hidden'>
            <div className='px-[33px] py-[44px]'>
              <h3 className='tracking-[1px] text-[26px] leading-[26px] m-0 mb-[22px] uppercase'>
                INTERACT WITH COMMUNITY
              </h3>
              <p className='text-[16px] leading-[26px] flex items-center m-0'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                amet, morbi non at sed neque.
              </p>
            </div>
            <img
              className='absolute w-full h-full object-cover mix-blend-luminosity'
              alt=''
              src='/section1-bg.png'
            />
          </div>
          <div className='rounded-21xl bg-midnightblue px-[24px] py-[48px]'>
            <div className='rounded-xl bg-blue w-[4.25rem] h-[4.25rem] overflow-hidden flex flex-col items-center justify-center'>
              <div className='flex flex-row py-[0rem] px-[0rem] items-start justify-start'>
                <img
                  className='relative w-[2.63rem] h-[2.63rem] shrink-0 overflow-hidden opacity-[0.85]'
                  alt=''
                  src='/60e4a1e7380756fecde7fb9c-iconsectionabout2cryptotemplatesvg.svg'
                />
              </div>
            </div>
            <h3 className='tracking-[0.9px] leading-[1.62rem] uppercase m-0 mb-[8px] mt-[20px]'>
              see stats and upvotes
            </h3>
            <p className='text-[1rem] leading-[1.63rem] flex items-center m-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla suspendisse tortor aene.
            </p>
          </div>
          <div className='rounded-21xl bg-midnightblue px-[24px] py-[48px]'>
            <div className='rounded-xl bg-blue w-[4.25rem] h-[4.25rem] overflow-hidden flex flex-col items-center justify-center'>
              <div className='flex flex-row py-[0rem] px-[0rem] items-start justify-start'>
                <img
                  className='relative w-[2.69rem] h-[2.44rem] shrink-0 overflow-hidden opacity-[0.85]'
                  alt=''
                  src='/60e4a1e73807565f69e7fb9b-iconsectionabout3cryptotemplatesvg.svg'
                />
              </div>
            </div>
            <h3 className='tracking-[0.9px] leading-[1.62rem] uppercase m-0 mb-[8px] mt-[20px]'>
              get rewards
            </h3>
            <p className='text-[1rem] leading-[1.63rem] flex items-center m-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla suspendisse tortor aene.
            </p>
          </div>
          <div className='rounded-21xl bg-midnightblue px-[24px] py-[48px]'>
            <div className='rounded-xl bg-blue w-[4.25rem] h-[4.25rem] overflow-hidden flex flex-col items-center justify-center'>
              <div className='flex flex-row py-[0rem] px-[0rem] items-start justify-start'>
                <img
                  className='relative w-[2.81rem] h-[2.81rem] shrink-0 overflow-hidden'
                  alt=''
                  src='/60e4a1e73807561d83e7fbc5-iconaboutdrive3cryptotemplatesvg.svg'
                />
              </div>
            </div>
            <h3 className='tracking-[0.9px] leading-[1.62rem] uppercase m-0 mb-[8px] mt-[20px]'>
              all decentralised
            </h3>
            <p className='text-[1rem] leading-[1.63rem] flex items-center m-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla suspendisse tortor aene.
            </p>
          </div>
        </div>
      </div>
      <div id='section-2' className='flex flex-row py-[100px]'>
        <div>
          <img className='mix-blend-luminosity' src='/section2-bg.png' alt='' />
        </div>
        <div className='flex flex-col justify-center px-[100px]'>
          <h2 className='text-[39px] leading-[55px] font-bold m-0 mb-[20px]'>
            Earn daily rewards based on your interactions
          </h2>
          <p className='text-lg leading-[32px] m-0 mb-[42px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
          <div className='flex flex-col items-start justify-start gap-[16px]'>
            <div className='flex flex-row items-center justify-start gap-[1.06rem]'>
              <div className='rounded-smi bg-blue w-[2.88rem] h-[2.88rem] shrink-0 overflow-hidden flex flex-col items-center justify-center'>
                <div className='flex flex-row items-start justify-start'>
                  <img
                    className='relative w-[2.01rem] h-[1.5rem] shrink-0 overflow-hidden'
                    alt=''
                    src='/60e4a1e738075608ade7fbc4-iconaboutdrive1cryptotemplatesvg1.svg'
                  />
                </div>
              </div>
              <p className='relative text-lg leading-[32px]'>
                Ask and answer unique questions
              </p>
            </div>
            <div className='flex flex-row items-center justify-start gap-[1.06rem]'>
              <div className='rounded-smi bg-blue w-[2.88rem] h-[2.88rem] shrink-0 overflow-hidden flex flex-col items-center justify-center'>
                <div className='flex flex-row items-start justify-start'>
                  <img
                    className='relative w-[2.25rem] h-[2.31rem] shrink-0 overflow-hidden'
                    alt=''
                    src='/60e4a1e73807562c76e7fb9d-iconspec12cryptotemplatesvg.svg'
                  />
                </div>
              </div>
              <p className='relative text-lg leading-[32px]'>
                Earn rewards in each interaction
              </p>
            </div>
            <div className='flex flex-row items-center justify-start gap-[1.06rem]'>
              <div className='rounded-smi bg-blue w-[2.88rem] h-[2.88rem] shrink-0 overflow-hidden flex flex-col items-center justify-center'>
                <div className='rounded-[521.74px] bg-white w-[1.5rem] h-[1.5rem] shrink-0 overflow-hidden flex flex-col items-center justify-center'>
                  <div className='w-[0.65rem] flex flex-row py-[0rem] px-[0rem] box-border items-start justify-start'>
                    <img
                      className='relative w-[0.65rem] h-[1.04rem] shrink-0 overflow-hidden'
                      alt=''
                      src='/60e4a1e73807567896e7fc49-icontoken3cryptotemplatesvg.svg'
                    />
                  </div>
                </div>
              </div>
              <p className='relative text-lg leading-[32px]'>
                Instantly convert them to real ether
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
