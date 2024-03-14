import React from "react";
import { Link } from "react-router-dom";

function Blog0(){
    return(
        <>

        <div className="flex bg-white justify-around font-medium border-spacing-1 border-black text-black">

            <Link to={`/Details/${'Pain relief'}`}>
                <p>Pain Relief</p>
            </Link>

            <Link to={`/Details/${'Cold and Flu'}`}>
                <p>Cold and Flu</p>
            </Link>
             
             
            <Link to={`/Details/${'diabetes care'}`}>
                <p>Diabetes Care</p>
            </Link>
            

            <Link to={`/Details/${'Digestive Health'}`}>
                <p>Digestive Health</p>
            </Link>

            <Link to={`/Details/${'First Aid'}`}>
                <p>First Aid</p>
            </Link>

            <Link to={`/Details/${'Skin Care'}`}>
                <p>Skin Care</p>
            </Link>

            <Link to={`/Details /${'Health Care'}`}>
                <p>Health Care</p>
            </Link>

            <Link to={`/Details /${'Eye and Ear Care'}`}>
                <p>Eye and Ear Care</p>
            </Link>

            <Link to={`/Details /${'respiratory care'}`}>
                <p>Respiratory Care</p>
            </Link>


        </div>
        </>

    )
}
export default Blog0