import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function AdminBlog4() {
  return (
    <>
    <div className="flex gap-5 m-3 mt-5 border-b-2 justify-center border-green-500">
        <Link to={'/admin/blog4/add-blog4'}><button className='border border-green-500 px-3 py-1 my-2 hover:border-green-500 hover:text-white text-xs sm:text-base'>Add</button></Link>
        <Link to={'/admin/blog4/'}><button  className='border border-green-500 px-3 py-1 my-2 hover:border-green-500 hover:text-white text-xs sm:text-base'>View</button></Link>
    </div>
    <Outlet/>
    </>
  )
} 

export default AdminBlog4