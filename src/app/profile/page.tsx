/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
    Address,
    useAccount,
    useContractRead,
    useContractReads,
    useNetwork,
    useQuery,
} from "wagmi";

import Stats from "@/components/stats";
import Achievements from "@/components/achievement";
import Setting from "@/components/setting";
import {
    get_answers_by_user_address,
    get_questions_by_user_address,
    get_user_by_address_abi,
} from "@/abi/user";
import { Answer, Question, UserContract, UserMetadata } from "@/types";
import { create } from "zustand";
import { BigNumber } from "ethers";
import { get_all_questions_by_id } from "@/abi/social";
import LoadingModal from "@/components/modals/loader";

type State = {
    user: UserMetadata;
    address: string;
    socials: Array<Object>;
    questionsIds: Array<Number>;
    questions: Array<Question>;
    answersIds: Array<Number>;
    answers: Array<Answer>;
};

type Actions = {
    changeUser: (user: UserMetadata) => void;
    changeAddress: (address: string) => void;
    changeSocials: (socials: Array<Object>) => void;
    changeAnswersIds: (answersIds: Array<Number>) => void;
    changeAnswers: (answers: Array<Answer>) => void;
    changeQuestionsIds: (questionIds: Array<Number>) => void;
    changeQuestions: (questions: Array<Question>) => void;
};

const useProfileStore = create<State & Actions>((set) => ({
    user: {
        banner: "",
        bio: "",
        email: "",
        name: "",
        profile: "",
    },
    address: "",
    socials: [],
    questionsIds: [],
    questions: [],
    answersIds: [],
    answers: [],
    //functions
    changeUser: (user: UserMetadata) =>
        set((state: State) => ({ ...state, user })),
    changeAddress: (address: string) =>
        set((state: State) => ({ ...state, address })),
    changeSocials: (socials: Array<Object>) =>
        set((state: State) => ({ ...state, socials })),
    changeAnswers: (answers: Array<Answer>) =>
        set((state: State) => ({ ...state, answers })),
    changeAnswersIds: (answersIds: Array<Number>) =>
        set((state: State) => ({ ...state, answersIds })),
    changeQuestions: (questions: Array<Question>) =>
        set((state: State) => ({ ...state, questions })),
    changeQuestionsIds: (questionsIds: Array<Number>) =>
        set((state: State) => ({ ...state, questionsIds })),
}));

const Profile = () => {
    const {
        user: state_user,
        address: state_address,
        socials,
        questions,
        questionsIds,
        answers,
        answersIds,
        changeUser,
        changeAddress,
        changeSocials,
        changeAnswers,
        changeQuestions,
        changeAnswersIds,
        changeQuestionsIds,
    } = useProfileStore((state) => state);

    console.log({ answersIds });

    const [active, set_active] = useState<string>("Stats");
    const { address } = useAccount();
    const { chain } = useNetwork();

    const {
        data: user_data,
        isLoading: isUserLoading,
        isError: isUserError,
        isFetching,
    } = useContractRead({
        address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
        abi: get_user_by_address_abi,
        functionName: "getUserByAddress",
        chainId: chain?.id,
        args: [address],
        onError(error: Error) {
            console.log(error.message);
        },
    });

    const {
        data: user_answers_ids_data,
        isLoading: isUserAnswersLoading,
        isError: isUserAnswersError,
    } = useContractRead({
        address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
        abi: get_answers_by_user_address,
        functionName: "getAnswersByUserAddress",
        chainId: chain?.id,
        args: [address],
        onError(error: Error) {
            console.log(error.message);
        },
    });

    const {
        data: user_questions_ids_data,
        isLoading: isUserQuestionsLoading,
        isError: isUserQuestionsError,
    } = useContractRead({
        address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
        abi: get_questions_by_user_address,
        functionName: "getQuestionsByUserAddress",
        chainId: chain?.id,
        args: [address],
        onError(error: Error) {
            console.log(error.message);
        },
    });

    const profile_contract = user_data as UserContract;

    const {
        data: profile,
        isError: isProfileError,
        isLoading: isProfileLoading,
    } = useQuery(["user-profile", address], () =>
        axios.get(profile_contract?.uri)
    );

    const user = profile?.data as UserMetadata;

    /**
     * @calls UseEffect calls for setting state address, user, questions, questionIds, answerIds
     * and answers
     */
    useEffect(() => {
        changeUser(user);
        changeAddress(address as string);
    }, [address, user, changeAddress, changeUser]);

    useEffect(() => {
        if (
            user_questions_ids_data &&
            !isUserQuestionsLoading &&
            !isUserQuestionsError
        ) {
            let ids_list_as_number: number[] = Array.isArray(
                user_questions_ids_data
            )
                ? user_questions_ids_data.map((id: any) => Number(id._hex))
                : [];

            ids_list_as_number = ids_list_as_number
                ?.slice(0, 3)
                .sort((a: number, b: number) => {
                    return b - a;
                });

            changeQuestionsIds(ids_list_as_number);
        }

        if (
            user_answers_ids_data &&
            !isUserAnswersLoading &&
            !isUserAnswersError
        ) {
            let ids_list_as_number: number[] = Array.isArray(
                user_answers_ids_data
            )
                ? user_answers_ids_data.map((id: any) => Number(id._hex))
                : [];

            ids_list_as_number = ids_list_as_number
                ?.slice(0, 3)
                .sort((a: number, b: number) => {
                    return b - a;
                });

            changeAnswersIds(ids_list_as_number);
        }
    }, [
        user_questions_ids_data,
        user_answers_ids_data,
        changeQuestionsIds,
        changeAnswersIds,
        isUserQuestionsLoading,
        isUserQuestionsError,
        isUserAnswersLoading,
        isUserAnswersError,
    ]);

    /**
     * @method call contract, extract questions, answers from questionIds and answerIds
     */
    const contract = {
        address: process.env.NEXT_PUBLIC_STACK3_ADDRESS as Address,
        abi: get_all_questions_by_id,
        functionName: "getQuestionById",
    };

    const {
        data: questions_data,
        isLoading: isQuestionsLoading,
        isError: isQuestionsError,
        refetch: refetchQuestions,
    } = useContractReads({
        contracts: questionsIds?.map((questionId: any) => ({
            ...contract,
            args: [questionId],
        })) as any,
        enabled: false,
    });

    useEffect(() => {
        if (questionsIds.length > 0) {
            refetchQuestions();
        }
    }, [questionsIds, refetchQuestions]);

    useEffect(() => {
        if ((questions_data?.length as number) > 0) {
            changeQuestions(questions_data as Question[]);
        }
    }, [changeQuestions, questions_data]);

    const {
        data: answers_data,
        isLoading: isAnswersLoading,
        isError: isAnswersError,
        refetch: refetchAnswers,
    } = useContractReads({
        contracts: answersIds?.map((answerId: any) => ({
            ...contract,
            args: [answerId],
        })) as any,
        enabled: false,
    });

    useEffect(() => {
        if (answersIds.length > 0) {
            refetchAnswers();
        }
    }, [answersIds.length, refetchAnswers]);

    useEffect(() => {
        if ((answers_data?.length as number) > 0) {
            changeAnswers(answers_data as Answer[]);
        }
    }, [answers_data, changeAnswers]);

    /**
     * @returns component based on fetch state
     */
    if (isUserLoading || isProfileLoading) {
        return <div>Loading...</div>;
    }

    if (isUserError || isProfileError) {
        return <div>Something went wrong</div>;
    }

    if (!profile_contract || !user) {
        return <div>No data found regarding user.</div>;
    }

    console.log(profile);

    return (
        <div className="relative w-full flex flex-col items-center bg-darkblue">
            {isFetching && (
                <LoadingModal
                    loadingTitle="Fetching Smart Contract"
                    loadingMessage=""
                />
            )}
            <div className="w-full h-40">
                <img
                    className="object-cover w-full h-full"
                    src={
                        user?.banner ||
                        "https://images.unsplash.com/photo-1682847842653-a881916772b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                    }
                    alt="Banner"
                />
            </div>
            <div className="absolute top-[120px] lg:top-20 left-0 right-0 flex items-end justify-between px-4 lg:px-8 w-full lg:w-9/12 mx-auto">
                <div className="w-20 h-20 lg:w-36 lg:h-36 rounded-full overflow-hidden border-solid border-[3px] border-silver-100">
                    <img
                        className="object-cover w-full h-full"
                        src={
                            user?.profile ||
                            "https://images.unsplash.com/photo-1542190891-2093d38760f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTU2NzA5NQ&ixlib=rb-4.0.3&q=80&w=1080"
                        }
                        alt="Profile picture"
                    />
                </div>
                <ul className="list-none flex flex-row gap-x-4 m-0 p-0">
                    <li>
                        <a className="text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-github">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a className="text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-twitter">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a className="text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-globe">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a className="text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-linkedin">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="mt-20 px-6 lg:px-8 pb-14 w-full lg:w-9/12">
                <div className="flex flex-col justify-center items-start lg:w-1/3">
                    <div className="flex flex-col items-start">
                        <h1 className="m-0 mb-2 text-lg lg:text-[2rem] text-white">
                            {user?.name}
                        </h1>
                        <h1 className="m-0 mb-2 text-blue font-normal text-base lg:text-[1.5rem]">
                            {user?.email}
                        </h1>
                    </div>
                    <p className="m-0 mb-2 text-sm lg:text-lg text-gray-200">
                        {address?.substring(0, 10)}...{address?.substring(30)}
                    </p>
                    <p className="m-0 mb-10 text-base lg:text-lg text-gray-50">
                        {user?.bio}
                    </p>
                </div>
                <ul className="m-0 mb-10 p-0 flex items-center gap-x-8 list-none overflow-auto w-full">
                    <li className="p-0 m-0">
                        <button
                            onClick={() => set_active("Stats")}
                            className={`cursor-pointer bg-transparent flex items-center gap-x-1 py-3 px-6 rounded-full ${
                                active === "Stats"
                                    ? "text-darkblue bg-white"
                                    : "text-white"
                            }`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path
                                    fill="#000000"
                                    d="M9 17a1 1 0 102 0H9zm2-14a1 1 0 10-2 0h2zM3 17a1 1 0 102 0H3zm2-7a1 1 0 00-2 0h2zm10 7a1 1 0 102 0h-2zm2-10a1 1 0 10-2 0h2zm-6 10V3H9v14h2zm-6 0v-7H3v7h2zm12 0V7h-2v10h2z"
                                />
                            </svg>
                            <span
                                className={`${
                                    active === "Stats"
                                        ? "font-semibold"
                                        : "font-medium"
                                } text-lg`}>
                                Stats
                            </span>
                        </button>
                    </li>
                    <li className="p-0 m-0">
                        <button
                            onClick={() => set_active("Achievements")}
                            className={`cursor-pointer bg-transparent flex items-center gap-x-2 py-3 px-6 rounded-full ${
                                active === "Achievements"
                                    ? "text-darkblue bg-white"
                                    : "text-white"
                            }`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                            </svg>

                            <span
                                className={`${
                                    active === "Achievements"
                                        ? "font-semibold"
                                        : "font-medium"
                                } text-lg`}>
                                Achievements
                            </span>
                        </button>
                    </li>
                    <li className="p-0 m-0">
                        <button
                            onClick={() => set_active("Setting")}
                            className={`cursor-pointer bg-transparent flex items-center gap-x-2 py-3 px-6 rounded-full ${
                                active === "Setting"
                                    ? "text-darkblue bg-white"
                                    : "text-white"
                            }`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path
                                    // fill="#000000"
                                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                    // stroke="#292D32"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    // fill="#000000"
                                    d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z"
                                    // stroke="#292D32"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span
                                className={`${
                                    active === "Setting"
                                        ? "font-semibold"
                                        : "font-medium"
                                } text-lg`}>
                                Settings
                            </span>
                        </button>
                    </li>
                </ul>
                {active === "Stats" ? (
                    <Stats questions={questions} answers={answers} />
                ) : active === "Achievements" ? (
                    <Achievements />
                ) : active === "Setting" ? (
                    <Setting />
                ) : null}
            </div>
        </div>
    );
};

export default Profile;
