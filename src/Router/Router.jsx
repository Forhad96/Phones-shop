import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import PhoneDetails from "../pages/PhoneDetails/PhoneDetails";


const myCreatedRouter = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('/phones.json'),

            },
            {
                path:'/phoneDetails/:id',
                element:<PhoneDetails></PhoneDetails>
            }
        ]
    }
])

export default myCreatedRouter;