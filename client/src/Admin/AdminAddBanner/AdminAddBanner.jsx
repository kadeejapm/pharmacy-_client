import React, { useState } from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import FileBase64 from "react-file-base64"

function AdminAddBanner() {

    const navigate = useNavigate()

     const [image,setImage] =useState("")
     const [name,setName] = useState("")
     const [description,setDescription] = useState("")
     const [details,setDetails] = useState("")
     const [cost,setCost] = useState("")



     let handleSubmit = async (e)=>{
        e.preventDefault()
        let response = await axios.post('http://localhost:3000/api/admin/add-banner',{image:image,name:name,description:description,details:details,cost:cost,})
        console.log(response.data.message);
        navigate('/admin/banner')
     }


     


    return (
        <div className='mt-10'>


            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <img src={image}/>
                    <FileBase64 onDone={(res)=>setImage(res.base64)}/>
                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={(e)=>setName(e.target.value)} type="Name" name="name"  id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:border-green-300 peer" placeholder=" " required />
                    <label for="Name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={(e)=>setDescription(e.target.value)} type="Description" name="description" id="floating_description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:border-green-300 peer" placeholder=" " required />
                    <label for="floating_description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={(e)=>setDetails(e.target.value)} type="Details" name="floating_details" id="floating_details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:border-green-300 peer" placeholder=" " required />
                    <label for="floating_details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Details</label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input onChange={(e)=>setCost(e.target.value)} type="cost" name="floating_cost" id="floating_cost" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-300 focus:outline-none focus:ring-0 focus:border-green-300 peer" placeholder=" " required />
                    <label for="floating_cost" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">cost</label>
                </div>
               
                <button type="Add" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
            </form>

        </div>
    )
}

export default AdminAddBanner
