import {
    Area,
    AreaChart,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import QuestionCardLarge from "../cards/questionLarge";
import { StatsProps } from "@/types/profile";

const Stats = ({ questions }: StatsProps) => {
    return (
        <div className="bg-gray-100 rounded-xl p-6 lg:p-10 text-white">
            <div className="mb-12">
                <h2 className="m-0 mb-6 text-[28px]">Total Upvotes</h2>
            </div>
            <div className="mb-12">
                <h2 className="m-0 mb-6 text-[28px] flex flex-col lg:flex-row gap-y-10">
                    {"Questions Asked "}
                    <span className="text-silver-100 text-base">
                        {" "}
                        ({questions?.length} Questions)
                    </span>
                </h2>
                {questions?.map((question) => {
                    return (
                        <div
                            className="m-0 mb-3"
                            key={Number(question.id?._hex)}>
                            <QuestionCardLarge question={question} />
                        </div>
                    );
                })}
            </div>
            <div className="">
                <h2 className="m-0 mb-6 text-[28px] flex flex-col lg:flex-row gap-y-10">
                    Answers{" "}
                    <span className="text-silver-100 text-base">
                        (3 Answers)
                    </span>
                </h2>
                <div className="m-0 mb-3">
                    <QuestionCardLarge
                        question="How can I anchor my absolute button to the end of a div/container so that when I scroll that div/container to right it will remain in the same place"
                        voteCount={-5}
                    />
                </div>
                <div className="m-0 mb-3">
                    <QuestionCardLarge
                        question="How can I anchor my absolute button to the end of a div/container so that when I scroll that div/container to right it will remain in the same place"
                        voteCount={-5}
                    />
                </div>
                <div className="m-0 mb-3">
                    <QuestionCardLarge
                        question="How can I anchor my absolute button to the end of a div/container so that when I scroll that div/container to right it will remain in the same place"
                        voteCount={-5}
                    />
                </div>
            </div>
        </div>
    );
};

export default Stats;
