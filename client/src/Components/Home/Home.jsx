import React from "react";
import Blog1 from "../Blog1/Blog1";
import Blog0 from "../Blog0/Blog0";
import Minicard from "../Minicard/Minicard";
import Cards from "../Cards/Cards";
import NewProduct from "../NewProduct/NewProduct";
import BlackOil from "../BlackOil/BlackOil";
import Top from "../Top/Top";
import SecondCard from "../SecondCard/SecondCard";
import Medical from "../Medical/Medical";
import Upcoming from "../Upcoming/Upcoming";
import Blog3 from "../Blog3/Blog3";
import Blog4 from "../Blog4/Blog4";


function Home(){
    return(
        <>
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
            <Cards/>

        </div>

        <div className="">
            <NewProduct/>

        </div>

        <div className="">
            <BlackOil/>

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

        <div className="">
            <Blog4/>

        </div>
        


       

        </>
    )
}
export default Home