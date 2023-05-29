import { useEffect, useState } from "react";
import {
    useAccount,
    useContractRead,
    useContractReads,
    useNetwork,
} from "wagmi";
import { BigNumber } from "ethers";

import { get_answers_by_user_address } from "@/abi/user";
import usePaginationStore from "@/store/pagination";
import { Address, Answer } from "@/types";
import { get_answer_by_id_abi } from "@/abi/social";
import AnswerCardLarge from "../cards/answerLarge";

const Answers = ({ data }: { data: BigNumber[] }) => {
    const { chain } = useNetwork();
    const { address } = useAccount();

    const [currentPage] = useState<number>(1);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [items, setItems] = useState<BigNumber[]>([]);

    const { pageSize } = usePaginationStore();

    useEffect(() => {
        if (data) {
            let count: any = data as BigNumber[];
            count = count.length;

            setTotalItems(count);
            setTotalPages(count < pageSize ? 1 : Math.ceil(count / pageSize));
        }
    }, [data]);

    useEffect(() => {
        if (totalItems > 0 && currentPage > 0) {
            let startIndex = 0;
            let endIndex = 0;

            if (totalPages === 1) {
                startIndex = 0;
                endIndex = totalItems;
            } else {
                startIndex = (totalPages - currentPage) * 10;
                endIndex = startIndex + 10;
            }

            let temp = [...data];

            setItems(temp.reverse().slice(startIndex, endIndex));
        }
    }, [totalItems, currentPage]);

    const contract = {
        address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
        abi: get_answer_by_id_abi,
        functionName: "getAnswerById",
    };

    const {
        data: answers,
        isLoading: isAnswersLoading,
        isError: isAnswersError,
        refetch: refetchAnswers,
    } = useContractReads({
        contracts: items?.map((id: BigNumber) => ({
            ...contract,
            args: [id],
        })) as any,
        enabled: false,
    });

    let questions_list: Answer[] = answers as Answer[];

    useEffect(() => {
        if (items.length > 0) {
            refetchAnswers();
        }
    }, [items]);

    if (isAnswersLoading) {
        return (
            <Wrapper total={data?.length}>
                <div className="text-[20px] text-silver-100">Loading...</div>
            </Wrapper>
        );
    }

    if (isAnswersError) {
        return (
            <Wrapper total={data?.length}>
                <div className="text-[20px] text-silver-100">
                    Something went wrong.
                </div>
            </Wrapper>
        );
    }

    if (items.length === 0 || questions_list?.length === 0) {
        return (
            <Wrapper total={data?.length}>
                <div className="text-[20px] text-silver-100">
                    No questions to show.
                </div>
            </Wrapper>
        );
    }

    return (
        <Wrapper total={data?.length}>
            <div>
                {questions_list?.map((question: Answer) => (
                    <div className="m-0 mb-3" key={question?.id.toString()}>
                        <AnswerCardLarge {...question} />
                    </div>
                ))}
            </div>
        </Wrapper>
    );
};

export default Answers;

const Wrapper = ({
    children,
    total,
}: {
    children: JSX.Element;
    total: number;
}) => {
    return (
        <div>
            <h2 className="m-0 mb-6 text-[28px] flex flex-col lg:flex-row lg:items-center lg:gap-x-4 gap-y-10">
                {"Answers Asked "}
                <span className="text-silver-100 text-base">
                    ({total} Answers)
                </span>
            </h2>
            {children}
        </div>
    );
};
