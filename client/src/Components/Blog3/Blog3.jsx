import React from "react";
import { IoIosArrowForward } from "react-icons/io";


function Blog3(){
    return(
        <div className='bg-blue-50 h-fit-content flex justify-around items-center md:flex-row  flex-col' style={{backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4b0LGxLSMERH5HGTAv5wu6Y3Zf_LDYJIoQ&usqp=CAU')", backgroundAttachment:"fixed", backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        <div className=' '>
        <p className="text-black font-normal mt-3">Today Hot Offer</p>
        <h1 className='text-black font-bold text-[48px]'>Unlock 50% Off on <br />Essential Medicines!</h1>
        <p className='text-black font-sans mt-5'>Elevate your health journey with exclusive discounts and unparalleled<br/> convenience.Your to well-being starts here,where every purchase<br/> is a prescription for savings.</p>
        <button className='  bg-green-600 flex gap-2 text-white border-[2px] border-black-100 p-2 rounded font- mt-5 font-normal mb-6'>Place An Order Now<IoIosArrowForward /></button>
        </div>
       

    </div>

    )
}
export default Blog3