import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card } from "@mui/material";
import axios from 'axios';
import EmptyCart from './EmptyCart';
// import  { ContextAPI } from '../../Context/Context';

function Cart() {
  const [data,setData] = useState([]);
//   const {carts,refresh,setRefresh} = React.useContext(ContextAPI)

  const { state } = useLocation();
  const item = state;


  useEffect(()=>{
    fetchdata();
  },[refresh])


  const fetchdata = async ()=>{
      try {
          const response = await axios.get(`http://localhost:3000/api/cart/listCart/${JSON.parse(localStorage.getItem("users"))._id}`)
        
          setData(response.data.data);
      } catch (error) {
        setData([]);

          console.log(error);
      }
  }

  const handleIncrementQuantity = async(id)=>{
      try {
        const response = await axios.post(`http://localhost:3000/api/cart/increment-cart/${JSON.parse(localStorage.getItem("users"))._id}/${id}`)
        
        setRefresh(!refresh)
    } catch (error) {
        console.log(error);
    }
  }

  const handleDecrementQuantity = async(id)=>{
    try {
      const response = await axios.get(`http://localhost:3000/api/cart/decrement-cart/${JSON.parse(localStorage.getItem("users"))._id}/${id}`)
    
      setRefresh(!refresh)
  } catch (error) {
      console.log(error);
  }
}

const handleRemoveQuantity = async(id)=>{
  try {
    const response = await axios.get(`http://localhost:3000/api/cart/remove-cart/${JSON.parse(localStorage.getItem("users"))._id}/${id}`)
   
    setRefresh(!refresh)

  } catch (error) {
      console.log(error);
  }
}

let totalAmount = 0;

  return (
    <>
   { carts?.length > 0 ?  
   <div className="flex flex-wrap justify-center">
      {/* cart details */}
        <div className="bg-slate-100 m-5 p-5 rounded-lg w-[350px] sm:w-[700px]">
          <div className="flex justify-between">
            <p className='font-bold text-lg'>Shopping Cart</p>
            <p className='font-bold'>{carts.length} Items</p>
          </div>
          <div className="m-3 flex flex-wrap">
            {
              data.map((item)=>{
                console.log(item, '----');
            
                totalAmount = totalAmount + (item.productInfo.price * item.quantity)
                return(
                  <>
                  <Card className='w-[300px] m-2'>
                    <div className="flex">
                      <img src={item.productInfo.mainImage} alt="" className='w-[100px] m-2'/>
                      <div className="mt-3">
                        <p>{item.productInfo.name}</p>
                        <div className="mt-3 flex justify-between p-3 gap-5 ">
                          <p className='font-bold text-xs sm:text-base'>{item.productInfo.price}</p>
                          <p className='border px-3 flex gap-3'>
                            <button className={`font-bold text-lg ${item.quantity === 1 ? 'cursor-not-allowed' : 'cursor-pointer'} `} onClick={()=>handleDecrementQuantity(item.productInfo._id)} >-</button>
                            <button className='font-bold text-xs sm:text-base'>{item.quantity}</button>
                            <button onClick={()=>handleIncrementQuantity(item.productInfo._id)}>+</button>
                          </p>

                        </div>
                          <button className='hover:underline' onClick={()=>handleRemoveQuantity(item.productInfo._id)}>delete</button>
                      </div>
                    </div>
                  </Card>
                  </>
                )
              })
            }

            <Link to={'/'}>
              <button className='text-pink-900 mt-3'><i class="fa-solid fa-arrow-left"></i> Continue Shopping</button>
            </Link>
          </div>
        </div>

        {/* cart summary */}
        <div className="bg-pink-50 m-5 p-5 rounded-lg w-[300px] sm:w-[400px]">
          <p className='font-bold text-lg p-5'>Order Summary</p>
          <p className='font-bold p-2'>{carts.length} ITEMS</p>
          <div className="flex justify-between p-2">
            <p className='font-bold text-xs sm:text-base'>Subtotal</p>
            <p className='font-bold text-xs sm:text-base'>{totalAmount}</p>
            {console.log(totalAmount, 'ttt')}
          </div>
          <div className="flex justify-between p-2">
            <p className='font-bold text-xs sm:text-base'>Tax</p>
            <p className='font-bold text-xs sm:text-base'>tax..</p>
          </div>
          <div className="flex justify-between p-2">
            <p className='font-bold text-xs sm:text-base'>Shipping Cost</p>
            <p className='font-bold text-xs sm:text-base'>shipping_price</p>
          </div>
          <div className="flex justify-between p-2 border-t-2 mt-5">
            <p className='font-bold text-xs sm:text-base'>Estimated Total</p>
            <p className='font-bold text-xs sm:text-base'>{totalAmount}</p>
          </div>
            <Link to={'/shipping-addresss'} state={{totalAmount}}>
              <button className='bg-pink-900 hover:bg-pink-700 text-white rounded-md px-5 py-2 m-16 text-xs sm:text-base'>
                PLACE ORDER
              </button>
            </Link>
        </div>

    </div>
    
  :

  <EmptyCart/>
  }
    </>
  )
}

export default Cart;