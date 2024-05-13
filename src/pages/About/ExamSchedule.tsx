import React from "react";
import Layout from "../../components/Layout";

const ExamSchedule = () => {
    return (
        <Layout>
            <div className="border-b border-purple-700 pb-16 pt-24">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="rounded-md border border-orange-100 bg-orange-50 px-2 py-1 uppercase text-orange-500 text-sm font-medium mb-4 mx-auto">
                            경영시각화정보능력
                        </div>
                    </div>
                    <h1 className="text-gray-900 text-3xl lg:text-5xl font-bold font-heading text-center">시험일정</h1>
                </div>
            </div>
            <div className="sub_content">
                <div className="txt_list_01_area">
                    <div className="title_group mt-12">
                        <h5 className="txt_title_02 mt-12">정기시험 일정안내</h5>
                        <form name="form1" id="form1" className="float-right">
                            <input type="hidden" name="cd" value="0108" />
                            <input type="hidden" name="mm" value="28" />
                            <fieldset className="year_select">
                                <select name="searchYear">
                                    <option>년도 선택</option>
                                    <option value="2024" selected>
                                        2024
                                    </option>
                                </select>
                                <button type="submit" className="btn_bk s ml-2 py-1 px-1.5 text-center">
                                    조회
                                </button>
                            </fieldset>
                        </form>
                    </div>
                    <br />
                    <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                        <caption className="font-semibold text-lg p-3">시험일정 목록</caption>
                        <thead>
                            <tr>
                                <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6" scope="col">종목</th>
                                <th className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell" scope="col">회별</th>
                                <th className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell" scope="col">구분</th>
                                <th className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell" scope="col">등급</th>
                                <th className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell" scope="col">인터넷접수</th>
                                <th className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell" scope="col">시험일자</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                    발표일자
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="relative py-4 pl-4 pr-3 text-sm sm:pl-6">경영정보시각화능력</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">1</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">필기</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">단일등급</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
                                    (1차) 2024.03.18 ~ 2024.03.24 <br />
                                    (2차) 2024.04.17 ~ 2024.04.23
                                </td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">2024.05.18</td>
                                <td className="px-3 py-3.5 text-sm text-gray-500">2024.06.18</td>
                            </tr>
                            <tr>
                                <td className="relative py-4 pl-4 pr-3 text-sm sm:pl-6 border-t border-gray-200">경영정보시각화능력</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell border-t border-gray-200">1</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell border-t border-gray-200">실기</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell border-t border-gray-200">단일등급</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell border-t border-gray-200">2024.08.28 ~ 2024.09.03</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell border-t border-gray-200">2024.09.28</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell border-t border-gray-200">2024.11.18</td>
                            </tr>
                            <tr>
                                <td className="relative py-4 pl-4 pr-3 text-sm sm:pl-6 border-t border-gray-200">경영정보시각화능력</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell border-t border-gray-200">2</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell border-t border-gray-200">필기</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell border-t border-gray-200">단일등급</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell border-t border-gray-200">
                                    (1차) 2024.09.30 ~ 2024.10.06 <br />
                                    (2차) 2024.10.30 ~ 2024.11.05
                                </td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell border-t border-gray-200">2024.11.30</td>
                                <td className="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell border-t border-gray-200">2024.12.31</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <br />
                    <ul>
                        <li>
                            인터넷접수 여건이 안되는 수험자께서는 인터넷접수 기간중 해당상의를 방문해 주시면 접수에 필요한 시스템(사진 스캔 등)을
                            제공해 드립니다.
                        </li>
                        <li>
                            <span className="text-red-500">접수기간 중이라도 수험자가 많을 경우 시험장은 조기 마감될 수 있습니다.</span>
                        </li>
                        <li>
                            <span className="text-red-500">
                                정기 검정 원서접수 마지막 날의 접수마감은 18:00 까지 입니다.(수험료 결제까지 완료하고 접수증이 확인되어야 원서접수가
                                된 것입니다.)
                            </span>
                        </li>
                    </ul>{" "}
                </div>
            </div>
        </Layout>
    );
};

export default ExamSchedule;
