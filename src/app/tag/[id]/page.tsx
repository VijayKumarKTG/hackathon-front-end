/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { useContractRead, useContractReads } from "wagmi";
import { BigNumber } from "ethers";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
import TrendingTags from "@/components/trendingTags";
import QuestionCardLarge from "@/components/cards/questionLarge";
import {
    get_all_questions_by_tag_abi,
    get_question_by_id_abi,
} from "@/abi/social";
import { Address, Question } from "@/types";
import usePaginationStore from "@/store/pagination";
import { TAGS } from "@/constants/wallets";

const Tag = ({ params }: { params: { id: number } }) => {
    const {
        currentPage,
        totalItems,
        pageSize,
        totalPages,
        items,
        setCurrentPage,
        setTotalItems,
        setTotalPages,
        setItems,
    } = usePaginationStore();

    const [totalCount, setTotalCount] = useState(0);

    const {
        data: ids,
        isLoading: isLoading,
        isError: isError,
        refetch: refetch,
        isFetching,
    } = useContractRead({
        address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
        abi: get_all_questions_by_tag_abi,
        functionName: "getQuestionsByTag",
        args: [params.id],
        enabled: false,
    });

    console.log(isError);

    useEffect(() => {
        refetch();
    }, []);

    useEffect(() => {
        if (!isLoading && !isError && ids) {
            const count_list: BigNumber[] = ids as BigNumber[];
            const temp_count = count_list.length;

            setTotalItems(temp_count);
            setTotalPages(
                temp_count < pageSize ? 1 : Math.ceil(temp_count / pageSize)
            );
        }
    }, [ids, isError, isLoading, pageSize, setTotalItems, setTotalPages]);

    useEffect(() => {
        if (totalItems > 0) {
            const temp_ids = ids as BigNumber[];
            let startIndex = 0;
            let endIndex = 0;

            if (totalPages === 1) {
                startIndex = 0;
                endIndex = totalItems;
            } else {
                startIndex = (totalPages - currentPage) * 10;
                endIndex = startIndex + 10;
            }

            setItems(temp_ids?.slice(startIndex, endIndex));
        }
    }, [totalItems, currentPage, ids, totalPages, setItems]);

    const contract = {
        address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
        abi: get_question_by_id_abi,
        functionName: "getQuestionById",
    };

    const {
        data: questions,
        isLoading: isQuestionsLoading,
        isError: isQuestionsError,
        error,
        refetch: refetchQuestions,
    } = useContractReads({
        contracts: items?.map((id: number) => ({
            ...contract,
            args: [id],
        })) as any,
        enabled: false,
    });

    let questions_list: Question[] = questions as Question[];

    console.log(items);

    useEffect(() => {
        if (items?.length > 0) {
            refetchQuestions();
        }
    }, [items]);

    useEffect(() => {
        if (totalItems > 0) {
            let startIndex = 0;
            let endIndex = 0;
            const items_list: number[] = [];

            if (totalPages === 1) {
                startIndex = 0;
                endIndex = totalItems;
            } else {
                startIndex = (totalPages - currentPage) * 10;
                endIndex = startIndex + 10;
            }

            for (let i = endIndex; i > startIndex; i--) {
                items_list.push(i);
            }

            setItems(items_list);
        }
    }, [totalItems, currentPage]);

    useEffect(() => {
        const parseTotalItemsWithParams = async (questions: Question[]) => {
            const totalCount = questions?.reduce(
                (count: number, question: Question) => {
                    const isNumberIncluded = question?.tags.some(
                        (obj) =>
                            parseInt(obj._hex, 16) ===
                            parseInt(params?.id as any)
                    );

                    if (isNumberIncluded) {
                        count += 1;
                    }

                    return count;
                },
                0
            );

            return totalCount;
        };

        const fetchTotalCount = async () => {
            const totalCount = await parseTotalItemsWithParams(
                questions as Question[]
            );
            setTotalCount(totalCount);
        };

        fetchTotalCount();
    }, [params?.id, questions]);

    if (isLoading || isQuestionsLoading) {
        return (
            <Wrapper id={params.id} isFetching={isFetching}>
                <div className="text-[20px] leading-6 mb-4 font-normal text-silver-100">
                    Loading...
                </div>
            </Wrapper>
        );
    }

    if (isError || isQuestionsError) {
        return (
            <Wrapper id={params.id} isFetching={isFetching}>
                <div className="text-[20px] leading-6 mb-4 font-normal text-silver-100">
                    Something went wrong.
                </div>
            </Wrapper>
        );
    }

    if (items?.length === 0 || questions_list?.length === 0) {
        return isFetching ? (
            <Wrapper id={params.id} isFetching={isFetching}>
                <div className="text-[20px] leading-6 mb-4 font-normal text-silver-100">
                    <Skeleton
                        baseColor="#22294d"
                        highlightColor="#313a67"
                        width={250}
                    />
                </div>
            </Wrapper>
        ) : (
            <Wrapper id={params.id} isFetching={isFetching}>
                <div className="text-[20px] leading-6 mb-4 font-normal text-silver-100">
                    No questions to show.
                </div>
            </Wrapper>
        );
    }

    return isFetching ? (
        <Wrapper id={params.id} isFetching={isFetching}>
            <>
                <div className="text-[24px] leading-6 mb-4 font-medium text-silver-100">
                    <Skeleton
                        baseColor="#22294d"
                        highlightColor="#313a67"
                        height="26px"
                        width="150px"
                    />
                </div>

                {questions_list?.map((question: Question) => (
                    <div className="m-0 mb-3" key={question?.id.toString()}>
                        <Skeleton
                            baseColor="#22294d"
                            highlightColor="#313a67"
                            height="92px"
                            width="100%"
                            borderRadius={20}
                        />
                    </div>
                ))}
            </>
        </Wrapper>
    ) : (
        <Wrapper id={params.id} isFetching={isFetching}>
            <>
                <div className="text-[24px] leading-6 mb-4 font-medium text-silver-100">
                    {totalCount} {totalCount === 1 ? "Question" : "Questions"}
                </div>

                {questions_list?.map((question: Question) => {
                    const isNumberIncluded = question?.tags.some(
                        (obj) =>
                            parseInt(obj._hex, 16) ==
                            parseInt(params?.id as any)
                    );

                    return (
                        isNumberIncluded && (
                            <div
                                className="m-0 mb-3"
                                key={question?.id.toString()}>
                                <QuestionCardLarge {...question} />
                            </div>
                        )
                    );
                })}
            </>
        </Wrapper>
    );
};

export default Tag;

const Wrapper = ({
    children,
    isFetching,
    id,
}: {
    children: JSX.Element;
    isFetching: boolean;
    id: number;
}) => {
    return isFetching ? (
        <div className="bg-darkblue px-6 py-14 xl:p-[56px]">
            <div className="grid grid-cols-12 gap-x-6 items-start justify-start">
                <div className="hidden lg:flex col-span-3 flex-col gap-y-6">
                    <TrendingTags />
                </div>
                <div className="col-span-12 lg:col-span-9 rounded-3xl bg-gray-100 p-9">
                    <div className="flex flex-col md:flex-row gap-y-6 items-center justify-between text-[32px] text-white mb-16 md:mb-7">
                        <h1 className="text-[32px] leading-10 text-center xl:text-left m-0">
                            <Skeleton
                                baseColor="#22294d"
                                highlightColor="#313a67"
                                height="42px"
                                width="220px"
                            />
                        </h1>
                        <Link
                            href="/ask-question"
                            className="w-full md:max-w-[220px]">
                            <Skeleton
                                baseColor="#22294d"
                                highlightColor="#313a67"
                                height={60}
                                // width={220}
                                borderRadius={500}
                            />
                        </Link>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    ) : (
        <div className="bg-darkblue px-6 py-14 xl:p-[56px]">
            <div className="grid grid-cols-12 gap-x-6 items-start justify-start">
                <div className="hidden lg:flex col-span-3 flex-col gap-y-6">
                    <TrendingTags />
                </div>
                <div className="col-span-12 lg:col-span-9 rounded-3xl bg-gray-100 p-9">
                    <div className="flex flex-col md:flex-row gap-y-6 items-center justify-between text-[32px] text-white mb-16 md:mb-7">
                        <h1 className="text-[32px] leading-10 text-center xl:text-left m-0">
                            {TAGS[id]}
                        </h1>
                        <Link
                            href="/ask-question"
                            className="no-underline w-full md:w-max cursor-pointer outline-none [border:none] py-[20px] px-[32px] bg-blue rounded-61xl flex flex-row box-border items-center justify-center">
                            <b className="text-[16px] outline-none tracking-[1.6px] leading-[16px] uppercase text-white text-center font-bold">
                                Ask A Question
                            </b>
                        </Link>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};