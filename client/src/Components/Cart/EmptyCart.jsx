import React from 'react'
import images from "../../assets/images/medicine.png"
import { Link } from 'react-router-dom'

function EmptyCart() {
  return (
    <>
      <div className="text-center p-10">
        <img src={images} alt="" className='w-[200px] m-auto' />
        <p className='text-xs sm:text-xl font-bold'>Oops! Your bag is Empty!</p>
        <p className='text-xs sm:text-base'>There is nothing in your bag.Let's add some items.</p>
        <Link to={'/start-shopping'}>
          <button className='bg-pink-800 text-white py-1 px-5 rounded mt-3 text-xs sm:text-base'>Shop Now</button>
        </Link>
      </div>
    </>
  )
}

export default EmptyCart