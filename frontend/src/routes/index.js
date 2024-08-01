import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "../App";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const SignUp = lazy(() => import("../pages/SignUp"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: "login",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Login />
                    </Suspense>
                ),
            },
            {
                path: "forgot-password",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ForgotPassword />
                    </Suspense>
                ),
            },
            {
                path: "signup",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <SignUp />
                    </Suspense>
                ),
            },
        ],
    },
]);

export default router;