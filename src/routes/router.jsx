import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error";
import Home from "../pages/Home";
import MultiStepForm from "../components/Forms/MultiStepForm";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : '/touch-to-funded',
                element : <MultiStepForm/>
            },
            {
                path : "*",
                element : <Error/>
            }
        ]

    }
])

export default router;