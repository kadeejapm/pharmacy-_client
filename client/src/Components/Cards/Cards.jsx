import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import CardProduct from '../CardProducts/CardProducts';

function Cards ()  {


    const data1=[
        {
            img:"src/assets/images/foley catheter.png",
            para:"Foley Catether",
            para1:"12.90"
        },
        {
            img:"https://media.seniority.in/catalog/product/cache/242b55c74bcaf9102cfc5599e255893a/m/c/mcp-ad801-ir_1.jpg",
            para:"Thermometer",
            para1:"$8.98"
        },
        {
            img:"https://physicaltherapyreviewer.files.wordpress.com/2014/09/nrb.jpg",
            para:" breath mask",
            para1:"$5.87"
        },
        {
            img:"https://5.imimg.com/data5/SELLER/Default/2020/11/BK/HE/CA/7318943/maxiocel-10x10jpg.jpg",
            para:"Wound dressing",
            para1:"$25.75"
        }
    ]






 return (
    <div className=''>
        <div className='flex justify-between'>
            <h2 className='font-extrabold text-green-600'>New Products</h2>
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
                        <CardProduct img={item.img}  name={item.para} para={item.para1} />

                      </div>

                        </>
                    )
                })
            }
        </div>



    </div>



  )
}

export default Cards