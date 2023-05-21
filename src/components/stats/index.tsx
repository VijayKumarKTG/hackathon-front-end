import Questions from './questions';
import Answers from './answers';

const Stats = () => {
  return (
    <div className='bg-gray-100 rounded-xl p-6 lg:p-10 text-white'>
      <div className='mb-12'>
        <h2 className='m-0 mb-6 text-[28px]'>Total Upvotes</h2>
      </div>
      <div className='mb-12'>
        <Questions />
      </div>
      <div className=''>
        <Answers />
      </div>
    </div>
  );
};

export default Stats;
