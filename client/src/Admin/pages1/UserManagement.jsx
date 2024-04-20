import { Avatar } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { errorToast } from '../../Components/Toast/index.js';

function UserManagement() {

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

    
    const UserManagement = [
        {
            userId:"user id",
            userfname: "user fname",
            userlname: "user lname",
            date: "date"
        },
        {
            userId:"user id",
            userfname: "user fname",
            userlname: "user lname",
            date: "date"
        },
        {
            userId:"user id",
            userfname: "user fname",
            userlname: "user lname",
            date: "date"
        }
    ]

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
                            <p className='text-xs text-slate-600'>created At : </p>
                            <p className='text-xs text-slate-600'>{item.createdAt}</p>
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

export default UserManagement