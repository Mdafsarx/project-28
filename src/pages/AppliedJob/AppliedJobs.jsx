import { getData } from "../../utils/localStorage";
import AppliedCard from "./AppliedCard";

const AppliedJobs = () => {
    const LocalData=getData()
    console.log(LocalData)
    return (

        <div className="space-y-10 my-14">
           
           {
            LocalData.map((Data,i)=><AppliedCard Data={Data} key={i}></AppliedCard>)
           }

        </div>

    );
};

export default AppliedJobs;