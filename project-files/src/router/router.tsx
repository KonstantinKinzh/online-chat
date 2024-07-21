import { Fragment } from "react/jsx-runtime";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "@/pages/login";
import { Registration } from "@/pages/registration";
import { Chat } from "@/pages/chat";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },

    {
        path: "/registration",
        element: <Registration />
    },

    {
        path: "/chat",
        element: <Chat />
    }
]);

export function Router() {
    return (
        <Fragment>
            <RouterProvider router={router} />
        </Fragment>
    );
};