import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import NewCard from '../NewCard/NewCard';


function NewProduct ()  {


    const data1=[
        {
            image:"src/assets/images/oxgyen.png",
            name1:"Oxygen Mask",
            para0:"$2.00"
        },
        {
            image:"src/assets/images/gloves.png",
            name1:"surgical Gloves",
            para0:"$18.99"
        },
        {
            image:"src/assets/images/mask.png",
            name1:"medical mask",
            para0:"$5.87"
        },
        {
            image:"src/assets/images/sanitizer.png",
            name1:"Hand Sanitizer",
            para0:"$65.00"
        }
    ]






 return (
    <div className=''>
        <div className='flex justify-between'>
            <h2 className='font-extrabold text-green-800'>Popular Products</h2>
            <div className='flex space-x-3'>
            <button className='font-extrabold text-green-600'>View All</button>
            <FaArrowRight/>
            </div>


        </div>

        <div className='flex flex-wrap gap-5 justify-center'>
            {
               data1.map((item)=>{
                    return(
                        <>
                      <div>
                        <NewCard image={item.image}  name1={item.name1} para0={item.para0} />

                      </div>

                        </>
                    )
                })
            }
        </div>



    </div>



  )
}

export default NewProduct