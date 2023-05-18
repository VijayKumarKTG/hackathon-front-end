/* eslint-disable @next/next/no-img-element */

import { get_user_by_address_abi } from "@/abi/user";
import MarkdownRenderer from "@/components/mdx/renderer";
import AvatarLarge from "@/components/user/avatarLarge";
import { Address, UserContract, UserMetadata } from "@/types";
import axios from "axios";
import {
    useContractRead,
    useContractWrite,
    useNetwork,
    usePrepareContractWrite,
    useQuery,
} from "wagmi";

interface Props {
    content: string;
    voteCount: number;
    comments: any[];
    authorAddress: Address;
}

const ContentCard = (props: Props) => {
    const { chain } = useNetwork();

    const { data, isLoading, isError } = useContractRead({
        address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
        abi: get_user_by_address_abi,
        functionName: "getUserByAddress",
        chainId: chain?.id,
        args: [props?.authorAddress],
        onError(error: Error) {
            console.log(error.message);
        },
    });

    // const { config: upvote_config } = usePrepareContractWrite({
    //     address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
    //     abi: post_question_abi,
    //     functionName: "postQuestion",
    //     args: [[1, 2, 3], url, process.env.NEXT_PUBLIC_HASH_SECRET],
    // });

    // const { write: post_question } = useContractWrite({
    //     ...post_question_config,
    //     onError(error) {
    //         console.log(error);
    //     },
    //     async onSuccess(data) {
    //         await data.wait();
    //         alert("Question Posted Successfully!");
    //         changeUrl("");
    //     },
    // });

    console.log({ Data: data });

    const author = data as UserContract;

    console.log(author);

    const {
        data: profile,
        isError: isProfileError,
        isLoading: isProfileLoading,
    } = useQuery(["user-profile", props?.authorAddress], () =>
        axios.get(author?.uri)
    );

    console.log(profile);

    const user = profile?.data as UserMetadata;

    console.log(user);

    return (
        <div className="rounded-xl bg-gray-500 px-4 py-6 xl:p-8 flex flex-row items-start gap-x-4">
            <div className="flex flex-col items-center gap-y-2 justify-center text-silver-100">
                <button className="border-none bg-transparent w-[max-content] h-[max-content] flex m-0 p-0 cursor-pointer">
                    <img
                        className="relative w-8 h-[19px]"
                        alt="Upvote"
                        src="/vector.svg"
                    />
                </button>
                <div className="relative font-medium">{props.voteCount}</div>
                <button className="border-none bg-transparent w-[max-content] h-[max-content] flex m-0 p-0 cursor-pointer">
                    <img
                        className="relative w-8 h-[19px]"
                        alt="Downvote"
                        src="/vector1.svg"
                    />
                </button>
            </div>
            <div>
                <div>
                    <MarkdownRenderer markdown={props.content} />
                </div>
                <div className="flex items-center justify-between mt-10 w-full">
                    <button>Add comment</button>
                    <AvatarLarge
                        image={user?.profile}
                        name={user?.name}
                        id={author?.id?.toString()}
                    />
                </div>
            </div>
        </div>
    );
};
