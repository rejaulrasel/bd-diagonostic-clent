import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appointments from "../../Pages/Appointments/Appointments/Appointments";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/signup',
                element : <SignUp></SignUp>
            },
            {
                path : '/appointments',
                element : <Appointments></Appointments>
            },
        ]
    }
])

export default router;