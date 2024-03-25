import { getData } from "../../utils/localStorage";
import AppliedCard from "./AppliedCard";
import not from '../../assets/images/connection-lost-3498366_1280.png'
import { useState } from "react";

const AppliedJobs = () => {


    let LocalData = getData();
    const [filterData, setData] = useState([]);
    const [isClick,setClick]=useState(false)

    const handleFilter = (filter) => {

         setClick(true)
        if (filter === 'All') {setData(LocalData)}

        else if(filter === 'Remote'){

            const filterData=LocalData.filter((data)=>data.remote_or_onsite==='Remote')
            setData(filterData)
        }

        else if(filter === "Onsite"){
            const OnsiteData=LocalData.filter((data)=>data.remote_or_onsite==='Onsite')
            setData(OnsiteData)
        }

       


    }

     



    return (

        <>
            {
                LocalData.length === 0 ? <div className="flex justify-center items-center my-10 ">

                    <div className="space-y-4 flex justify-center flex-col items-center">
                        <img src={not} alt="" className="w-1/3" />
                        <h3 className="text-3xl text-red-800 font-bold">You could'not add any thing</h3>
                    </div>

                </div>

                    :

                    <div>

                        <div className="mt-2">
                            <details className="dropdown">
                                <summary className="m-1 btn">Filter</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li onClick={() => handleFilter('All')}><a>All</a></li>
                                    <li onClick={() => handleFilter('Remote')}><a>Remote</a></li>
                                    <li onClick={() => handleFilter('Onsite')}><a>Onsite</a></li>
                                </ul>
                            </details>
                        </div>

                        <div className="space-y-10 my-14">

                            {
                                isClick ? 

                                filterData.map((Data, i) => <AppliedCard Data={Data} key={i}></AppliedCard>)

                                :

                                LocalData.map((Data, i) => <AppliedCard Data={Data} key={i}></AppliedCard>)
                            }

                        </div>

                    </div>

            }


        </>

    );
};

export default AppliedJobs;