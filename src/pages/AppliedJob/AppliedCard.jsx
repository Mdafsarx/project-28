/* eslint-disable react/prop-types */
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { CiDollar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";


const AppliedCard = ({ Data }) => {

    const { logo, company_name, job_type, location, salary, remote_or_onsite, job_title } = Data || {}
    return (
        <div>
            <Card className="w-full  flex-row p-5 border-2 border-black">

                <CardHeader
                    shadow={false}
                    floated={false}
                    className="m-0 flex items-center shrink-0 rounded-r-none"
                >
                    <img
                        src={logo}
                        className="md:h-full object-cover "
                    />
                </CardHeader>

                <CardBody className=" flex flex-col md:flex-row md:items-center justify-between w-full space-y-4">

                    <div className="space-y-4">
                        <Typography variant="h4" color="blue-gray" className="">
                            {job_title}
                        </Typography>

                        <Typography color="gray" className=" font-normal">
                            {company_name}
                        </Typography>


                        <div className="flex items-center gap-4">
                            <button className="btn btn-primary btn-outline">{remote_or_onsite}</button>
                            <button className="btn btn-primary btn-outline">{job_type}</button>
                        </div>

                        <div className="flex items-center gap-6">
                            <p className="flex flex-col md:flex-row items-center gap-1"><IoLocationOutline className="text-2xl"></IoLocationOutline>{location}</p>
                            <p className="flex flex-col md:flex-row items-center gap-1"><CiDollar className="text-2xl"></CiDollar>{salary}</p>
                        </div>
                    </div>

                    <div>
                        <button className="btn btn-primary">View details</button>
                    </div>

                </CardBody>
            </Card>
        </div>
    );
};

export default AppliedCard;