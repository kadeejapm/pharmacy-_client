import { Avatar } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { errorToast, successToast } from '../../../Components/Toast/index.js';
import { Link } from 'react-router-dom';

function OrderManagement() {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
      fetchUsers()
    },[])
  
    const fetchUsers=async()=>{
      try {
        const response = await axios.get("http://localhost:3000/api/user")
         console.log(response,"responseee");    
        setUsers(response.data.users)      
      } catch (error) {
        errorToast(error.message || 'error')
      }
    }


   
  return (
    <>
    <div className="">
        <div className="flex flex-wrap justify-center gap-5 m-5">
            {
                users.map((item)=>{
                    return(
                      <>
                        <div className="p-5 border border-pink-900 rounded-xl shadow-md w-[150px] sm:w-[200px]">
                            <Avatar/>
                            <p className='text-xs my-2 text-slate-600'>{item._id}</p>
                            <p className='text-xs sm:text-base font-semibold'>{item.userFname} {item.userLname}</p>
                            <p className='text-xs sm:text-base font-semibold'>{item.userEmail}</p>
                          
                          <div className="flex gap-2 justify-center flex-wrap mt-3">
                          <Link to={`/admin/orders/user/${item._id}`}>
                            <button className='border border-pink-900 px-2 rounded-lg hover:text-white hover:bg-pink-900'>Check</button>
                          </Link>
                          </div>
                        </div>
                      </>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default OrderManagement