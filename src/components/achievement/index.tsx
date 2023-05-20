import QuestionCardLarge from "../cards/questionLarge";
import NFTCard from "../cards/nftcard";

const Achievements = () => {
    return (
        <div className="bg-gray-100 rounded-xl p-6 lg:p-10 text-white">
            <div className="mb-12">
                <h2 className="m-0 mb-6 text-[28px]">Badges</h2>
                <div className="flex flex-row gap-8 overflow-x-scroll overflow-y-hidden items-center justify-start">
                    <div className="m-0 mb-3">
                        <NFTCard />
                    </div>
                    <div className="m-0 mb-3">
                        <NFTCard />
                    </div>
                    <div className="m-0 mb-3">
                        <NFTCard />
                    </div>
                    <div className="m-0 mb-3">
                        <NFTCard />
                    </div>
                    <div className="m-0 mb-3">
                        <NFTCard />
                    </div>
                </div>
            </div>
            <div className="mb-12">
                <h2 className="m-0 mb-6 text-[28px] flex flex-col lg:flex-row gap-y-10">
                    Raremint NFTs{" "}
                    <span className="text-silver-100 text-base">(5 NFTs)</span>
                </h2>
                <div className="flex flex-row gap-8 overflow-x-scroll overflow-y-hidden items-center justify-start">
                    <div className="m-0 mb-3">
                        <NFTCard />
                    </div>
                    <div className="m-0 mb-3">
                        <NFTCard />
                    </div>
                    <div className="m-0 mb-3">
                        <NFTCard />
                    </div>
                    <div className="m-0 mb-3">
                        <NFTCard />
                    </div>
                    <div className="m-0 mb-3">
                        <NFTCard />
                    </div>
                </div>
            </div>
            <div className="">
                <h2 className="m-0 mb-6 text-[28px] flex flex-col lg:flex-row gap-y-10">
                    Merged NFTs{" "}
                    <span className="text-silver-100 text-base">(3 NFTs)</span>
                </h2>
                <div className="flex flex-row gap-8 overflow-x-scroll overflow-y-hidden items-center justify-start">
                    <div className="m-0 mb-3">
                        <NFTCard />
                    </div>
                    <div className="m-0 mb-3">
                        <NFTCard />
                    </div>
                    <div className="m-0 mb-3">
                        <NFTCard />
                    </div>
                    <div className="m-0 mb-3">
                        <NFTCard />
                    </div>
                    <div className="m-0 mb-3">
                        <NFTCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
