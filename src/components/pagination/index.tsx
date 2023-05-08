/* eslint-disable @next/next/no-img-element */
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { PaginationProps } from "@/types/pagination";

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  return (
    <div className="mt-8 overflow-hidden flex flex-row items-center justify-start gap-[1rem] text-[1.13rem] text-white font-desktop-body-2">
      <a
        href="#"
        className="relative inline-flex items-center rounded-full px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300"
      >
        <span className="sr-only">Previous</span>
        <ChevronLeftIcon
          className="h-7 w-7"
          //  aria-hidden="true"
        />
      </a>
      <div className="self-stretch flex flex-col py-[0.25rem] px-[0.5rem] items-center justify-center text-blue">
        <div className="relative leading-[2rem]">1</div>
      </div>
      <div className="self-stretch flex flex-col py-[0.25rem] px-[0.5rem] items-start justify-center">
        <div className="relative leading-[2rem]">2</div>
      </div>
      <div className="self-stretch flex flex-col py-[0.25rem] px-[0.5rem] items-start justify-center">
        <div className="relative leading-[2rem]">3</div>
      </div>
      <a
        href="#"
        className="relative inline-flex items-center rounded-full px-2 py-2 text-white ring-1 ring-inset ring-gray-300 bg-midnightblue"
      >
        <span className="sr-only">Previous</span>
        <ChevronRightIcon
          className="h-7 w-7"
          //  aria-hidden="true"
        />
      </a>
    </div>
  );
};

export default Pagination;
