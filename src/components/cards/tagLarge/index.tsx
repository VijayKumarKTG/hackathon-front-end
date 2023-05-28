/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

interface Props {
  name: string;
  description: string;
  icon: string;
  id: number;
}

const TagCardLarge = (props: Props) => {
  const { name, description, icon, id } = props;

  return (
    <Link
      href={`/tag/${id}`}
      className='cursor-pointer [border:none] p-4 bg-gray-500 rounded-xl w-full gap-x-2 flex flex-col box-border justify-start no-underline'>
      <div className='w-[max-content] rounded-sm bg-navy flex flex-row justify-center items-center gap-x-2 px-4 py-2 mb-4'>
        <img className='w-4 h-4' alt='' src={icon} />
        <span className='text-white text-base leading-6'>{name}</span>
      </div>
      <p className='text-sm leading-6 text-silver-100 m-0 mb-6'>
        {description}
      </p>
    </Link>
  );
};

export default TagCardLarge;
