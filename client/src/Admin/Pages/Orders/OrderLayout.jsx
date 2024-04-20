import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function OrderLayout() {
  return (
    <>
    <div className="">

        <nav className='flex justify-between m-5 border-b-2 border-pink-900'>
            <div className="hidden md:block">
              <Link to={'/admin/orders/all'}><button className='p-2 px-5 text-xs sm:text-base hover:bg-pink-900 hover:text-white'>All</button></Link>
              <Link to={'/admin/orders/new'}><button className='p-2 px-5 text-xs sm:text-base hover:bg-pink-900 hover:text-white'>New</button></Link>
              <Link to={'/admin/orders/processing'}><button className='p-2 px-5 text-xs sm:text-base hover:bg-pink-900 hover:text-white'>Processing</button></Link>
              <Link to={'/admin/orders/shipped'}><button className='p-2 px-5 text-xs sm:text-base hover:bg-pink-900 hover:text-white'>Shipped</button></Link>
              <Link to={'/admin/orders/cancelled'}><button className='p-2 px-5 text-xs sm:text-base hover:bg-pink-900 hover:text-white'>Cancelled</button></Link>
            </div>
            <div className="">
            <Link to={'/admin/orders/search'}><button  className='p-2 px-5 hover:bg-pink-900 hover:text-white rounded-full'><i class="fa-solid fa-magnifying-glass"></i></button></Link>
            </div>
        </nav>

        <Outlet/>
        
    </div>
    </>
  )
}

export default OrderLayout