import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import MediProducts from '../MediProducts/MediProducts';


function Medical ()  {


    const data1=[
        {
            Mimg:"src/assets/images/pulse.png",
            Mname:"Sphygmomanometer",
            Mpara:"12.90"
        },
        {
            Mimg:"src/assets/images/sthesco.png ",
            Mname:"Stethoscope",
            Mpara:"$8.98"
        },
        {
            Mimg:"src/assets/images/oximeter2.png",
            Mname:"Glucometer",
            Mpara:"$5.87"
        },
        {
            Mimg:"src/assets/images/oximeter.png",
            Mname:"Pulse Oximeter",
            Mpara:"$25.75"
        }
    ]






 return (
    <div className=''>
        <div className='flex justify-between'>
            <h2 className='font-extrabold text-green-600'>Medical Products</h2>
            <div className='flex space-x-3'>
            <button className='font-bold text-green-600'>View All</button>
            <FaArrowRight/>
            </div>


        </div>

        <div className='flex flex-wrap gap-5 justify-center'>
            {
               data1.map((item)=>{
                    return(
                        <>
                      <div>
                        <MediProducts Mimg={item.Mimg}  Mname={item.Mname} Mpara={item.Mpara} />

                      </div>

                        </>
                    )
                })
            }
        </div>



    </div>



  )
}

export default Medical