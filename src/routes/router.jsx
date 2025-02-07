import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error";
import Home from "../pages/Home";
import MultiStepForm from "../components/Forms/MultiStepForm";
import MultiStepFormAllComponents2 from "../components/MultiStepForm2";
import Message from "../components/Message/Message";

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
                path : "/second-step",
                element : <MultiStepFormAllComponents2/>
            },
            {
                path : "/message",
                element : <Message/>
            },
            {
                path : "*",
                element : <Error/>
            }
        ]

    }
])

export default router;