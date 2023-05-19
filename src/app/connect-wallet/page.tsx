/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import { NextPage } from "next";
import { useAccount, useConnect } from "wagmi";
import { useRouter } from "next/navigation";

import { wallets } from "@/constants/wallets";
import ErrorModal from "@/components/modals/error";
import SuccessModal from "@/components/modals/success";

const Login: NextPage = () => {
    const { connect, connectors, error, isLoading, pendingConnector } =
        useConnect();
    const { isConnected } = useAccount();
    const router = useRouter();

    useEffect(() => {
        if (isConnected) {
            router.push("/registration");
        }
    }, [isConnected]);

    return (
        <div className="bg-darkblue px-6 py-14 min-[600px]:px-[100px] md:px-[192px] lg:px-[100px] flex flex-col lg:flex-row items-center justify-center gap-x-16 rounded-24 xl:py-40 xl:px-48">
            <div className="w-full mb-14 lg:basis-1/2 max-w-[430px]">
                <h1 className="text-[30px] text-center lg:text-left lg:text-40 text-white m-0 mb-10 ">
                    Welcome back 👋 <br className="hidden lg:block" />
                    Connect wallet and <br className="hidden lg:block" />{" "}
                    explore all features
                </h1>
                <img
                    className="w-full object-contain mix-blend-luminosity"
                    alt="Login Image"
                    src="/login-img.png"
                />
            </div>
            <div className="flex flex-col gap-4 lg:basis-1/2 max-w-[390px]">
                <div className="text-white text-lg lg:text-[24px] text-center font-normal">
                    {error
                        ? error.message
                        : "Please select a wallet to connect"}
                </div>

                {connectors.map((connector) => (
                    <button
                        disabled={!connector.ready}
                        key={connector.id}
                        onClick={() => connect({ connector })}
                        className={`cursor-pointer border-none flex flex-row items-center justify-center gap-3 rounded-full w-full py-3 ${
                            isLoading && connector.id === pendingConnector?.id
                                ? "bg-blue"
                                : "bg-white"
                        } `}>
                        {isLoading && connector.id === pendingConnector?.id ? (
                            <div role="status">
                                <svg
                                    aria-hidden="true"
                                    className="w-8 h-8 mr-2 text-white animate-spin dark:text-white fill-blue-600"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                    />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        ) : (
                            <>
                                <div
                                    className={`flex flex-col items-center justify-center ${
                                        wallets[
                                            connector.name
                                                .split(" ")[0]
                                                .toLowerCase()
                                        ].stylesContainer
                                    }`}>
                                    <img
                                        src={
                                            wallets[
                                                connector.name
                                                    .split(" ")[0]
                                                    .toLowerCase()
                                            ].logo
                                        }
                                        alt="wallet Logo"
                                        className="w-h-7 h-7"
                                    />
                                </div>
                                <div className="flex items-center justify-center text-black text-xl font-normal">
                                    {connector.name.split(" ")[0]}
                                    {!connector.ready && " (unsupported)"}
                                    {isLoading &&
                                        connector.id === pendingConnector?.id &&
                                        " (connecting)"}
                                </div>
                            </>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Login;
