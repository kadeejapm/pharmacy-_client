import React from 'react'
import { CiBadgeDollar } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaUserDoctor } from "react-icons/fa6";
import { LuStethoscope } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";

function Minicard  ()  {

const data=[
{

    icon:<CiBadgeDollar />,
    para:"Get 25%",
    para1:"OFF",
    style:"bg-green-200"
},
{

    icon:<CiDeliveryTruck />,
    para:"Free home",
    para1:"Delivery",
    style:"bg-amber-200"
},
{

    icon:<FaUserDoctor />,
    para:"Doctor's ",
    para1:"Appointment",
    style:"bg-lime-200"
},
{

    icon:<LuStethoscope />,
    para:"Health",
    para1:"Advice",
    style:"bg-violet-200"
}


]


  return (
    <div className='flex justify-evenly mt-8 mb-8 flex-col sm:flex-row md:flex-row '>
        {
            data.map((item)=>{
               return (
                <>
                <div className = { `flex justify-evenly gap-4 items-center py-5 px-10 rounded-lg max-[612px]:mb-3  ${item.style}`}>
                <div>
                    <i className='text-2xl'>{item.icon}</i>
                </div>
                <div>
                    <p className='font-bold'> {item.para}<span><br/>{item.para1}</span></p>
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

export default Minicard
