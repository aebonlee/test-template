import React from "react";
import Layout from "../../components/Layout";

const MyLearningHistory = () => {
    return (
        <Layout>
            <div className="border-b border-purple-700 pb-16 pt-24">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="rounded-md border border-orange-100 bg-orange-50 px-2 py-1 uppercase text-orange-500 text-sm font-medium mb-4 mx-auto">
                            내 강의실
                        </div>
                    </div>
                    <h1 className="text-gray-900 text-3xl lg:text-5xl font-bold font-heading text-center">학습기록 확인</h1>
                </div>
            </div>
            <div>MyLearningHistory</div>
        </Layout>
    );
};

export default MyLearningHistory;