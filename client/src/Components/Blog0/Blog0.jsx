import React from "react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { errorToast } from "../Toast";

function Blog0(){

    const [category,setCategory] = useState([])
    useEffect(() => {
    fetchdata()
    }, [])
    
           const fetchdata = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/admin/getall-category')
    
          setCategory(response.data.result)
    
               } catch (error) {
                 errorToast(error.response.data.message,'error')
               }
        };


    return(
        <>
          

        <div className="flex bg-white justify-center gap-6 font-medium border-spacing-1 border-black text-black">
{category.map((item)=>{
    return(
        <Link to={`/Details/painrelief`}>
        <p>{item.name}</p>
    </Link>

    )
})}
           
        </div>
        </>

    )
}
export default Blog0