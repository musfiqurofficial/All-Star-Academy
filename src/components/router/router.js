import { createBrowserRouter } from "react-router-dom";
import TermsOfUse from "../common/footer/TermsOfUse.jsx";
import DisplayError from "../error/DisplayError.jsx";
import Main from "../main/Main";
import About from "../pages/about/About.jsx";
import Academics from "../pages/academics/Academics.jsx";
import Admissions from "../pages/admissions/Admissions.jsx";
import AfterSchool from "../pages/afterSchool/AfterSchool.jsx";
import Home from "../pages/home/Home";
import Parents from "../pages/parents/Parents.jsx";

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
                path: '/about',
                element: <About />
            },
            {
                path: '/academics',
                element: <Academics></Academics>
            },
            {
                path: '/admission',
                element: <Admissions></Admissions>
            },
            {
                path: '/terms-of-use',
                element: <TermsOfUse />
            },
            {
                path: '/afterschool',
                element: <AfterSchool></AfterSchool>
            },
            {
                path: '/parents',
                element: <Parents />
            },

        ]
    }
])