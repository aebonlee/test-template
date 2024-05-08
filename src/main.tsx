import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RecoilRoot>
        <RouterProvider router={router} />
    </RecoilRoot>
);
