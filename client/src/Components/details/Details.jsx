import React from "react";
import { useParams } from "react-router-dom";



function Details (){

const {name} = useParams()

    return(
        <>
        <div>
            <h1 className="text-[30px] text-center">Details</h1>

            {name}


        </div>

      
        </>
    )
}
export default Details