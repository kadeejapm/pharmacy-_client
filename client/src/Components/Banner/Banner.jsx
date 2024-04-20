import axios from "axios";
import React, { useEffect, useState } from "react";



function Banner() {

    const [Banner, setBanner] = useState([]);
    useEffect(() => {
        fetchdata();
    }, []);





    const fetchdata = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/admin/getall-Banner')
            console.log(response, "Banner");

            setBanner(response.data.result)

        } catch (error) {
            errorToast(error.response.data.message, 'error')
        }
    }




    return (
      
        <div className="flex ">
        {
            Banner.map((item)=>{
                return(
                    <>
                    <div className="py-5 sm:py-1 text-left ms-4 mt-5">
                        <p className="bg-green-900 text-white w-20 text-center rounded-lg p-5">

                        </p>
                        <p className="text-lg sm:text-2xl font-bold">{item.name}</p>
                        <p className="text-sm sm:text-lg">{item.description}</p>
                        <p className="font-thin line-through">{item.cost}</p>
                        <p className="font-semibold">{item.details}
                            <span className="font-thin">Including Tax</span>
                        </p>

                    </div>

                    <div className="">
                        <img src={item.image} alt="" className="w-[40vh] sm:w-[350px]" />

                    </div>
                </>


                    
                )
            })
        }
            
                
                       

                    
              


            {/* <div className=' flex bg-white m-16 h-fit-content  justify-around items-center md:flex-row  flex-col '>
                      
                            <div className='bg-blue-100'>
                            <button className={` bg-green-600 flex gap-2 text-white border-[2px] border-black-100 p-2 rounded font-bold mt-5  mb-6`}>25% OFF</button>
                            <div className="flex">
                                <img src="src/assets/images/black oil 2.png" alt="" width="100px" height="100px"  />
                            </div>
                            <h1 className='text-black font-bold text-[48px]'>BLACK GARLIC OIL</h1>
                            <p className='text-black font-bold mt-5'>Stronger and Thicker <br />Hair With Black Garlic <br />Oil.</p>
                            <p className="line-through">$50.00</p>
                            <h2 className="text-black font-extrabold">$37.00 Including Tax</h2>
        
                        </div> */}

                  
                
                
                


                {/* div 2 dental */}


                {/* <div className=" bg-orange-50 h-fit-content m-16 justify-around items-center md:flex-row  flex-col">

                    <div className="">
                        <button className='  bg-green-600 flex gap-2 text-white border-[2px] border-black-100 p-2 rounded font-bold mt-5  mb-6'>25% OFF</button>
                        <div className="flex">
                            <img src="src/assets/images/luisbeem.png" alt="" width="100px" height="100px" />
                        </div>
                        <p className='text-black font-normal text-[48px] mt-5'>Dental care set for Vivid <br />and Bright Smiles</p>
                        <p className="line-through">$33.90</p>
                        <h2 className="text-black font-normal">$22.90 Including Tax</h2>

                    </div> */}


                    {/* div-3  cream*/}



                {/* </div> */}
                {/* <div className=" bg-green-50 h-fit-content m-10  justify-around items-center md:flex-row  flex-col">

                    <button className='  bg-green-600 flex gap-2 text-white border-[2px] border-black-100 p-2 rounded font-bold mt-5  mb-6'>25% OFF</button>
                    <div className="flex">
                        <img src="src/assets/images/banana.png" alt="" width="100px" height="100px" />
                    </div>
                    <p className='text-black font-sans  text-[48px] mt-5'>BANANA FLAVOURED<br />TOOTHPASTE</p>
                    <p className="line-through">$68.00</p>
                    <h2 className="text-black font-normal">$37.00 Including Tax</h2>
                </div> */}

            {/* </div> */}

        </div>
    )

}
export default Banner