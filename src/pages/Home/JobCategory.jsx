import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import CategoryCard from "./CategoryCard";

const JobCategory = () => {

    const [categoryData, setCategoryData] = useState([])
    useEffect(() => {
        axios.get('/category.json')
            .then(data => setCategoryData(data.data))
    }, [])
    console.log(categoryData)


    return (
        <div className="space-y-16 ">


         <div className="text-center space-y-2">
           <h2 className="text-4xl font-black">Job Category List</h2>
           <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
         </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10" >

                {
                    categoryData.map((data, i) => <CategoryCard key={i} data={data} />)
                }

            </div>

        </div>
    );
};

export default JobCategory;