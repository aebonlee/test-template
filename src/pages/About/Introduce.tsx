import React from "react";
import Layout from "../../components/Layout";

const Introduce = () => {
    return (
        <Layout>
            <div className="border-b border-purple-700 pb-16 pt-24">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="rounded-md border border-orange-100 bg-orange-50 px-2 py-1 uppercase text-orange-500 text-sm font-medium mb-4 mx-auto">
                            경영시각화정보능력
                        </div>
                    </div>
                    <h1 className="text-gray-900 text-3xl lg:text-5xl font-bold font-heading text-center">시험소개</h1>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">경영정보시각화능력 종목소개</h1>

                <p className="mb-8">
                    4차 산업혁명, 디지털 전환 등으로 인해 데이터에서 의미있는 정보를 도출하는 능력이 무엇보다 중요해지고 있습니다
                    <br />
                    &lt;경영정보시각화능력(business intelligence specialist)&gt;은 경영 관련 의사결정을 위해 기업 내외부의 정보를 시각적 요소들을
                    사용하여 효과적으로 표현하고 전달하는 능력을 평가하는 국가기술자격 시험입니다.
                </p>

                <h2 className="text-2xl font-bold mb-4">종목소개 영상</h2>
                <a
                    href="https://www.youtube.com/watch?v=2gaPvLvfmy8"
                    className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-100 mb-8 inline-block"
                >
                    소개영상 바로가기
                </a>

                <h2 className="text-2xl font-bold mb-4">응시자격</h2>
                <p className="mb-8">제한없음(단, 실기 시험은 필기 합격 후 2년 이내 있는 실기 시험 응시 가능)</p>

                <h2 className="text-2xl font-bold mb-4">시험과목</h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">등급</th>
                                <th className="px-4 py-2">시험방법</th>
                                <th className="px-4 py-2">시험과목</th>
                                <th className="px-4 py-2">출제형태</th>
                                <th className="px-4 py-2">시험시간</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2" rowSpan={2}>
                                    단일등급
                                </td>
                                <td className="border px-4 py-2">필기시험</td>
                                <td className="border px-4 py-2">
                                    경영정보 일반
                                    <br />
                                    데이터 해석 및 활용
                                    <br />
                                    경영정보시각화 디자인
                                </td>
                                <td className="border px-4 py-2">객관식 60문항</td>
                                <td className="border px-4 py-2">60분</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2">실기시험</td>
                                <td className="border px-4 py-2">경영정보시각화 디자인 실무</td>
                                <td className="border px-4 py-2">컴퓨터 작업형</td>
                                <td className="border px-4 py-2">70분</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">2024년 실기시험 프로그램 버전 안내</h2>
                <ul className="list-disc list-inside mb-8">
                    <li>파워BI 데스크탑 : 버전 2.124.1554.0 / 배포일자(2024.1.8.)</li>
                    <li>태블로 데스크탑 : 버전 2023.3.1 / 배포일자(2024.1.10.)</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">합격결정기준</h2>
                <p className="mb-4">필기 : 매과목 100점 만점에 과목당 40점 이상이고 평균 60점 이상</p>
                <p className="mb-8">실기 : 100점 만점에 70점 이상</p>

                <h2 className="text-2xl font-bold mb-4">수험료</h2>
                <p className="mb-4">필기 : 22,000원</p>
                <p className="mb-8">실기 : 45,000원</p>

                <h2 className="text-2xl font-bold mb-4">시험시작시간</h2>
                <p className="mb-4">필기시험 입실마감시간</p>
                <ul className="list-disc list-inside mb-4">
                    <li>09:00</li>
                </ul>
                <p className="mb-4">필기시험시간</p>
                <ul className="list-disc list-inside mb-4">
                    <li>09:15~10:15(60분)</li>
                </ul>
                <p>실기시험시간은 추후 안내예정</p>
            </div>
        </Layout>
    );
};

export default Introduce;
