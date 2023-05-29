import Link from "next/link";
import { useEffect } from "react";

import TagCardSmall from "../cards/tagSmall";
import axios from "axios";
import { useQuery } from "wagmi";

const tags = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

function getRandomElements(array: number[]): number[] {
    const randomElements: number[] = [];

    while (randomElements.length < 5) {
        const randomIndex = Math.floor(Math.random() * array.length);
        const randomElement = array[randomIndex];

        if (!randomElements.includes(randomElement)) {
            randomElements.push(randomElement);
        }
    }

    return randomElements;
}

const randomTags = getRandomElements(tags);

const TrendingTags = () => {
    const loadQnMetadata = async (tags: number[]) => {
        try {
            const response = await Promise.all(
                tags.map((tag: number) =>
                    axios.get(
                        `${
                            process.env.NEXT_PUBLIC_TAGS_IPFS_LINK
                        }${tag.toString()}.json`
                    )
                )
            );
            return response.map((item): any => item.data);
        } catch (error) {
            console.log(error);
        }
    };

    const { data, isLoading, isError, refetch } = useQuery(
        ["load-all-randome-metadata", ...randomTags],
        () => loadQnMetadata(randomTags),
        { enabled: false }
    );

    useEffect(() => {
        refetch();
    });

    if (isLoading) {
        return <div className="text-[20px] text-silver-100">Loading...</div>;
    }

    if (isError) {
        return (
            <div className="text-[20px] text-silver-100">
                Something went wrong. Not able to load the tags.
            </div>
        );
    }

    if (isLoading) {
        return <div className="text-[20px] text-silver-100">Loading...</div>;
    }

    return (
        <div className="rounded-3xl bg-gray-100 px-6 py-7">
            <div className="mb-[14px] flex flex-row items-center justify-between">
                <h2 className="font-medium m-0 text-white text-lg leading-7">
                    Popular 🔥
                </h2>
                <Link href="/tags" className="text-white text-sm">
                    View All
                </Link>
            </div>
            <div className="flex flex-col items-center justify-start gap-[9px]">
                {data?.map((item: any) => (
                    <TagCardSmall
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        icon={item.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default TrendingTags;
