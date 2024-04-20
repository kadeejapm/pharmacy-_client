import { Avatar, Card } from '@mui/material';
import React from 'react'
import images from "../../../assets/images/black oil 2.png"
import { Link, useParams } from 'react-router-dom';

function SingleOrders() {

  // const value =useLocation();

  return (
    <>
    <Link to={'/admin/orders/all'}>
      <h className='text-2xl p-2'><i class="fa-solid fa-arrow-left"></i></h>
    </Link>

    <div className="flex justify-center mt-10">
    <Card className="w-[180px] sm:w-[350px] m-5 p-2">
                          
          <div className="flex justify-between">
              <div className="">
                  <p className='text-xs sm:text-base text-slate-500 font-thin'>Order-Id</p>
                  <p className='text-xs sm:text-base'>Date</p>
                  <p className='text-xs sm:text-base font-medium'>UserName</p>
                  
                  <div className="flex items-center">
                    <img src={images} alt="" className='w-[50px] sm:w-[100px]' />
                    <div className="">
                      <p className='text-xs sm:text-base'>pdct name</p>
                      <p className='text-xs sm:text-base'>price</p>
                      <p className='text-xs sm:text-base'>quantity</p>
                    </div>
                  </div>

                  <p className='text-xs sm:text-base'>Delivered Date</p>
                  <p className='text-xs sm:text-base'>Payment Method</p>
                  <p className='text-xs sm:text-base text-slate-500'>Status:Status</p>
              </div>
              <div className="">
                  <Avatar className=''/>
              </div>
          </div>
                            
    </Card>
    </div>
    </>
  )
}

export default SingleOrders