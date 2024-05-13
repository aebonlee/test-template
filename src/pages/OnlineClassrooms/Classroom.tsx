import React from "react";
import Layout from "../../components/Layout";
import "./style.css";

const Classroom = () => {
    return (
        <Layout>
            <div className="border-b border-purple-700 pb-16 pt-24">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="rounded-md border border-orange-100 bg-orange-50 px-2 py-1 uppercase text-orange-500 text-sm font-medium mb-4 mx-auto">
                            온라인 강의실
                        </div>
                    </div>
                    <h1 className="text-gray-900 text-3xl lg:text-5xl font-bold font-heading text-center">강의명</h1>
                </div>
            </div>
            <div className="flex md:flex-row flex-col items-center mb-4">
                <div className="text-xl md:text-2xl font-bold leading-7 text-gray-900 w-full flex items-center md:mb-0 mb-4">
                    <svg className="w-8 h-8 text-indigo-800 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <p>강의실</p>
                </div>
                <div className="w-full">
                    <label htmlFor="location" className="block text-sm leading-5 font-medium text-gray-700 sr-only">
                        강의주차
                    </label>
                    <select
                        id="location"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        <option value="<?php echo './board.php?bo_table='.$bo_table?>">강의주차</option>
                    </select>
                </div>
            </div>

            <div className="lectureroom_box flex lg:flex-row flex-col lg:space-x-10 lg:space-y-0 space-y-4">
                <div className="flex sm:flex-row flex-col sm:space-x-6 sm:space-y-0 space-y-4 w-auto">
                    <div className="proinfo flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 overflow-auto w-auto">
                        <img className="w-full flex-shrink-0 mx-auto bg-black" src="<?php echo $professor_thumnail ?>" alt="" />
                        <div className="flex-1 flex flex-col px-8 pb-8">
                            <h3 className="mt-6 text-gray-900 text-sm font-medium">이름</h3>
                            <dl className="mt-1 flex-grow flex flex-col justify-between">
                                <dt className="sr-only">Title</dt>
                                <dd className="text-primaryBlue-500 text-sm">PROFESSOR</dd>
                                <dt className="sr-only">Role</dt>
                                <dd className="mt-3">
                                    <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">전문기술연수</span>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <div className="-mt-px flex divide-x divide-gray-200">
                                <div className="w-0 flex-1 flex">
                                    <a
                                        href="<?php echo $zoomlink?>"
                                        className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-white font-medium border border-transparent rounded-bl-lg bg-blue-500 hover:bg-blue-400"
                                        target="_blank"
                                    >
                                        <svg
                                            className="w-5 h-5 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                            ></path>
                                        </svg>
                                        <span className="ml-3">Zoom +</span>
                                    </a>
                                </div>
                                <div className="-ml-px w-0 flex-1 flex">
                                    <a
                                        href="mailto:<?php echo $professor_email?>"
                                        className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                                    >
                                        <svg
                                            className="w-5 h-5 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        <span className="ml-3">Email</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="learningn1 w-full">
                    <div className="text-xl font-semibold text-white px-3 py-2 bg-gray-800 shadow mb-5">학습목표</div>
                    <div className="tx space-y-4">
                        <div className="flex space-x-3 items-center">
                            <div className="flex items-center justify-center p-1 rounded-full flex-shrink-0 bg-green-500">
                                <svg
                                    className="h-3 w-3 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="flex space-x-3">
                                    <span className="text-sm text-gray-700">학습목표</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <div className="flex items-center justify-center p-1 rounded-full flex-shrink-0 bg-green-500">
                                <svg
                                    className="h-3 w-3 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="flex space-x-3">
                                    <span className="text-sm text-gray-700">학습목표</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-3 items-center">
                            <div className="flex items-center justify-center p-1 rounded-full flex-shrink-0 bg-green-500">
                                <svg
                                    className="h-3 w-3 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="flex space-x-3">
                                    <span className="text-sm text-gray-700">학습목표</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="text-xl font-semibold text-white px-3 py-2 bg-gray-800 shadow mb-5 mt-10">과제 알림</div>
                    <div className="tx space-y-4">
                        <div className="flex space-x-3 items-center">
                            <div className="flex items-center justify-center p-1 rounded-full flex-shrink-0 bg-green-500">
                                <svg
                                    className="h-3 w-3 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div className="">
                                <p className="flex space-x-3">
                                    <span className="text-sm text-gray-700">학습과제</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <span className="inline-flex rounded-md shadow-sm mt-10">
                        <button
                            type="button"
                            onClick={() => window.location.replace("#")}
                            className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            강의실정보 수정
                            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                                <path
                                    fill-rule="evenodd"
                                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </span>
                    <span className="inline-flex rounded-md shadow-sm mt-3">
                        <button
                            type="button"
                            onClick={() => window.location.replace("#")}
                            className="inline-flex items-center justify-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150"
                        >
                            강의일 추가
                            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </span>
                </div>
            </div>

            <div className="text-2xl font-bold leading-7 text-gray-900 mt-4 w-full flex items-center">
                <svg className="w-8 h-8 text-indigo-800 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
                <p>강의영상</p>
            </div>

            <div className="flex md:flex-row flex-col p-4 max-w-screen-lg m-auto my-12">
                <div className="aspect-w-16 aspect-h-9 w-full">
                    <iframe
                        id="videoview"
                        className="shadow-lg"
                        width=""
                        height=""
                        src="https://www.youtube.com/embed/<?php echo $link1_Array[3] ?>"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div id="scoll-div" className="w-full md:w-2/5 overflow-hidden relative show-icon">
                    <div id="journal-scroll" className="h-full overflow-auto">
                        <ul className="flex flex-row md:flex-col md:divide-y md:divide-gray-500 md:h-full">
                            <li
                                className="flex flex-col md:flex-row items-center p-2 bg-trueGray-900 text-gray-200 hover:bg-trueGray-800 hover:text-white cursor-pointer w-full"
                                data-link="<?php echo $link1_Array[3] ?>"
                            >
                                <img
                                    className="md:w-1/2 w-full"
                                    src="https://i.ytimg.com/vi_webp/<?php echo $link1_Array[3] ?>/sddefault.webp"
                                    alt=""
                                />
                                <div className="md:w-1/2 md:ml-3 my-2 md:my-0 w-full">
                                    <p className="md:text-lg font-medium flex items-center text-white">
                                        1교시
                                        <svg className="w-5 h-5 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </p>
                                </div>
                            </li>
                            <li
                                className="flex flex-col md:flex-row items-center p-2 bg-trueGray-900 text-gray-200 hover:bg-trueGray-800 hover:text-white cursor-pointer w-auto"
                                data-link="<?php echo $link2_Array[3] ?>"
                            >
                                <img
                                    className="md:w-1/2 w-full"
                                    src="https://i.ytimg.com/vi_webp/<?php echo $link2_Array[3] ?>/sddefault.webp"
                                    alt=""
                                />
                                <div className="md:w-1/2 md:ml-3 my-2 md:my-0 w-full">
                                    <p className="md:text-lg font-medium flex items-center text-white">
                                        2교시
                                        <svg className="w-5 h-5 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </p>
                                </div>
                            </li>
                            <li
                                className="md:flex items-center justify-center p-2 bg-trueGray-900 text-gray-200 md:w-auto w-1/5 flex-grow"
                                data-link="<?php echo $link2_Array[3] ?>"
                            >
                                <img className="w-auto" src="http://capability.co.kr/theme/capability/img/logow.png" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="sp_50"></div>

            <div className="flex lg:flex-row flex-col max-w-screen-xl m-auto">
                <div className="w-full">
                    <div className="flex flex-wrap lg:px-4" id="tabs-id">
                        <div className="w-full">
                            <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
                                <li className="-mb-px last:mr-0 flex-auto text-center">
                                    <a className="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white bg-indigo-600">
                                        <i className="fa fa-rocket text-base mr-1"></i> 출석
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Classroom;
