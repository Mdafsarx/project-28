import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const JobCard = ({ JobData }) => {

    const { logo, job_title, company_name, location, salary, id } = JobData || {};

    const nav = useNavigate()

    return (

        <div className="card-compact  bg-base-100 shadow-xl p-6 space-y-4 rounded-2xl border-2 ">

            <figure><img src={logo} alt="Shoes" className="h-24 w-32" /></figure>

            <div className="space-y-4">
                <h2 className="card-title font-bold">{job_title}</h2>
                <p>{company_name}</p>

                <div className="flex items-center gap-4">
                    <button className="btn btn-outline btn-sm btn-primary">Remote</button>
                    <button className="btn btn-outline btn-sm btn-primary">Full Time</button>
                </div>

                <div className="flex items-center gap-8">

                    <div className="flex items-center gap-2 ">
                        <p>{location}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <p>Salary:{salary}</p>
                    </div>

                </div>
                <button className="btn btn-primary text-white w-28" onClick={() => nav(`/jobDetails/${id}`)}>View Details</button>
            </div>
        </div>
    )
}

export default JobCard;