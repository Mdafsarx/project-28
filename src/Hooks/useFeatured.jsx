import axios from "axios";
import { useEffect, useState } from "react";

const useFeatured = () => {

      const [data,setData]=useState([])

      useEffect(()=>{
        axios.get('/f.json').then((data)=>setData(data.data))
      },[])



    return [data]
};

export default useFeatured;