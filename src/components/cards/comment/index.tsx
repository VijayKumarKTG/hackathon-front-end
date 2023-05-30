import { get_user_by_address_abi } from "@/abi/user";
import AvatarLarge from "@/components/user/avatarLarge";
import { Address, Comment, UserContract, UserMetadata } from "@/types";
import axios from "axios";
import { useEffect } from "react";
import { useContractRead, useNetwork, useQuery } from "wagmi";

const CommentCard = (comment: Comment) => {
    const { id, parentPostId, author, uri } = comment;

    const { chain } = useNetwork();

    const {
        data: metadata,
        isError: isMetadataError,
        isLoading: isMetadataLoading,
        refetch: fetch_metadata,
    } = useQuery(
        [
            "get-question-comment-details",
            id.toNumber(),
            parentPostId.toNumber(),
        ],
        () => axios.get(uri),
        { enabled: false }
    );

    const {
        data: user,
        isLoading: isUserLoading,
        isError: isUserError,
        refetch: fetch_user,
    } = useContractRead({
        address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
        abi: get_user_by_address_abi,
        functionName: "getUserByAddress",
        chainId: chain?.id,
        args: [author],
        enabled: false,
        onError(error: Error) {
            console.log(error.message);
        },
    });

    const comment_author = user as UserContract;

    const {
        data: profile,
        isError: isProfileError,
        isLoading: isProfileLoading,
        refetch: fetch_profile_details,
    } = useQuery(
        ["user-profile", author],
        () => axios.get(comment_author?.uri),
        {
            enabled: false,
        }
    );

    console.log({ comment_author });

    const author_metadata = profile?.data as UserMetadata;

    useEffect(() => {
        fetch_metadata();
        fetch_user();
    }, []);

    useEffect(() => {
        if (comment_author) {
            fetch_profile_details();
        }
    }, [user]);

    if (isMetadataLoading || isUserLoading || isProfileLoading) {
        return <div className="text-[20px] text-silver-100">Loading...</div>;
    }

    if (isMetadataError || isUserError || isProfileError) {
        return (
            <div className="text-[20px] text-silver-100">
                Something went wrong!
            </div>
        );
    }

    if (!metadata || !user || !profile || !author_metadata) {
        return (
            <div className="text-[20px] text-silver-100">No data found!</div>
        );
    }

    return (
        <div className="bg-darkblue p-4 rounded-md text-white">
            <p className="m-0 mb-3">{metadata?.data?.comment}</p>
            <div className="flex items-center justify-end gap-x-4">
                <span className="text-sm text-silver-100">Commented By:</span>
                <AvatarLarge
                    image={author_metadata?.profile}
                    name={author_metadata?.name}
                    id={comment_author?.id?.toString()}
                    address={comment_author.userAddress as string}
                />
            </div>
        </div>
    );
};

export default CommentCard;
