import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import "./style.css";
import jsonData1 from "../../data/g5_write_lecture_data_009.json";
import jsonData2 from "../../data/g5_write_lecture_data_009.json";
import jsonData3 from "../../data/g5_write_lecture_data_009.json";
import { useParams } from "react-router-dom";

interface ClassRoomData {
    [key: string]: any;
}

interface CurrentRoomData {
    id: string;
    goal: string[];
    links: string[];
    title: string;
    professor: string;
    date: string;
    notice: string;
    zoom_link: string;
    professor_email: string;
}

const classRoomNums = [
    { id: "1", data: jsonData1 },
    { id: "2", data: jsonData2 },
    { id: "3", data: jsonData3 },
];

function parseYoutubeId(url: string) {
    // "https://youtu.be/m1DcKTdf-RI"
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 1];
}

const groupByClassRoomId = (jsonData: any) => {
    const tableData = jsonData.find((entry: any) => entry.type === "table").data;
    return tableData.reduce((acc: any, item: any) => {
        const classRoomId = item.wr_id;
        if (!acc[classRoomId]) {
            acc[classRoomId] = [];
        }
        acc[classRoomId].push({
            id: item.wr_id,
            goal: [item.wr_1, item.wr_2, item.wr_3],
            links: [parseYoutubeId(item.wr_4), parseYoutubeId(item.wr_5)],
            title: item.wr_12,
            professor: item.wr_13,
            date: item.wr_14,
            notice: item.wr_15,
            zoom_link: item.wr_16,
            professor_email: item.wr_17,
        });
        return acc;
    }, {});
};

const Classroom = () => {
    const { id } = useParams();
    const [classRoomDatas, setClassRoomDatas] = useState<ClassRoomData>({});
    const [currentRoom, setCurrentRoom] = useState<CurrentRoomData>({
        id: "",
        goal: [],
        links: [],
        title: "",
        professor: "",
        date: "",
        notice: "",
        zoom_link: "",
        professor_email: "",
    });
    const [currentVideo, setCurrentVideo] = useState<string>("");

    useEffect(() => {
        if (!id) {
            window.location.href = "/";
        } else {
            const classRoom = classRoomNums.find((classRoom) => classRoom.id === id);
            if (!classRoom) {
                window.location.href = "/";
            } else {
                const classRoomData = classRoom.data;
                const groupedData = groupByClassRoomId(classRoomData);
                setClassRoomDatas(groupedData);
                const keys = Object.keys(groupedData);
                setCurrentRoom(groupedData[keys[0]][0]);
                setCurrentVideo(groupedData[keys[0]][0].links[0]);
            }
        }
    }, []);
    return (
        <Layout>
            <div className="pt-24 pb-16 border-b border-purple-700">
                <div className="container px-4 mx-auto">
                    <div className="flex justify-center">
                        <div className="px-2 py-1 mx-auto mb-4 text-sm font-medium text-orange-500 uppercase border border-orange-100 rounded-md bg-orange-50">
                            온라인 강의실
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-center text-gray-900 lg:text-5xl font-heading">강의명</h1>
                </div>
            </div>
            <div className="flex flex-col items-center mb-4 md:flex-row">
                <div className="flex items-center w-full mb-4 text-xl font-bold leading-7 text-gray-900 md:text-2xl md:mb-0">
                    <svg className="w-8 h-8 mr-3 text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                    <p>강의실</p>
                </div>
                <div className="w-full">
                    <label htmlFor="location" className="block text-sm font-medium leading-5 text-gray-700 sr-only">
                        강의주차
                    </label>
                    <select
                        id="location"
                        className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={(e) => {
                            const selectedRoom = classRoomDatas[e.target.value][0];
                            setCurrentRoom(selectedRoom);
                            setCurrentVideo(selectedRoom.links[0]);
                        }}
                    >
                        {Object.keys(classRoomDatas).map((key) => {
                            return <option value={key}>{key}</option>;
                        })}
                    </select>
                </div>
            </div>

            <div className="flex flex-col space-y-4 lectureroom_box lg:flex-row lg:space-x-10 lg:space-y-0">
                <div className="flex flex-col w-auto space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                    <div className="flex flex-col w-auto overflow-auto text-center bg-white divide-y divide-gray-200 rounded-lg shadow proinfo">
                        <img
                            className="flex-shrink-0 w-full mx-auto bg-black"
                            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                            alt=""
                        />
                        <div className="flex flex-col flex-1 px-8 pb-8">
                            <h3 className="mt-6 text-sm font-medium text-gray-900">{currentRoom.professor}</h3>
                            <dl className="flex flex-col justify-between flex-grow mt-1">
                                <dt className="sr-only">Title</dt>
                                <dd className="text-sm text-primaryBlue-500">PROFESSOR</dd>
                                <dt className="sr-only">Role</dt>
                                <dd className="mt-3">
                                    <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">전문기술연수</span>
                                </dd>
                            </dl>
                        </div>
                        <div>
                            <div className="flex -mt-px divide-x divide-gray-200">
                                <div className="flex flex-1 w-0">
                                    <a
                                        href={currentRoom.zoom_link}
                                        className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-white bg-blue-500 border border-transparent rounded-bl-lg hover:bg-blue-400"
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
                                <div className="flex flex-1 w-0 -ml-px">
                                    <a
                                        href={`mailto:${currentRoom.professor_email}`}
                                        className="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500"
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
                <div className="w-full learningn1">
                    <div className="px-3 py-2 mb-5 text-xl font-semibold text-white bg-gray-800 shadow">학습목표</div>
                    <div className="space-y-4 tx">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center flex-shrink-0 p-1 bg-green-500 rounded-full">
                                <svg
                                    className="w-3 h-3 text-white"
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
                                    <span className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: currentRoom.goal[0] }} />
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center flex-shrink-0 p-1 bg-green-500 rounded-full">
                                <svg
                                    className="w-3 h-3 text-white"
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
                                    <span className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: currentRoom.goal[1] }} />
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center flex-shrink-0 p-1 bg-green-500 rounded-full">
                                <svg
                                    className="w-3 h-3 text-white"
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
                                    <span className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: currentRoom.goal[2] }} />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 py-2 mt-10 mb-5 text-xl font-semibold text-white bg-gray-800 shadow">과제 알림</div>
                    <div className="space-y-4 tx">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center flex-shrink-0 p-1 bg-green-500 rounded-full">
                                <svg
                                    className="w-3 h-3 text-white"
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
                                    <span className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: currentRoom.notice }} />
                                </p>
                            </div>
                        </div>
                    </div>
                    <span className="inline-flex mt-10 rounded-md shadow-sm">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium leading-4 text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
                    <span className="inline-flex mt-3 rounded-md shadow-sm">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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

            <div className="flex items-center w-full mt-4 text-2xl font-bold leading-7 text-gray-900">
                <svg className="w-8 h-8 mr-3 text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
                <p>강의영상</p>
            </div>

            <div className="flex flex-col max-w-screen-lg p-4 m-auto my-12 md:flex-row">
                <div className="w-full aspect-w-16 aspect-h-9">
                    <iframe
                        id="videoview"
                        className="shadow-lg"
                        width=""
                        height=""
                        src={`https://www.youtube.com/embed/${currentVideo}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div id="scoll-div" className="relative w-full overflow-hidden md:w-2/5 show-icon">
                    <div id="journal-scroll" className="h-full overflow-auto">
                        <ul className="flex flex-row md:flex-col md:divide-y md:divide-gray-500 md:h-full">
                            <li
                                className="flex flex-col items-center w-full p-2 text-gray-200 bg-gray-900 cursor-pointer md:flex-row hover:bg-gray-800 hover:text-white"
                                data-link={currentRoom.links[0]}
                                onClick={(e) => {
                                    setCurrentVideo(currentRoom.links[0]);
                                }}
                            >
                                <img className="w-full md:w-1/2" src={`https://i.ytimg.com/vi_webp/${currentRoom.links[0]}/sddefault.webp`} alt="" />
                                <div className="w-full my-2 md:w-1/2 md:ml-3 md:my-0">
                                    <p className="flex items-center font-medium text-white md:text-lg">
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
                                className="flex flex-col items-center w-auto p-2 text-gray-200 bg-gray-900 cursor-pointer md:flex-row hover:bg-gray-800 hover:text-white"
                                data-link={currentRoom.links[1]}
                                onClick={(e) => {
                                    setCurrentVideo(currentRoom.links[1]);
                                }}
                            >
                                <img className="w-full md:w-1/2" src={`https://i.ytimg.com/vi_webp/${currentRoom.links[1]}/sddefault.webp`} alt="" />
                                <div className="w-full my-2 md:w-1/2 md:ml-3 md:my-0">
                                    <p className="flex items-center font-medium text-white md:text-lg">
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
                            <li className="items-center justify-center flex-grow w-1/5 p-2 text-gray-200 bg-gray-900 md:flex md:w-auto">
                                <img className="w-auto" src="http://capability.co.kr/theme/capability/img/logow.png" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="sp_50"></div>

            <div className="flex flex-col max-w-screen-xl m-auto lg:flex-row">
                <div className="w-full">
                    <div className="flex flex-wrap lg:px-4" id="tabs-id">
                        <div className="w-full">
                            <ul className="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none">
                                <li className="flex-auto -mb-px text-center last:mr-0">
                                    <a className="block px-5 py-3 text-xs font-bold leading-normal text-white uppercase bg-blue-600 rounded shadow-lg">
                                        <i className="mr-1 text-base fa fa-rocket"></i> 출석
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
