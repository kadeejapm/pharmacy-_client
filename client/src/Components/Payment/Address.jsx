import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
import { errorToast, successToast } from '../Toast/index.js';
import RenderRazorpay from './RenderRazorPay';


function Address() {
  const [orderDetails, setOrderDetails] = useState({
    orderId: null,
    currency: null,
    amount: null,
   });
   const [displayRazorpay, setDisplayRazorpay] = useState(false);



    const [ name,setName ] = useState('');
    const [ address,setAddress ] = useState('');
    const [ contact,setContact ] = useState('');
    const [ city,setCity ] = useState('');
    const [ pincode,setPincode ] = useState('');
    const [ mode,setMode ] = useState('');
    const { id } = useParams();


    const navigate = useNavigate();

    const addAddress = async(e) =>{
      e.preventDefault()
      try {
          const response = await axios.post("http://localhost:3000/api/order",{name,address,contact,city,pincode,mode:mode,userId:JSON.parse(localStorage.getItem("users"))._id,productId:id},{headers:{
            'Authorization':`Bearer ${localStorage.getItem("token")}`
          }})
          
          console.log(response,"aaa");

          if(mode === 'online'){

          setOrderDetails({
            orderId: response.order_id,
            currency: response.currency,
            amount: response.amount,
          });
          setDisplayRazorpay(true);

          }

          successToast("Address Added Succesfully");
          // navigate('/successfull');
        } catch (error) {
          errorToast(error.message);
        }
  }


  


  return (
    <>
     <div className="min-h-screen m-5 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-xl sm:text-3xl font-semibold mb-4 text-pink-900 border-b-2">Deliver to this Address</h2>

          <form onSubmit={addAddress}>
            <h3 className="sm:text-xl font-semibold mb-2">Shipping Address</h3>

            {/* Shipping Form */}
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-xs sm:text-sm font-medium text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-xs sm:text-sm font-medium text-gray-600"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phNumber"
                className="block text-xs sm:text-sm font-medium text-gray-600"
              >
                Contact
              </label>
              <input
                type="text"
                id="phNumber"
                name="phNumber"
                value={contact}
                onChange={(e)=>setContact(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-xs sm:text-sm font-medium text-gray-600"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={city}
                onChange={(e)=>setCity(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="pinCode"
                className="block text-xs sm:text-sm font-medium text-gray-600"
              >
                Pin Code
              </label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                value={pincode}
                onChange={(e)=>setPincode(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />

            <select name="" id="" onChange={(e)=>setMode(e.target.value)}>
              <option value="">select payment option</option>
              <option value="cod">Cash on Delivery</option>
              <option value="online">Online</option>
            </select>
              
            </div>
            <input type="submit" value="SHIP TO THIS ADDRESS "  className='bg-pink-800 text-white p-2 rounded-md hover:bg-pink-600 text-xs sm:text-sm'/>

          </form>

          {/* <Link to={'/payment'}><button type="submit" className="bg-pink-800 text-white p-2 rounded-md hover:bg-pink-600 text-xs sm:text-sm">
            SHIP TO THIS ADDRESS <i class="fa-solid fa-arrow-right"></i>
          </button></Link> */}

        </div>
    </div>


    {displayRazorpay && (
    <RenderRazorpay
      amount={orderDetails.amount}
      currency={orderDetails.currency}
      orderId={orderDetails.orderId}
      keyId='rzp_test_IYYjwzy1ucmvkA'
      keySecret='mpg2uvMb65GlFIIvkHOdR4nb'
    />
    )}
    </>
  )
}

export default Address