import { useEffect, useState } from "react";
import ExamAnswerButton from "../../components/ExamAnswerButton";
import jsonData from "../../data/exam_question.json";
import { decode } from "../../services/decode";
import { useAuth } from "../../States/AuthContext";
import { useParams } from "react-router-dom";

const groupByExamId = (jsonData: any) => {
    const tableData = jsonData.find((entry: any) => entry.type === "table").data;
    return tableData.reduce((acc: any, item: any) => {
        const examId = item.exam_id;
        if (!acc[examId]) {
            acc[examId] = [];
        }
        acc[examId].push({
            questionNo: item.q_no,
            question: item.q_content,
            choices: [item.q_item_1, item.q_item_2, item.q_item_3, item.q_item_4, item.q_item_5].filter((choice) => choice),
            correctAnswer: `choice${item.q_key}`,
        });
        return acc;
    }, {});
};

const Exam = () => {
    const { isLoggedIn } = useAuth();
    const [groupedQuestions, setGroupedQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
    const { testId } = useParams();

    useEffect(() => {
        if (!isLoggedIn || testId === undefined) {
            window.location.href = "/";
        } else {
            const groupedData = groupByExamId(jsonData);
            setGroupedQuestions(groupedData[testId]);
        }
    }, [jsonData]);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        let correctAnswers = 0;
        let totalQuestions = 0;

        groupedQuestions.forEach((question: any) => {
            totalQuestions++;
            if (selectedAnswers[question.questionNo] === question.correctAnswer) {
                correctAnswers++;
            }
        });

        const score = Math.round((correctAnswers / totalQuestions) * 100);
        const token = localStorage.getItem("token");
        const user = decode(token ? token : "");
        fetch(`http://localhost:3000/users/${user.id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (testId) {
                    fetch(`http://localhost:3000/test-results`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({ test_id: parseInt(testId), score: score, user_id: data.id }),
                    }).then(() => (window.location.href = "/exam-result"));
                } else {
                    window.location.href = "/";
                }
            });
    };

    return (
        <div className="font-body flex flex-col min-h-screen">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-10 justify-center my-12">
                    <section className="section">
                        <div className="max-w-screen-lg text-left mb-20 p-5 bg-white h-full mx-auto">
                            <h1 className="md:text-xl text-lg text-gray-900 font-medium">필기모의시험</h1>
                        </div>
                    </section>
                    {groupedQuestions.map((question: any) => (
                        <section className="section" key={question.questionNo}>
                            <div className="max-w-screen-lg text-left mb-20 p-5 bg-white h-full mx-auto">
                                <div className="md:text-base text-sm text-orange-600 mb-3">문제 {question.questionNo}</div>
                                <div
                                    className="md:text-xl text-lg text-gray-900 font-medium mb-3"
                                    dangerouslySetInnerHTML={{ __html: question.question }}
                                />
                                <ExamAnswerButton
                                    questionNo={question.questionNo.toString()}
                                    questions={question.choices}
                                    setSelectedAnswers={setSelectedAnswers}
                                />
                            </div>
                        </section>
                    ))}
                    <section className="section">
                        <div className="max-w-screen-lg text-left mb-20 p-5 bg-white text-xl h-full mx-auto">
                            <button
                                type="submit"
                                id="btn_submit"
                                className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                            >
                                제출
                            </button>
                        </div>
                    </section>
                </div>
            </form>
        </div>
    );
};

export default Exam;
