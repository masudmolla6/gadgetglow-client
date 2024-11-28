import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import App from "../App";
import Contact from "../pages/Home/Contact/Contact";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <App></App>
            },
            {
                path: "/contact",
                element:<Contact></Contact>
            },
            {
                path: "/login",
                element:<LogIn></LogIn>
            },
            {
                path: "/signup",
                element:<SignUp></SignUp>
            }
        ]
    }
])

export default router;