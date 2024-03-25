import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/Job/JobDetails";
import AppliedJobs from "../pages/AppliedJob/AppliedJobs";

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

        }
      ]
    },
  ]);

export default router