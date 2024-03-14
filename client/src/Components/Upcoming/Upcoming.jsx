import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import UpcomingPro from '../UpcomingPro/UpcomingPro';



function Upcoming ()  {


    const data1=[
        {
            Uimg:"src/assets/images/foley catheter.png",
            Uname:"Wound Dressing ",
            Upara:"12.90"
        },
        {
            Uimg:"https://media.seniority.in/catalog/product/cache/242b55c74bcaf9102cfc5599e255893a/m/c/mcp-ad801-ir_1.jpg",
            Uname:"IV Catheter",
            Upara:"$8.98"
        },
        {
            Uimg:"https://physicaltherapyreviewer.files.wordpress.com/2014/09/nrb.jpg",
            Uname:"Pressure Cuff",
            Upara:"$5.87"
        },
        {
            Uimg:"https://5.imimg.com/data5/SELLER/Default/2020/11/BK/HE/CA/7318943/maxiocel-10x10jpg.jpg",
            Uname:"Chest Tube",
            Upara:"$25.75"
        }
    ]






 return (
    <div className=''>
        <div className='flex justify-between'>
            <h2 className='font-extrabold text-green-600'>Upcoming Products</h2>
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
                        <UpcomingPro Uimg={item.Uimg}  Uname={item.Uname} Upara={item.Upara} />

                      </div>

                        </>
                    )
                })
            }
        </div>



    </div>



  )
}

export default Upcoming