import Image from 'next/image';
import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
interface Props {
  image: string;
  name: string;
  id: string;
}

const AvatarLarge = (props: Props) => {
  return (
    <Link
      href={`/user/${props.id}`}
      className='flex items-center gap-x-3 no-underline'>
      <img
        src={props.image}
        alt='profile'
        width={35}
        height={35}
        className='rounded-md'
      />
      <div className='text-white font-semibold'>{props.name}</div>
    </Link>
  );
};

export default AvatarLarge;
