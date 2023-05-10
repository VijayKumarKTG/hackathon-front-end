/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

import RelatedQuestions from "@/components/relatedQuestions";
import TrendingTags from "@/components/trendingTags";
import QuestionCardLarge from "@/components/cards/questionLarge";
import TagCardLarge from "@/components/cards/tagLarge";
import Pagination from "@/components/pagination";

const Tags: NextPage = () => {
  return (
    <div className="bg-darkblue p-[56px]">
      <div className="grid grid-cols-12 gap-x-6 items-start justify-start">
        <div className="col-span-3 flex flex-col gap-y-6">
          <TrendingTags />
        </div>
        <div className="col-span-9 rounded-3xl bg-gray-100 p-9">
          <div className="flex flex-row items-center justify-between text-[32px] text-white mb-7">
            <h1 className="text-[32px] leading-10 m-0">Tags</h1>
            <Link
              href="/ask-question"
              className="cursor-pointer outline-none [border:none] py-[20px] px-[32px] bg-blue rounded-61xl flex flex-row box-border items-center justify-center"
            >
              <b className="text-[16px] outline-none tracking-[1.6px] leading-[16px] uppercase text-white text-center font-bold">
                Ask A Question
              </b>
            </Link>
          </div>

          <div className="text-[24px] leading-6 mb-4 font-medium text-silver-100">
            1922 Tags
          </div>

          <div className="grid grid-cols-4 gap-4 items-stretch">
            <div>
              <TagCardLarge
                name="JavaScript"
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name="JavaScript"
                description="Javascript I wrote isn't working for  for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name="JavaScript"
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name="JavaScript"
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name="JavaScript"
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name="JavaScript"
                description="Javascript I wrote isn't working for  for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name="JavaScript"
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name="JavaScript"
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name="JavaScript"
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name="JavaScript"
                description="Javascript I wrote isn't working for  for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name="JavaScript"
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name="JavaScript"
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name="JavaScript"
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name="JavaScript"
                description="Javascript I wrote isn't working for  for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name="JavaScript"
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name="JavaScript"
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name="JavaScript"
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name="JavaScript"
                description="Javascript I wrote isn't working for  for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name="JavaScript"
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>

            <div>
              <TagCardLarge
                name="JavaScript"
                description="Javascript I wrote isn't working for for my html [closed]"
                qCount={23}
                aCount={23}
                usersCount={23}
              />
            </div>
          </div>
          <Pagination currentPage={1} totalPages={192} />
        </div>
      </div>
    </div>
  );
};

export default Tags;
