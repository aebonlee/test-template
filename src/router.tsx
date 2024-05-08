import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Introduce from "./pages/About/Introduce.tsx";
import Gallery from "./pages/Services/Gallery.tsx";
import Board from "./pages/Services/Board.tsx";
import Notice from "./pages/Services/Notice.tsx";
import ExamSchedule from "./pages/About/ExamSchedule.tsx";
import Classroom from "./pages/OnlineClassrooms/Classroom.tsx";
import Lab from "./pages/OnlineLearningLab/Lab.tsx";
import Examinationcriteria from "./pages/About/Examinationcriteria.tsx";
import Registration from "./pages/About/Registration.tsx";
import Exam from "./pages/MyCourses/Exam.tsx";
import ExamResult from "./pages/MyCourses/ExamResult.tsx";
import MyLearningHistory from "./pages/MyCourses/MyLearningHistory.tsx";
import Archive from "./pages/Services/Archive.tsx";
import FAQ from "./pages/Services/FAQ.tsx";
import Qna from "./pages/Services/Qna.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/introduce",
        element: <Introduce />,
    },
    {
      path: "/exam-schedule",
      element: <ExamSchedule />,
    },
    {
      path: "/exam-creiteria",
      element: <Examinationcriteria />,
    },
    {
        path: "/registration",
        element: <Registration />,
    },
    {
        path: "/exam",
        element: <Exam />,
    },
    {
        path: "/exam-result",
        element: <ExamResult />,
    },
    {
        path: "/my-course",
        element: <MyLearningHistory />,
    },
    {
        path: "/archive",
        element: <Archive />,
    },
    {
        path: "/faq",
        element: <FAQ />,
    },
    {
        path: "/qna",
        element: <Qna />,
    },
    {
        path: "/board",
        element: <Board />,
    },
    {
        path: "/notice",
        element: <Notice />,
    },
    {
        path: "/gallery",
        element: <Gallery />,
    },
    {
        path: "/online-classroom",
        element: <Classroom />,
    },
    {
        path: "/online-learning-lab",
        element: <Lab />,
    },
]);