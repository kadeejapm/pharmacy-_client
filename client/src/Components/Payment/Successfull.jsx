import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import Home from '../Home/Home';

function Successfull() {
  const [isLoading, setIsLoading] = useState(true);
    

    useEffect(() => {
        const fetchData = async () => {
          // Simulate a delay
          await new Promise((resolve) => setTimeout(resolve, 1000));
          setIsLoading(false);
        };
    
        fetchData();
      }, []);

  return (
    <>
    {isLoading ? 

    <div className="h-[100vh] bg-green-700 flex flex-col justify-center items-center">
        {/* <Link to={'/'}>
        <div className="text-white">
            Home
        </div>
        </Link> */}
        <div className="text-green-700 font-semibold text-xl sm:text-2xl rounded-full w-fit p-5 py-10 sm:py-12 m-auto bg-white">
            Successfull
            <p className='text-2xl bg-green-700 w-8 m-auto text-center rounded-full text-white'>
            <i class="fa-solid fa-check"></i>
            </p>
        </div>
    </div>
     :
    <Home/>}
    </>
  )
}

export default Successfull;