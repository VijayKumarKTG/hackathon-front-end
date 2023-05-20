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

const Stats = ({ questions, answers }: StatsProps) => {
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
                {questions.length === 0 ? (
                    <p className="text-lg">No Questions found</p>
                ) : (
                    <>
                        {questions?.map((question) => {
                            return (
                                <div
                                    className="m-0 mb-3"
                                    key={Number(question.id?._hex)}>
                                    <QuestionCardLarge question={question} />
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
            <div className="">
                <h2 className="m-0 mb-6 text-[28px] flex flex-col lg:flex-row gap-y-10">
                    Answers{" "}
                    <span className="text-silver-100 text-base">
                        ({answers?.length} Answers)
                    </span>
                </h2>
                {answers.length === 0 ? (
                    <p className="text-lg">No answers found</p>
                ) : (
                    <>
                        {answers?.map((answer) => {
                            return (
                                <div
                                    className="m-0 mb-3"
                                    key={Number(answer.id?._hex)}>
                                    <QuestionCardLarge answer={answer} />
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
};

export default Stats;
