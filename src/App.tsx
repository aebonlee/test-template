import "./App.css";
import Layout from "./components/Layout";

function App() {
    return (
            <Layout>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 p-4">
                        <h1 className="text-4xl lg:text-5xl font-semibold mb-6 max-w-sm lg:max-w-md mt-14 break-keep">경영정보시각화능력</h1>
                        <p className="text-gray-600 text-lg mb-10 max-w-lg break-keep">
						기업의 내외부 정보를 시각화 요소들을 사용하여 효과적으로 표현하고 전달하는 역량을 평가하는 국가기술자격입니다. 컴활에 이은 사무 필수 자격증
                        </p>
                        <div className="flex items-center gap-6 flex-wrap">
                            <a
                                className="h-16 inline-flex items-center justify-center py-4 px-6 rounded-full bg-orange-500 border border-orange-600 shadow font-bold font-heading text-white hover:bg-orange-600 focus:ring focus:ring-orange-200 transition duration-200"
                                href="#"
                            >
                                Get Started
                            </a>
                            <div className="border border-gray-100 rounded-lg px-3 py-2 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10" fill="none">
                                    <circle cx={5} cy={5} r={5} fill="#FF7100" />
                                </svg>
                                <p className="text-xs">
                                    <span className="font-semibold">1236 </span>
                                    <span />
                                    <span className="text-gray-700">Online</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 p-4">
                        <img className="lg:ml-auto" src="https://kaiser6.mycafe24.com/theme/info/img/visual01.jpg" alt="" />
                    </div>
                </div>
            </Layout>
    );
}

export default App;
