import { createBrowserRouter } from "react-router-dom";
import TermsOfUse from "../common/footer/TermsOfUse.jsx";
import DisplayError from "../error/DisplayError.jsx";
import Main from "../main/Main";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/terms-of-use',
                element: <TermsOfUse />
            },
        ]
    }
])