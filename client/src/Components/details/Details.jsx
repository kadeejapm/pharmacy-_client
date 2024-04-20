import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



function Details (){

const {name} = useParams()

    return(
        <>
        <Header/>
        <div>
            <h1 className="text-[30px] text-center">Details</h1>

            {name}


        </div>
        <Footer/>

      
        </>
    )
}
export default Details