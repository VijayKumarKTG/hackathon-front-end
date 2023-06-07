import { Address, useAccount, useContractRead, useNetwork } from "wagmi";
import Skeleton from "react-loading-skeleton";
import { BigNumber } from "ethers";
import { useEffect } from "react";

import "react-loading-skeleton/dist/skeleton.css";
import NFTCard from "../cards/nftcard";
import { get_user_badges_abi } from "@/abi/user";
import BadgeCard from "../cards/badgecard";

const Achievements = ({ address }: { address: string }) => {
    /**
     * @get hooks from wagmi
     */
    const { chain } = useNetwork();

    /**
     * @config to read user data with address
     */
    const { data, isError, isLoading, refetch } = useContractRead({
        address: process.env.NEXT_PUBLIC_STACK3_BADGES_ADDRESS as Address,
        abi: get_user_badges_abi,
        functionName: "getUserBadges",
        chainId: chain?.id,
        args: [address],
        enabled: false,
        onError(error: Error) {
            console.log(error.message);
        },
    });

    let badges = data as BigNumber[];

    useEffect(() => {
        refetch();
    }, []);

    if (isLoading)
        return (
            <div className="bg-gray-100 rounded-xl p-6 lg:p-10 text-white">
                <div className="mb-12">
                    <h2 className="m-0 mb-6 text-[28px]">
                        <Skeleton
                            baseColor="#22294d"
                            highlightColor="#313a67"
                            height="42px"
                            width="300px"
                        />
                    </h2>
                    <div className="flex flex-row gap-8 overflow-x-scroll overflow-y-hidden items-center justify-start">
                        <div className="m-0 mb-3">
                            <NFTCard isFetching={isLoading} />
                        </div>
                        <div className="m-0 mb-3">
                            <NFTCard isFetching={isLoading} />
                        </div>
                        <div className="m-0 mb-3">
                            <NFTCard isFetching={isLoading} />
                        </div>
                        <div className="m-0 mb-3">
                            <NFTCard isFetching={isLoading} />
                        </div>
                        <div className="m-0 mb-3">
                            <NFTCard isFetching={isLoading} />
                        </div>
                    </div>
                </div>
                <div className="mb-12">
                    <h2 className="m-0 mb-6 text-[28px] flex flex-col lg:flex-row gap-y-10">
                        <Skeleton
                            baseColor="#22294d"
                            highlightColor="#313a67"
                            height="42px"
                            width="300px"
                        />
                    </h2>
                    <div className="flex flex-row gap-8 overflow-x-scroll overflow-y-hidden items-center justify-start">
                        <div className="m-0 mb-3">
                            <NFTCard isFetching={isLoading} />
                        </div>
                        <div className="m-0 mb-3">
                            <NFTCard isFetching={isLoading} />
                        </div>
                        <div className="m-0 mb-3">
                            <NFTCard isFetching={isLoading} />
                        </div>
                        <div className="m-0 mb-3">
                            <NFTCard isFetching={isLoading} />
                        </div>
                        <div className="m-0 mb-3">
                            <NFTCard isFetching={isLoading} />
                        </div>
                    </div>
                </div>
                <div className="">
                    <h2 className="m-0 mb-6 text-[28px] flex flex-col lg:flex-row gap-y-10">
                        <Skeleton
                            baseColor="#22294d"
                            highlightColor="#313a67"
                            height="42px"
                            width="300px"
                        />
                    </h2>
                    <div className="flex flex-row gap-8 overflow-x-scroll overflow-y-hidden items-center justify-start">
                        <div className="m-0 mb-3">
                            <NFTCard isFetching={isLoading} />
                        </div>
                        <div className="m-0 mb-3">
                            <NFTCard isFetching={isLoading} />
                        </div>
                        <div className="m-0 mb-3">
                            <NFTCard isFetching={isLoading} />
                        </div>
                        <div className="m-0 mb-3">
                            <NFTCard isFetching={isLoading} />
                        </div>
                        <div className="m-0 mb-3">
                            <NFTCard isFetching={isLoading} />
                        </div>
                    </div>
                </div>
            </div>
        );

    if (isError)
        return <div className="text-white">Not able to get badges.</div>;

    if (badges?.length === 0)
        return <div className="text-white">No Achievements</div>;

    const achievements: number[] = [],
        locked: number[] = [];

    badges?.map((badge: BigNumber, index: number) =>
        badge.gt(0) ? achievements.push(index) : locked.push(index)
    );

    console.log({
        locked,
        achievements,
    });

    return (
        <div className="bg-gray-100 rounded-xl p-6 lg:p-10 text-white">
            <div className="mb-12">
                <h2 className="m-0 mb-6 text-[28px]">
                    Raremint NFTs{" "}
                    <span className="text-silver-100 text-base">(1 NFT)</span>
                </h2>
                {/* <div className="flex flex-row gap-8 overflow-x-scroll overflow-y-hidden items-center justify-start">
                    <div className="flex flex-row gap-8 items-center justify-start pb-2">
                        {locked.map((index: number) => (
                            <BadgeCard key={index} id={index} locked />
                        ))}
                    </div>
                </div> */}
                <div className="flex flex-row gap-8 items-center justify-start text-[20px] text-silver-100">
                    No NFTs owned by user
                </div>
            </div>
            <div className="mb-12">
                <h2 className="m-0 mb-6 text-[28px]">
                    Badges Collected{" "}
                    <span className="text-silver-100 text-base">
                        ({achievements.length} Badges)
                    </span>
                </h2>
                {achievements?.length > 0 ? (
                    <div className="flex flex-row gap-8 overflow-x-scroll overflow-y-hidden items-center justify-start">
                        <div className="flex flex-row gap-8 items-center justify-start pb-2">
                            {achievements.map((index: number) => (
                                <BadgeCard key={index} id={index} />
                            ))}
                        </div>
                    </div>
                ) : (
                    // <div className="flex flex-row gap-8 items-center justify-start pb-2">
                    //     {achievements.map((index: number) => (
                    //         <BadgeCard key={index} id={index} />
                    //     ))}
                    // </div>
                    <div className="flex flex-row gap-8 items-center justify-start text-lg">
                        No badges found
                    </div>
                )}
            </div>
            <div className="">
                <h2 className="m-0 mb-6 text-[28px]">
                    Badges Locked{" "}
                    <span className="text-silver-100 text-base">
                        ({locked.length} Badges)
                    </span>
                </h2>
                <div className="flex flex-row gap-8 overflow-x-scroll overflow-y-hidden items-center justify-start">
                    <div className="flex flex-row gap-8 items-center justify-start pb-2">
                        {locked.map((index: number) => (
                            <BadgeCard key={index} id={index} locked />
                        ))}
                    </div>
                </div>
            </div>

            {/* <div className=''>
        <h2 className='m-0 mb-6 text-[28px] flex flex-col lg:flex-row gap-y-10'>
          Merged NFTs{' '}
          <span className='text-silver-100 text-base'>(3 NFTs)</span>
        </h2>
        <div className='flex flex-row gap-8 overflow-x-scroll overflow-y-hidden items-center justify-start'>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isLoading} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isLoading} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isLoading} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isLoading} />
          </div>
          <div className='m-0 mb-3'>
            <NFTCard isFetching={isLoading} />
          </div>
        </div>
      </div> */}
        </div>
    );
};

export default Achievements;
