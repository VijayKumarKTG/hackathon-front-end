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
              href='/'
              className='w-[250px] cursor-pointer [border:none] py-[20px] px-[32px] bg-blue rounded-61xl flex flex-row box-border items-center justify-center'>
              <b className='text-[16px] tracking-[1.6px] leading-[16px] uppercase text-white text-center font-bold'>
                CREATE ACCOUNT
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
      {/* <div className='absolute top-[-34.56rem] left-[-31.69rem] w-[154.75rem] h-[384.06rem]'>
        <img
          className='absolute h-[22.84%] w-[50.85%] top-[77.14%] right-[28.67%] bottom-[0.02%] left-[20.48%] max-w-full overflow-hidden max-h-full'
          alt=''
          src='/group.svg'
        />
        <div className='absolute top-[302.49rem] left-[41.07rem] w-[29.83rem] h-[21.67rem]'>
          <div className='absolute h-[48.31%] w-[62.32%] top-[51.69%] right-[37.68%] bottom-[0%] left-[0%] flex flex-col items-start justify-start gap-[1.06rem]'>
            <div className='flex flex-row items-center justify-start gap-[1.06rem]'>
              <div className='rounded-smi bg-blue w-[2.88rem] h-[2.88rem] shrink-0 overflow-hidden flex flex-col py-[0.44rem] px-[0.68rem] box-border items-start justify-start'>
                <div className='flex flex-row items-start justify-start'>
                  <img
                    className='relative w-[1.5rem] h-[1.94rem] shrink-0 overflow-hidden'
                    alt=''
                    src='/60e4a1e7380756144de7fba8-iconpreview2cryptotemplatesvg.svg'
                  />
                </div>
              </div>
              <div className='relative leading-[2rem]'>Create an account</div>
            </div>
            <div className='flex flex-row items-center justify-start gap-[1.06rem]'>
              <div className='rounded-smi bg-blue w-[2.88rem] h-[2.88rem] shrink-0 overflow-hidden flex flex-col items-center justify-center'>
                <div className='flex flex-row items-start justify-start'>
                  <img
                    className='relative w-[2.01rem] h-[1.5rem] shrink-0 overflow-hidden'
                    alt=''
                    src='/60e4a1e738075608ade7fbc4-iconaboutdrive1cryptotemplatesvg.svg'
                  />
                </div>
              </div>
              <div className='relative leading-[2rem]'>
                Interact with the community
              </div>
            </div>
            <div className='flex flex-row items-center justify-start gap-[1.06rem]'>
              <div className='rounded-smi bg-blue w-[2.88rem] h-[2.88rem] shrink-0 overflow-hidden flex flex-col items-center justify-center'>
                <div className='flex flex-row items-start justify-start'>
                  <img
                    className='relative w-[1.68rem] h-[1.5rem] shrink-0 overflow-hidden'
                    alt=''
                    src='/60e4a1e738075651a7e7fbd1-iconpricingspec1cryptotemplatesvg.svg'
                  />
                </div>
              </div>
              <div className='relative leading-[2rem]'>
                Start earning rewards as Somebits
              </div>
            </div>
          </div>
          <b className='absolute h-[15.73%] w-full top-[0%] left-[0%] text-[2.63rem] leading-[3.44rem] flex items-center'>
            Get started today
          </b>
          <div className='absolute h-[17.98%] w-[98.95%] top-[22.47%] left-[0%] leading-[2rem] flex items-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </div>
        </div>
        <img
          className='absolute h-[20.56%] w-[44.16%] top-[24.78%] right-[18.46%] bottom-[54.67%] left-[37.38%] max-w-full overflow-hidden max-h-full'
          alt=''
          src='/group1.svg'
        />
        <img
          className='absolute top-[calc(50%_-_2347.5px)] left-[calc(50%_+_64.31px)] w-[54.89rem] h-[54.56rem] overflow-hidden'
          alt=''
          src='/60e4a1e73807562656e7fbbe-bghomehero2cryptotemplatesvg.svg'
        />
        <img
          className='absolute top-[calc(50%_-_2519.5px)] left-[calc(50%_-_731px)] w-[76.75rem] h-[76.38rem] overflow-hidden opacity-[0.4]'
          alt=''
          src='/60e4a1e73807567cc1e7fbbd-bghomehero1cryptotemplatesvg.svg'
        />

        <img
          className='absolute h-[20.56%] w-[51.86%] top-[47.21%] right-[25.89%] bottom-[32.24%] left-[22.24%] max-w-full overflow-hidden max-h-full'
          alt=''
          src='/group2.svg'
        />
        
        </div>
        <div className='absolute h-[calc(100%_-_5611px)] top-[217.19rem] bottom-[133.5rem] left-[31.21rem] bg-blue w-[94.96rem] text-[2.63rem]'>
          <div className='absolute top-[-7.37rem] left-[0rem] w-[94.5rem] h-[39.44rem]'>
            <div className='absolute bottom-[-3.75rem] left-[49.13rem] w-[37rem] h-[43.06rem]' />
          </div>
          <div className='absolute top-[7.56rem] left-[8.66rem] w-[36.81rem] h-[18.31rem]'>
            <b className='absolute top-[0rem] left-[0rem] leading-[3.44rem] flex items-center w-[36.81rem]'>
              Explore endless possibilities with Web3dApp
            </b>
            <div className='absolute top-[7.94rem] left-[calc(50%_-_290.5px)] text-[1.13rem] leading-[2rem] flex items-center w-[31rem]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              nulla suspendisse tortor aene.
            </div>
            <div className='absolute top-[13.94rem] left-[0rem] rounded-61xl bg-white flex flex-row py-[1.69rem] px-[2rem] items-center justify-center text-center text-[1rem] text-blue'>
              <b className='relative tracking-[1.6px] leading-[1rem] uppercase'>
                EXPLORE MORE
              </b>
            </div>
          </div>
          <div className='absolute top-[0rem] left-[45.47rem] w-[62.5rem] h-[33.38rem]' />
        </div>
        <div className='absolute top-[261.13rem] left-[calc(50%_-_1195.79px)] w-[152.11rem] flex flex-col items-center justify-start gap-[2.06rem] text-[2.63rem]'>
          <div className='w-[74.88rem] h-[4.38rem] shrink-0 flex flex-col items-start justify-center'>
            <b className='relative leading-[3.44rem]'>
              What our community say?
            </b>
          </div>
          <div className='flex flex-row items-start justify-start text-[1.13rem]'>
            <div className='flex flex-row items-start justify-start gap-[1.63rem]'>
              <div className='rounded-21xl bg-midnightblue overflow-hidden flex flex-col pt-[4.06rem] px-[3.13rem] pb-[4.13rem] items-start justify-start gap-[1.56rem] opacity-[0.3]'>
                <div className='relative leading-[2rem] flex items-center w-[29.25rem]'>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  commodo dolor fermentum dignissim et pellentesque egestas
                  mauris, faucibus. Tellus nisi amet non at phasellus faucibus
                  senectus in”
                </div>
                <div className='w-[30.38rem] flex flex-row py-[0rem] pr-[16.96rem] pl-[0rem] box-border items-center justify-start gap-[1.38rem] text-[1rem] text-gray-400'>
                  <img
                    className='relative w-[3.63rem] h-[3.63rem] shrink-0 overflow-hidden object-cover'
                    alt=''
                    src='/div@2x.png'
                  />
                  <div className='w-[8.44rem] h-[2.63rem] shrink-0 flex flex-col items-start justify-start gap-[0.38rem]'>
                    <b className='relative tracking-[0.8px] leading-[1.13rem] uppercase'>
                      John carter
                    </b>
                    <div className='relative tracking-[0.8px] leading-[1.13rem] uppercase text-ghostwhite'>
                      Role, Company
                    </div>
                  </div>
                </div>
              </div>
              <div className='rounded-21xl bg-midnightblue overflow-hidden flex flex-col pt-[4.06rem] px-[3.13rem] pb-[4.13rem] items-start justify-start gap-[1.56rem]'>
                <div className='relative leading-[2rem] flex items-center w-[29.25rem]'>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  commodo dolor fermentum dignissim et pellentesque egestas
                  mauris, faucibus. Tellus nisi amet non at phasellus faucibus
                  senectus in”
                </div>
                <div className='w-[30.38rem] flex flex-row py-[0rem] pr-[16.96rem] pl-[0rem] box-border items-center justify-start gap-[1.38rem] text-[1rem]'>
                  <img
                    className='relative w-[3.63rem] h-[3.63rem] shrink-0 overflow-hidden object-cover'
                    alt=''
                    src='/div1@2x.png'
                  />
                  <div className='w-[8.44rem] h-[2.63rem] shrink-0 flex flex-col items-start justify-start gap-[0.38rem]'>
                    <b className='relative tracking-[0.8px] leading-[1.13rem] uppercase'>
                      John carter
                    </b>
                    <div className='relative tracking-[0.8px] leading-[1.13rem] uppercase'>
                      Role, Company
                    </div>
                  </div>
                </div>
              </div>
              <div className='rounded-21xl bg-midnightblue overflow-hidden flex flex-col pt-[4.06rem] px-[3.13rem] pb-[4.13rem] items-start justify-start gap-[1.56rem] opacity-[0.3]'>
                <div className='relative leading-[2rem] flex items-center w-[29.25rem]'>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  commodo dolor fermentum dignissim et pellentesque egestas
                  mauris, faucibus. Tellus nisi amet non at phasellus faucibus
                  senectus in”
                </div>
                <div className='w-[30.38rem] flex flex-row py-[0rem] pr-[16.96rem] pl-[0rem] box-border items-center justify-start gap-[1.38rem] text-[1rem] text-gray-400'>
                  <img
                    className='relative w-[3.63rem] h-[3.63rem] shrink-0 overflow-hidden object-cover'
                    alt=''
                    src='/div@2x.png'
                  />
                  <div className='w-[8.44rem] h-[2.63rem] shrink-0 flex flex-col items-start justify-start gap-[0.38rem]'>
                    <b className='relative tracking-[0.8px] leading-[1.13rem] uppercase'>
                      John carter
                    </b>
                    <div className='relative tracking-[0.8px] leading-[1.13rem] uppercase text-ghostwhite'>
                      Role, Company
                    </div>
                  </div>
                </div>
              </div>
              <div className='rounded-21xl bg-midnightblue overflow-hidden flex flex-col pt-[4.06rem] px-[3.13rem] pb-[4.13rem] items-start justify-start gap-[1.56rem] opacity-[0.3]'>
                <div className='relative leading-[2rem] flex items-center w-[29.25rem]'>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  commodo dolor fermentum dignissim et pellentesque egestas
                  mauris, faucibus. Tellus nisi amet non at phasellus faucibus
                  senectus in”
                </div>
                <div className='w-[30.38rem] flex flex-row py-[0rem] pr-[16.96rem] pl-[0rem] box-border items-center justify-start gap-[1.38rem] text-[1rem] text-gray-400'>
                  <img
                    className='relative w-[3.63rem] h-[3.63rem] shrink-0 overflow-hidden object-cover'
                    alt=''
                    src='/div2@2x.png'
                  />
                  <div className='w-[8.44rem] h-[2.63rem] shrink-0 flex flex-col items-start justify-start gap-[0.38rem]'>
                    <b className='relative tracking-[0.8px] leading-[1.13rem] uppercase'>
                      John carter
                    </b>
                    <div className='relative tracking-[0.8px] leading-[1.13rem] uppercase text-ghostwhite'>
                      Role, Company
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-[9.63rem] h-[0.88rem] shrink-0 flex flex-row items-center justify-start gap-[0.88rem]'>
              <div className='relative rounded-sm bg-gray-200 w-[0.88rem] h-[0.88rem] shrink-0' />
              <div className='relative rounded-sm bg-white w-[0.88rem] h-[0.88rem] shrink-0' />
              <div className='relative rounded-sm bg-gray-200 w-[0.88rem] h-[0.88rem] shrink-0' />
              <div className='relative rounded-sm bg-gray-200 w-[0.88rem] h-[0.88rem] shrink-0' />
              <div className='relative rounded-sm bg-gray-200 w-[0.88rem] h-[0.88rem] shrink-0' />
              <div className='relative rounded-sm bg-gray-200 w-[0.88rem] h-[0.88rem] shrink-0' />
            </div>
          </div>
        </div>
        <div className='absolute top-[50.38rem] left-[85.79rem] w-[60.98rem] h-[36.56rem] mix-blend-luminosity'>
          <img
            className='absolute top-[-3.12rem] left-[-0.6rem] w-[58.81rem] h-[44.56rem] object-cover'
            alt=''
            src='/communityimageremovebgpreview-1@2x.png'
          />
        </div>
        <img
          className='absolute top-[302.31rem] left-[74.74rem] rounded-21xl w-[41.58rem] h-[25rem] overflow-hidden'
          alt=''
          src='/demo-video.svg'
        />
      </div> */}
      {/* <img
        className='absolute top-[129.13rem] left-[0rem] rounded-21xl w-[49rem] h-[36.75rem] object-cover mix-blend-luminosity'
        alt=''
        src='/image-2@2x.png'
      /> */}
    </section>
  );
};

export default Home;
