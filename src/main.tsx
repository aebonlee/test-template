import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { router } from "./router";
import { AuthProvider } from './States/AuthContext';
declare global {
    interface Window {
        Kakao: any;
    }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RecoilRoot>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </RecoilRoot>
);
