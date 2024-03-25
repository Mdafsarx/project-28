import { Button } from "@material-tailwind/react";
import useFeatured from "../../Hooks/useFeatured";
import JobCard from "./JobCard";
import { useState } from "react";

const FeaturedJobs = () => {
    const [Data] = useFeatured()
    const [Show,setShow]=useState(4)


    return (
        <div className="space-y-14">
            {/* featured title */}
            <div className="text-center space-y-3">
                <h3 className="text-4xl font-black">Featured Jobs</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            {/* feature jobs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                {
                    Data.slice(0, Show).map((JobData, index) => <JobCard key={index} JobData={JobData}></JobCard>)
                }
            </div>
            <div className="flex justify-center">

                <Button variant="" color="blue" className={'flex items-center gap-2'} onClick={(e)=>{setShow(Data.length)
                e.target.classList.add('hidden')
                }}>
                    See All Jobs
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                    
                </Button>

            </div>
        </div>
    );
};

export default FeaturedJobs;