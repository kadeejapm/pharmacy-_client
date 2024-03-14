import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import TopProduct from '../TopProduct/TopProduct';



function Top ()  {


    const data1=[
        {
            Timg:"src/assets/images/bed1.png",
            Tpara:"Hospital Bed",
            Tpara1:"$190.90"
        },
        {
            Timg:"src/assets/images/stick.png",
            Tpara:"Walker Mobility",
            Tpara1:"$12.98"
        },
        {
            Timg:"src/assets/images/wheel.png",
            Tpara:" WheelChair",
            Tpara1:"$30.87"
        },
        {
            Timg:"src/assets/images/stickyy.png",
            Tpara:"Crutches",
            Tpara1:"$24.75"
        }
    ]






 return (
    <div className=''>
        <div className='flex justify-between'>
            <h2 className='font-extrabold text-green-600'>Top Products</h2>
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
                        <TopProduct Timg={item.Timg}  Tpara={item.Tpara} Tpara1={item.Tpara1} />

                      </div>

                        </>
                    )
                })
            }
        </div>



    </div>



  )
}

export default Top
