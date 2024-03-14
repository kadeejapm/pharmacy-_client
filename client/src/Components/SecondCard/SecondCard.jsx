import React from 'react'
import { IoPersonAdd } from "react-icons/io5";
import { LiaAwardSolid } from "react-icons/lia";
import { BsPersonSquare } from "react-icons/bs";
import { MdReviews } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";


function SecondCard  ()  {

const data=[
{

    icon:<IoPersonAdd />,
    para01:"14K+",
    para02:"Orders",
    para03:"Completed",
    style:"bg-green-100"
},
{
    icon:<LiaAwardSolid />,
    para01:"250+",
    para02:"Won",
    para03:"Awards",
    style:"bg-orange-200"

   
},
{

    icon:<BsPersonSquare />,
    para01:"8K+",
    para02:"Happy",
    para03:"Customers",
    style:"bg-blue-100"
},
{
    icon:<MdReviews />,
    para01:"12K+",
    para02:"Positive",
    para03:"Reviews",
    style:"bg-red-100"

   
},



]


  return (
    <div className='flex justify-evenly mt-8 mb-8 flex-col sm:flex-row md:flex-row '>
        {
            data.map((item)=>{
               return (
                <>
                <div className = { `flex justify-evenly font-bold text-2xl gap-3 items-center py-5 px-10 rounded-3xl max-[612px]:mb-3 ${item.style}`}>
                <div>
                    <i className='text-2xl'>{item.icon}</i>
                </div>
                <div>
                    <p className='font-bold'> {item.para01}<span><br/>{item.para02}</span></p>{item.para03}
                </div>
              
                <IoIosArrowForward />

                </div>


                </>
               )
            })
        }

    </div>


  )
}

export default SecondCard
