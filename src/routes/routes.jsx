import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import App from "../App";
import Contact from "../pages/Home/Contact/Contact";

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
            }
        ]
    }
])

export default router;