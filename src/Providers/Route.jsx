import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import DocTorProfile from "../Pages/DocTorProfile";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signUp',
        element: <SignUp />
    },
    {
        path: '/doctorsProfiles/:id',
        element: <DocTorProfile />,
        loader: ({ params }) => fetch(`http://localhost:5000/doctorsProfiles/${params.id}`)
    }
]);


export default router;