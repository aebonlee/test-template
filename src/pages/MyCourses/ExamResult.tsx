import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { decode } from "../../services/decode";
import { useAuth } from "../../States/AuthContext";

interface TestName {
    [key: number]: string;
}

const tests: TestName = {
    12: "경영정보 일반 A",
    13: "데이터 해석 및 활용 A",
    14: "경영정보시각화 디자인 A",
    15: "경영정보 일반 B",
    16: "데이터 해석 및 활용 B",
    17: "경영정보시각화 디자인 B",
};

const ExamResult = () => {
    const { isLoggedIn } = useAuth();
    const [userName, setUserName] = useState("USER" as string);
    const [testResults, setTestResults] = useState([]);

    useEffect(() => {
        if (!isLoggedIn) {
            window.location.href = "/";
        } else {
            const token = localStorage.getItem("token");
            const user = decode(token ? token : "");
            fetch(`http://localhost:3000/users/${user.id}`, {})
                .then((res) => res.json())
                .then((data) => {
                    setUserName(data.name);
                    fetch(`http://localhost:3000/test-results/${data.id}`, {}).then((res) =>
                        res.json().then((data) => {
                            setTestResults(data);
                        })
                    );
                });
        }
    }, []);
    return (
        <Layout>
            <div className="border-b border-purple-700 pb-16 pt-24">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="rounded-md border border-orange-100 bg-orange-50 px-2 py-1 uppercase text-orange-500 text-sm font-medium mb-4 mx-auto">
                            내 강의실
                        </div>
                    </div>
                    <h1 className="text-gray-900 text-3xl lg:text-5xl font-bold font-heading text-center">모의시험 성적</h1>
                </div>
            </div>
            <div className="text-center pt-36 pb-24">
                <p className="text-lg font-semibold">
                    <span className="text-orange-600">{userName} </span> 님의 점수
                </p>
                <div className="mt-8 flow-root flex items-center justify-center">
                    <div className="mx-auto -my-2 overflow-x-auto max-w-5xl rounded-lg bg-white shadow">
                        <div className="inline-block max-w-5xl w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="max-w-5xl divide-y divide-gray-300 w-full">
                                <thead>
                                    <tr className="divide-x divide-gray-300 bg-gray-200">
                                        <th scope="col" className="py-3.5 pl-4 pr-4 text-lg font-semibold text-gray-900 sm:pl-0">
                                            시험과목
                                        </th>
                                        <th scope="col" className="py-3.5 pl-4 pr-4 text-lg font-semibold text-gray-900 sm:pr-0">
                                            점수
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-300 bg-white">
                                    {testResults.map((testResult: any) => (
                                        <tr key={testResult.test_id} className="divide-x divide-gray-300">
                                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                                                {tests[testResult.test_id]}
                                            </td>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-lg font-medium text-gray-900 sm:pr-0">{testResult.score}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a href="/" className="text-sm font-semibold text-gray-900">
                        메인 화면으로 <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default ExamResult;
