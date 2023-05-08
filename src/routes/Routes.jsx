import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home/Home";
import Main from "../layoutes/Main";


const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])

export default router;