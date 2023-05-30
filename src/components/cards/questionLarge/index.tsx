import { Question } from "@/types";
import axios from "axios";
import Link from "next/link";
import { useQuery } from "wagmi";

const QuestionCardLarge = (question: Question) => {
    const { id, downvotes, upvotes, uri } = question;

    const { data, isError, error, isLoading } = useQuery(
        ["get-question-metadata", id?.toString()],
        () => axios.get(uri)
    );

    if (isLoading) {
        return (
            <Wrapper
                id={id?.toString()}
                voteCount={upvotes?.sub(downvotes).toNumber()}>
                <div className="text-[20px] text-silver-100">Loading...</div>
            </Wrapper>
        );
    }

    if (isError) {
        return (
            <Wrapper
                id={id?.toString()}
                voteCount={upvotes?.sub(downvotes).toNumber()}>
                <div className="text-[20px] text-silver-100">
                    Something went wrong!
                </div>
            </Wrapper>
        );
    }

    if (!data) {
        return (
            <Wrapper
                id={id?.toString()}
                voteCount={upvotes?.sub(downvotes).toNumber()}>
                <div className="text-[20px] text-silver-100">
                    No data found.
                </div>
            </Wrapper>
        );
    }

    const metadata = data.data as any;

    return (
        <Link
            href={`/${id?.toString()}`}
            className="cursor-pointer [border:none] p-6 bg-gray-500 rounded-xl w-full gap-x-8 flex flex-row box-border items-center justify-start text-white no-underline">
            <div className="text-sm leading-5 text-silver-100">
                {upvotes?.sub(downvotes).toString()} Votes
            </div>
            <p className="text-base leading-6 text-gainsboro">
                {metadata?.title}
            </p>
        </Link>
    );
};

export default QuestionCardLarge;

const Wrapper = ({
    children,
    voteCount,
    id,
}: {
    children: JSX.Element;
    voteCount: number;
    id: string;
}) => {
    return (
        <Link
            href={`/${id?.toString()}`}
            className="cursor-pointer [border:none] p-6 bg-gray-500 rounded-xl w-full gap-x-8 flex flex-row box-border items-center justify-start text-white no-underline">
            <div className="text-sm leading-5 text-silver-100">
                {voteCount} Votes
            </div>
            {children}
        </Link>
    );
};
