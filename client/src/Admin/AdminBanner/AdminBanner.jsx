import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { errorToast, successToast } from "../../Components/Toast"

function AdminBanner() {


    const [Banner,setBanner] = useState([])
    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata = async()=>{
        try {
            const response = await axios.get('http://localhost:3000/api/admin/getall-Banner')

      setBanner(response.data.result)

           } catch (error) {
             errorToast(error.response.data.message,'error')
           }
    }
const handleDelete =async (id)=>{
        try {
            const response = await axios.delete(`http://localhost:3000/api/admin/delete-Banner/${id}`)
            successToast(response.data.message)
        } catch (error) {
            errorToast(error.message)
        }
    }
    return(

    
<div>
    
            <Link to={'/admin/add-banner'} className='hover:underline'>Add Banner</Link>



            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-black dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='bg-green-600'>
                        <th scope="col" class="px-6 py-3">
                              image
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                price
                            </th>
                            <th scope="col" class="px-6 py-3">
                               delivery cost
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                      { Banner.map((item)=>{
                        return(
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                   <td class="px-6 py-4">
                             <img src={item.image} alt=""  className='h-5 w-5'/>
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.name}
                            </th>
                            <td class="px-6 py-4">
                              {item.description}
                            </td>
                            <td class="px-6 py-4">
                              {item.details}
                            </td>
                            <td class="px-6 py-4">
                             {item.cost}
                            </td>
                            <td onClick={()=>handleDelete(item._id)} class="px-6 py-4 bg-red-600">
                                
                               Delete
                            </td>
                            <Link to={`/admin/edit-Banner/${item._id}`} state={item}>
                            <td class="px-6 py-4 bg-green-500">
                               Edit
                            </td>
                            </Link>
                        </tr>
                        )
                       }) }
                       
                    </tbody>
                </table>
            </div>

            {/*  */}
        </div>
    )
}

export default AdminBanner