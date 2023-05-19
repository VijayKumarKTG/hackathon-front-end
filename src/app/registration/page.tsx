/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef } from "react";
import { create } from "zustand";
import {
    useAccount,
    useContractRead,
    useContractWrite,
    useNetwork,
    usePrepareContractWrite,
} from "wagmi";

import { get_user_by_address_abi, register_user_abi } from "@/abi/user";
import {
    getPreviewImage,
    uploadFileToPinata,
    uploadJSONToPinata,
} from "@/utils";
import { Address } from "@/types";

type State = {
    profile: File | null;
    banner: File | null;
    name: string;
    email: string;
    bio: string;
    url: string;
};

type Actions = {
    changeProfile: (profile: File | null) => void;
    changeBanner: (banner: File | null) => void;
    changeName: (name: string) => void;
    changeEmail: (email: string) => void;
    changeBio: (bio: string) => void;
    changeUrl: (url: string) => void;
};

const useCountStore = create<State & Actions>((set) => ({
    profile: null,
    banner: null,
    name: "",
    email: "",
    bio: "",
    url: "",
    changeProfile: (profile: File | null) =>
        set((state: State) => ({ ...state, profile })),
    changeBanner: (banner: File | null) =>
        set((state: State) => ({ ...state, banner })),
    changeName: (name: string) => set((state: State) => ({ ...state, name })),
    changeEmail: (email: string) =>
        set((state: State) => ({ ...state, email })),
    changeBio: (bio: string) => set((state: State) => ({ ...state, bio })),
    changeUrl: (url: string) => set((state: State) => ({ ...state, url })),
}));

const Registration = () => {
    const {
        profile,
        banner,
        name,
        email,
        bio,
        url,
        // functions
        changeProfile,
        changeBanner,
        changeName,
        changeEmail,
        changeBio,
        changeUrl,
    } = useCountStore((state) => state);

    const checkIfSubmitting = useRef<boolean>(false);

    const { isConnected, address } = useAccount();
    const { chain } = useNetwork();
    const router = useRouter();

    const { config: register_user_config } = usePrepareContractWrite({
        address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
        abi: register_user_abi,
        functionName: "registerUser",
        chainId: chain?.id,
        args: [url, process.env.NEXT_PUBLIC_HASH_SECRET],
        onError(error) {
            console.log(error);

            if (
                error.message.includes(
                    `reason="execution reverted: Stack3: User already registered"`
                )
            ) {
                router.push("/profile");
            }
        },
    });

    const { write: register_user } = useContractWrite({
        ...register_user_config,
        onError(error: Error) {
            console.log(error);
        },
        async onSuccess(data) {
            await data.wait();

            router.push("/profile");
        },
    });

    const { data, error, isError } = useContractRead({
        address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
        abi: get_user_by_address_abi,
        functionName: "getUserByAddress",
        chainId: chain?.id,
        args: [address],
        onError(error: Error) {
            console.log(error.message);
        },
    });

    useEffect(() => {
        if (!isConnected) {
            router.push("/connect-wallet");
        }
    }, [isConnected]);

    if (url && register_user && checkIfSubmitting.current) {
        register_user?.();
        checkIfSubmitting.current = false;
    }

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (
            isError &&
            data === undefined &&
            error?.message.includes('"Stack3: User not registered"')
        ) {
            const profile_url = await uploadFileToPinata(profile);
            const banner_url = await uploadFileToPinata(banner);

            const new_user = {
                profile: profile_url,
                banner: banner_url,
                personalWebsite: "",
                linkedin: "",
                github: "",
                twitter: "",
                name: "",
                email,
                bio,
            };

            const url = await uploadJSONToPinata(new_user);
            changeUrl(url);
            checkIfSubmitting.current = true;
        } else {
            router.push("/profile");
        }
    };

    return (
        <div className="bg-darkblue px-6 py-14 min-[600px]:px-[100px] md:px-[192px] lg:px-[100px] flex flex-col lg:flex-row items-center justify-center gap-x-16 rounded-24 xl:py-40 xl:px-48">
            <div className="w-full mb-14 lg:basis-1/2 max-w-[430px]">
                <h1 className="text-[30px] text-center lg:text-left lg:text-40 text-white m-0 mb-10">
                    Register now and be
                    <br className="hidden lg:block" /> a part of Web3 dApp
                    <br className="hidden lg:block" /> community 🚀
                </h1>
                <img
                    className="w-full object-contain mix-blend-luminosity"
                    alt="Login Image"
                    src="/registeration-img.png"
                />
            </div>
            <form
                onSubmit={onSubmit}
                className="w-full flex flex-col gap-y-8 gap-4 lg:basis-1/2">
                <div className="flex flex-row gap-x-8 w-full">
                    <div className="flex flex-col gap-y-2">
                        <label
                            className="block text-sm font-medium text-white"
                            htmlFor="profile">
                            Profile
                        </label>
                        <div className="relative w-20 h-20 border-none overflow-hidden rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue dark:focus:border-blue flex items-center justify-center">
                            <input
                                className="absolute w-full h-full opacity-0"
                                type="file"
                                accept="images/*"
                                id="profile"
                                name="profile"
                                placeholder="Enter your profile"
                                onChange={(event) =>
                                    changeProfile(
                                        event.target.files
                                            ? event.target.files[0]
                                            : null
                                    )
                                }
                            />
                            {profile ? (
                                <img
                                    src={getPreviewImage(profile)}
                                    alt="Profile"
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                    />
                                </svg>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-2 w-full box-border">
                        <label
                            className="block text-sm font-medium text-white"
                            htmlFor="banner">
                            Banner
                        </label>
                        <div className="relative box-border w-full h-20 border-none overflow-hidden rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue dark:focus:border-blue flex items-center justify-center">
                            <input
                                className="absolute w-full h-full opacity-0"
                                type="file"
                                accept="images/*"
                                id="banner"
                                name="banner"
                                placeholder="Enter your banner"
                                onChange={(event) =>
                                    changeBanner(
                                        event.target.files
                                            ? event.target.files[0]
                                            : null
                                    )
                                }
                            />
                            {banner ? (
                                <img
                                    src={getPreviewImage(banner)}
                                    alt="Banner"
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                    />
                                </svg>
                            )}
                        </div>
                    </div>
                </div>

                <div className="col-span-6 sm:col-span-4">
                    <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-white">
                        Name
                    </label>
                    <input
                        onChange={(event) => changeName(event.target.value)}
                        defaultValue={name}
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        placeholder="Enter your name"
                        className="mt-1 bg-gray-50 border rounded-md border-gray-300 text-gray-900 text-sm focus:ring-blue focus:border-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue dark:focus:border-blue"
                    />
                </div>

                <div className="col-span-6 sm:col-span-4">
                    <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-white">
                        Email address
                    </label>
                    <input
                        onChange={(event) => changeEmail(event.target.value)}
                        defaultValue={email}
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        placeholder="Enter your email address"
                        className="mt-1 bg-gray-50 border rounded-md border-gray-300 text-gray-900 text-sm focus:ring-blue focus:border-blue block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue dark:focus:border-blue"
                    />
                </div>

                <div className="col-span-6 sm:col-span-4">
                    <label
                        htmlFor="bio"
                        className="block text-sm font-medium text-white">
                        Bio
                    </label>
                    <div className="mt-1">
                        <textarea
                            onChange={(event) => changeBio(event.target.value)}
                            rows={4}
                            name="comment"
                            id="bio"
                            placeholder="Enter your bio"
                            className="mt-1 block w-full border-gray-300 shadow-sm focus:ring-indigo-500 sm:text-sm bg-gray-50 border rounded-md text-gray-900 text-sm focus:border-blue dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue dark:focus:border-blue resize-y"
                            defaultValue={bio}
                        />
                    </div>
                </div>

                <button
                    disabled={name === "" || email === "" || bio === ""}
                    type="submit"
                    className="cursor-pointer border-none flex items-center justify-center py-4 rounded-11xl w-full bg-blue text-white font-medium text-lg leading-6">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Registration;
