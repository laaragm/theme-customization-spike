import { lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";

import { PATHS } from "./paths";
import { Loadable } from "@/components";

const Home = Loadable(lazy(() => import("../pages/home")));

export const router = createBrowserRouter([
    {
        element: <Outlet />,
        children: [
            {
                path: PATHS.home.route,
                element: Home,
            },
        ],
    },
]);
