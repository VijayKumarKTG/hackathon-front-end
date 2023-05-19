const NFTCard = () => {
    return (
        <div
            className="p-2 bg-blue bg-gradient-to-t from-blue-500 to-[#011163] rounded-xl mb-2"
            style={{
                background: "linear-gradient(180deg, #0328EE 0%, #011163 100%)",
            }}>
            <div className="flex flex-col items-center justify-center max-h-[361px] max-w-[298px] rounded-xl">
                <div className="flex max-h-[260px] w-auto object-cover rounded-tr-xl rounded-tl-xl">
                    <img
                        src="nft-sample.png"
                        alt="NFT Image"
                        className="rounded-tr-xl rounded-tl-xl"
                    />
                </div>
                <div className="flex flex-col items-center justify-center p-[19px] w-full bg-[#030C30] rounded-br-xl rounded-bl-xl">
                    <div className="flex flex-col items-center justify-center w-full max-w-[261px] max-h-[68px] rounded-[8px] p-2 bg-[#171F41] border-2 border-white">
                        <div className="flex text-center items-center text-base text-white font-normal">
                            Answer 10 questions
                        </div>
                        <div className="flex text-center items-center text-xl text-white font-medium">
                            Javascript
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NFTCard;
