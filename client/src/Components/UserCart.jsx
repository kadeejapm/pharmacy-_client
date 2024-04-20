import { Card, ListItem } from '@mui/material'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Context from './Context/Context'




function UserCart() {

    let totalAmount = 0

    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata = async()=>{
        try {
            const response = await axios.get(`http://localhost:3000/api/Cart/${localStorage.getItem("id")}`)

      setCart(response.data.result)

           } catch (error) {
             errorToast(error.response.data.message,'error')
           }
    }




    const [result, setResult] = useState([])
    // const { carts, refresh, setRefresh } = useContext(Context)
    // console.log(carts, 'va;uess');

    const handleIncrementQuantity = async (id) => {
        try {
            const response = await axios.post(`http://localhost:3000/api/cart/increment-cart/${JSON.parse(localStorage.getItem("user"))._id}/${id}`)

            setRefresh(!refresh)
        } catch (error) {
            console.log(error);
        }
    }
    const handleDescrementQuantity = async (id) => {
        try {
            const response = await axios.post(`http://localhost:3000/api/cart/decrement-cart/${JSON.parse(localStorage.getItem("user"))._id}/${id}`)
            setRefresh(!refresh)
        } catch (error) {
            console.log(error);
        }
    }
    const handleRemoveQuantity = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/cart/remove-cart/${JSON.parse(localStorage.getItem("user"))._id}/${id}`)
            console.log(response.data,"ttt");
            setData(response.data.data);
            setData(response.data.data);
            setRefresh(!refresh)

        } catch (error) {
            console.log(error);
        }
    }

    return(

    <div className='flex gap-1 justify-center'>
        <div className=''>
            <div className='bg-custom-plum-light h-full w-11/12 my-4 border-2  mb-5'>
                <div className='flex justify-center'>
                    <h1 className='text-4xl text-custom-plum-dark'>Your Cart</h1>
                </div>
                <div className='grid grid-cols-3 overflow-scroll gap-4 ml-3 items-center justify-center'>
                    {
                       cart.map((item) => {
                            console.log(item, 'total');
                            totalAmount = totalAmount + (item.product.price * item.quantity)
                            return (
                                <Card className='mt-4 '>
                                    <div className=''>
                                        <div className='bg-purple-100 w-32 h-36 rounded-md '>
                                            <img src={item.product.image} className='h-28 w-20 flex justify-center items-center ' />
                                        </div>
                                        <div className=''>
                                            <p className='flex items-center ml-3 rounded-sm'>{item.product.pdtname}</p>
                                            <p className='flex items-center ml-3 rounded-sm'>{item.product.price * item.quantity}</p>
                                        </div>
                                        <div className='bg-custom-gray-dark ml-3 flex items-center justify-center  rounded-md gap-3 w-32'>
                                            <button className='hover:underline' onClick={() => handleRemoveQuantity(item.productId)}><i class="fa-solid fa-trash"></i></button>

                                            <button onClick={() => handleIncrementQuantity(item.productId)} className='font-bold'  >+</button>{item.quantity} <p />
                                            <button onClick={() => handleDescrementQuantity(item.productId)} className={`font-bold ${item.quantity === 1 ? 'cursor-not-allowed' : 'cursor-pointer'} `} >-</button>
                                        </div>
                                    </div>


                                </Card>

                            )
                        })
                    }


                </div>
            </div>
        </div >
        <div className='bg-custom-redpurple-dark h-96 w-96  my-4 border-2   '>
            <div className='flex justify-center'>
                <h1 className='text-4xl text-custom-plum-dark'>Order Summary</h1>
                <p className='font-bold p-2'>{cart.length} ITEMS</p>
            </div>
            <div className='ml-5'>
                <div className='my-4 '>
                    <h1 className='text-2xl font-semibold'>Price Details</h1>
                </div>
                <div className='flex  gap-48 font-light '>
                    <p className='text-sm'>Bag MRP(2 items)</p>
                    <p className='text-sm'>price</p>
                </div>
                <div className='flex gap-64 '>
                    <p className='font-semibold'>{totalAmount}</p>
                    <p className=''>total {'totalAmount'} </p>
                    {/* {console.log(totalAmount, 'ttt')} */}
                </div>
            </div>
            <div className='border-b-2 mt-10 border-slate-300'>

            </div>
            <div className='mt-5 flex justify-around'>
                <p className=''>Grand total</p>
                <Link to={'/shipping-address'} state={{totalAmount}}>
              <button className='bg-pink-900 hover:bg-pink-700 text-white rounded-md px-5 py-2 m-16 text-xs sm:text-base'>
                PLACE ORDER
              </button>
            </Link>
            </div>
        </div>

    </div >
        
    )
}

export default UserCart
