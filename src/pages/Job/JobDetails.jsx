import { useLoaderData, useParams } from "react-router-dom";
import JobBanner from "./JobBanner";
import { CiDollar } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { saveData } from "../../utils/localStorage";






const JobDetails = () => {
    const JobData = useLoaderData()
    const { id } = useParams()

    const singleData = JobData.find((Data) => Data.id === +id)

    const { job_description, job_responsibility, educational_requirements, experiences, salary, contact_information, job_title } = singleData || {}
    return (
        <section className=" space-y-20">


            <JobBanner></JobBanner>

            {/*job details all inforMation  */}
            <div className="grid grid-cols-7 gap-10">

                <div className="col-span-5 h-96 p-4 space-y-5">
                    <p><span className="font-bold pr-1">Job Description:</span>
                        {job_description}</p>
                    <p><span className="font-bold pr-1">Job Responsibility:</span>
                        {job_responsibility}</p>
                    <p className="flex flex-col gap-4"><span className="font-bold pr-1">Educational Requirements:</span>
                        {educational_requirements}</p>
                    <p className="flex flex-col gap-4"><span className="font-bold pr-1">Experiences:</span>
                        {experiences}</p>

                </div>



                <div className=" col-span-2 space-y-4">

                    <div className="p-4 bg-gray-100 rounded-xl">
                        <h1 className="font-bold border-b-2 border-black pb-2">Job Details</h1>

                        <div className="py-6 space-y-2">
                            <p className="flex items-center gap-1"><CiDollar className="text-2xl" /><span className="font-bold">Salary:</span>{salary}(Per mount)</p>
                            <p className="">
                                    <span className="flex items-center gap-1"><CiCalendar className="text-2xl" /><span className="font-bold">Job Title</span></span>
                                    {job_title}</p>
                        </div>


                        <div>
                            <h1 className="font-bold pb-2 border-b-2 border-black">Contact Information</h1>

                            <div className="py-6 space-y-3">
                                <p className="flex items-center gap-1"><FaPhone className="text-xl"/><span className="font-bold">Phone:</span>{contact_information.phone}</p>
                                <p className="flex items-center gap-1"><MdOutlineMailOutline className="text-2xl" /><span className="font-bold">Job Title : </span>{contact_information.email}</p>
                                <p className="">
                                    <span className="flex items-center gap-1"><IoLocationOutline className="text-2xl" /><span className="font-bold">Address</span></span>
                                    {contact_information.address}</p>
                            </div>
                        </div>
                    </div>

                    <button className="btn text-white btn-primary w-full" onClick={()=>{
                        saveData(singleData)
                    }}>Apply Now</button>

                </div>

            </div>



        </section>
    );
};

export default JobDetails;