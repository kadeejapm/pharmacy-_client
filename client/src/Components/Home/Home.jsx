import React from "react";
import Blog1 from "../Blog1/Blog1";
import Blog0 from "../Blog0/Blog0";
import Minicard from "../Minicard/Minicard";
import NewProduct from "../Cards/Cards";
import Poppular from "../NewProduct/NewProduct";
import Banner from "../Banner/Banner";
import Top from "../Top/Top";
import SecondCard from "../SecondCard/SecondCard";
import Medical from "../Medical/Medical";
import Upcoming from "../Upcoming/Upcoming";
import Blog3 from "../Blog3/Blog3";
import Blog4 from "../Blog4/Blog4";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Successfull from "../Payment/Successfull";


function Home(){
    return(
        <>

        <Header/>
         <div className="">
            <Blog0/>
        </div>

        <div className="">
            <Blog1/>
        </div>

        <div className="">
            <Minicard/>

        </div>

        <div className="">
            {/* new product */}
            <NewProduct/>

        </div>

        <div className="">
            {/* poppular */}
            <Poppular/>

        </div>

        <div className="">
            <Banner/>

        </div>

        <div className="">
            <Top/>

        </div>

        <div className="">
            <SecondCard/>

        </div>

        <div className="">
            <Medical/>

        </div>

        <div className="">
            <Upcoming/>

        </div>

        <div className="">
            <Blog3/>

        </div>

        <div claBlog4ssName="">
            <Blog4/>

        </div>

        <div claBlog4ssName="">
            {/* <Successfull/> */}

        </div>
        
        <Footer/>

       

        </>
    )
}
export default Home