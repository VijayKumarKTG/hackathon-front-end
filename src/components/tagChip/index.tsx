import Link from 'next/link';

interface Props {
  title: string;
}

const TagChip = (props: Props) => {
  const { title } = props;

  return (
    <Link
      href=''
      className='rounded-xl bg-navy flex flex-row py-1 px-2 box-border items-center justify-center text-white text-[12px] leading-4 no-underline'>
      {title}
    </Link>
  );
};

export default TagChip;
