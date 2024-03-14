import React from "react";
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { Outlet} from "react-router-dom"

function UserLayout (){
    return(
        <div>
            <div className="header">
                <Header/>
            </div>
            <div className="outlety">
                <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
           
            
        </div>
    )
}

export default UserLayout