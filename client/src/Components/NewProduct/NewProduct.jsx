import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa";





function NewProduct() {

    const [products, setProducts] = useState([])


 

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/admin/getall-products')

            setProducts(response.data.result)

        } catch (error) {

        }
    }






    return (
        <div className=''>
            <div className='flex justify-between'>
                <h2 className='font-extrabold text-green-800'>Popular Products</h2>
                <div className='flex space-x-3'>
                    <button className='font-extrabold text-green-600'>View All</button>
                    <FaArrowRight />
                </div>


            </div>

            <div className='flex flex-wrap gap-5 justify-center'>

                {
                    products.map((item) => {
                        return (
                            <>

                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  
                                        <img src={item.image} alt="" className='h-72 w-56' />
                                        <div className=''>
                                            <p className='flex justify-center items-center'>{item.name}</p>
                                            <p className='flex justify-center items-center'>{item.price}</p>

                                        </div>

                                        <div className=''>
                                        <button className="bg-green-500 py-2 w-full text-white rounded-lg text-lg">Add to Cart</button>

                                        </div>
                                  

                                   
                                </tr>
                            </>
                        )
                    })
                }

         

            </div >




        </div>



    )
}

export default NewProduct