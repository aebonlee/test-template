import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { useAuth } from "../../States/AuthContext";
import { Link } from "react-router-dom";

const ExamList = () => {
    const { isLoggedIn } = useAuth();
    useEffect(() => {
        if (!isLoggedIn) {
            window.location.href = "/";
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
                    <h1 className="text-gray-900 text-3xl lg:text-5xl font-bold font-heading text-center">모의시험</h1>
                </div>
            </div>
            <div className="text-center pt-36 pb-24">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-6">
				<Link to={"/exam/12"} className="col-span-1 bg-white rounded-lg shadow hover:shadow-lg transform hover:-translate-y-2 md:mx-6">
					<div className="relative overflow-hidden w-full flex items-center justify-between p-6 space-x-6">
					<div className="flex-1 truncate">
						<div className="flex items-center space-x-3">
						<h3 className="text-gray-900 text leading-5 font-medium truncate">경영정보 일반 A</h3>
						<span className="flex-shrink-0 inline-block px-2 py-0.5 text-orange-800 text-xs leading-4 font-medium bg-orange-100 rounded-full">01</span>
						</div>
						<p className="mt-1 text-gray-500 text-sm leading-5 truncate"></p>
					</div>
					<div className="absolute student-bg bg-center bg-gray-300 flex-shrink-0" style={{backgroundImage: `url("/student-bg1.jpg")`}}></div>
					</div>
				</Link>
				<Link to={"/exam/15"} className="col-span-1 bg-white rounded-lg shadow hover:shadow-lg transform hover:-translate-y-2 md:mx-6">
					<div className="relative overflow-hidden w-full flex items-center justify-between p-6 space-x-6">
					<div className="flex-1 truncate">
						<div className="flex items-center space-x-3">
						<h3 className="text-gray-900 text leading-5 font-medium truncate">경영정보 일반 B</h3>
						<span className="flex-shrink-0 inline-block px-2 py-0.5 text-orange-800 text-xs leading-4 font-medium bg-orange-100 rounded-full">02</span>
						</div>
						<p className="mt-1 text-gray-500 text-sm leading-5 truncate"></p>
					</div>
					<div className="absolute student-bg bg-center bg-gray-300 flex-shrink-0" style={{backgroundImage: `url("/student-bg1.jpg")`}}></div>
					</div>
				</Link>
                <Link to={"/exam/13"} className="col-span-1 bg-white rounded-lg shadow hover:shadow-lg transform hover:-translate-y-2 md:mx-6">
					<div className="relative overflow-hidden w-full flex items-center justify-between p-6 space-x-6">
					<div className="flex-1 truncate">
						<div className="flex items-center space-x-3">
						<h3 className="text-gray-900 text leading-5 font-medium truncate">데이터 해석 및 활용 A</h3>
						<span className="flex-shrink-0 inline-block px-2 py-0.5 text-orange-800 text-xs leading-4 font-medium bg-orange-100 rounded-full">03</span>
						</div>
						<p className="mt-1 text-gray-500 text-sm leading-5 truncate"></p>
					</div>
					<div className="absolute student-bg bg-center bg-gray-300 flex-shrink-0" style={{backgroundImage: `url("/student-bg2.jpg")`}}></div>
					</div>
				</Link>
                <Link to={"/exam/16"} className="col-span-1 bg-white rounded-lg shadow hover:shadow-lg transform hover:-translate-y-2 md:mx-6">
					<div className="relative overflow-hidden w-full flex items-center justify-between p-6 space-x-6">
					<div className="flex-1 truncate">
						<div className="flex items-center space-x-3">
						<h3 className="text-gray-900 text leading-5 font-medium truncate">데이터 해석 및 활용 B</h3>
						<span className="flex-shrink-0 inline-block px-2 py-0.5 text-orange-800 text-xs leading-4 font-medium bg-orange-100 rounded-full">04</span>
						</div>
						<p className="mt-1 text-gray-500 text-sm leading-5 truncate"></p>
					</div>
					<div className="absolute student-bg bg-center bg-gray-300 flex-shrink-0" style={{backgroundImage: `url("/student-bg2.jpg")`}}></div>
					</div>
				</Link>
                <Link to={"/exam/14"} className="col-span-1 bg-white rounded-lg shadow hover:shadow-lg transform hover:-translate-y-2 md:mx-6">
					<div className="relative overflow-hidden w-full flex items-center justify-between p-6 space-x-6">
					<div className="flex-1 truncate">
						<div className="flex items-center space-x-3">
						<h3 className="text-gray-900 text leading-5 font-medium truncate">경영정보시각화 디자인 A</h3>
						<span className="flex-shrink-0 inline-block px-2 py-0.5 text-orange-800 text-xs leading-4 font-medium bg-orange-100 rounded-full">05</span>
						</div>
						<p className="mt-1 text-gray-500 text-sm leading-5 truncate"></p>
					</div>
					<div className="absolute student-bg bg-center bg-gray-300 flex-shrink-0" style={{backgroundImage: `url("/student-bg3.jpg")`}}></div>
					</div>
				</Link>
                <Link to={"/exam/17"} className="col-span-1 bg-white rounded-lg shadow hover:shadow-lg transform hover:-translate-y-2 md:mx-6">
					<div className="relative overflow-hidden w-full flex items-center justify-between p-6 space-x-6">
					<div className="flex-1 truncate">
						<div className="flex items-center space-x-3">
						<h3 className="text-gray-900 text leading-5 font-medium truncate">경영정보시각화 디자인 B</h3>
						<span className="flex-shrink-0 inline-block px-2 py-0.5 text-orange-800 text-xs leading-4 font-medium bg-orange-100 rounded-full">06</span>
						</div>
						<p className="mt-1 text-gray-500 text-sm leading-5 truncate"></p>
					</div>
					<div className="absolute student-bg bg-center bg-gray-300 flex-shrink-0" style={{backgroundImage: `url("/student-bg3.jpg")`}}></div>
					</div>
				</Link>
			</ul>
            </div>
        </Layout>
    );
}

export default ExamList;