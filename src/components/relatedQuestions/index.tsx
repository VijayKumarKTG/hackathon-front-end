import QuestionCardSmall from '../cards/questionSmall';

const RelatedQuestions = () => {
  return (
    <div className='rounded-3xl bg-gray-100 px-6 py-7'>
      <h2 className='font-medium m-0 mb-[14px] text-white text-lg leading-7'>
        Related 🤓
      </h2>
      <div className='flex flex-col items-center justify-start gap-[9px]'>
        <QuestionCardSmall
          question='How can I upload files asynchronously with jQuery?'
          voteCount={234}
        />
        <QuestionCardSmall
          question='How can I upload files with jQuery?'
          voteCount={896}
        />
        <QuestionCardSmall
          question='How can I upload files asynchronously?'
          voteCount={12}
        />
      </div>
    </div>
  );
};

export default RelatedQuestions;
