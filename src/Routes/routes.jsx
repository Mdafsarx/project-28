import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/Job/JobDetails";
import AppliedJobs from "../pages/AppliedJob/AppliedJobs";
import Login from "../pages/Login";
import Singup from "../pages/Singup";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/AppliedJobs',
          element:<AppliedJobs></AppliedJobs>
        },
        {
          path:'/jobDetails/:id',
          element:<JobDetails></JobDetails>,
          loader:()=>fetch('./f.json')

        },
        {
          path:'/Login',
          element:<Login/>
        },
        {
          path:'/SingUp',
          element:<Singup/>
        }
      ]
    },
  ]);

export default router