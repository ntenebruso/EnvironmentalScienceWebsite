import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "@fontsource-variable/inter";

const router = createBrowserRouter([
    {
        path: "/",
        async lazy() {
            const component = await import("./pages/index");
            return { Component: component.default };
        },
    },
    {
        path: "/about",
        async lazy() {
            const component = await import("./pages/about");
            return { Component: component.default };
        },
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
