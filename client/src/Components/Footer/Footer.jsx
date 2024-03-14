import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";

 



function Footer() {
    return(
        <div className="bg-green-900 h-72 flex">

            <div className="mt-6 flex" >
                <div className=" ml-14 ">

                    <h1 className="text-gray-50 font-bold text-lg">Contact</h1><br />
                    <ul className="text-sm text-wrap">
                        <li className="text-gray-50 flex justify-center items-center"><span><IoLocationOutline /></span>123 Road,Dhaka,Bangladesh</li><br />

                        <li className="text-gray-50 flex justify-center items-center"><ImPhone />+9876543210</li><br />

                        <li className="text-gray-50 flex justify-center items-center"><MdEmail />adcd@gmail.com</li><br />


                    </ul>
                </div>

                <div className="ml-14">


                    <h1 className="text-gray-50 font-bold text-lg">Quick Links</h1><br />
                    <ul className="text-sm">

                <li className="text-gray-50">Home</li><br />

                <li className="text-gray-50">About</li><br />

                <li className="text-gray-50">Services</li><br />

                <li className="text-gray-50">Careers</li><br />

              
           





                </ul>
                </div>
                    <div className="ml-14">


                  <h1 className="text-gray-50 font-bold text-lg">Specialities</h1><br />
                  <ul className="text-sm">

        <li className="text-gray-50">Anesthesiology</li><br />

        <li className="text-gray-50">Psychiatry</li><br />

        <li className="text-gray-50">General Suregery</li><br />

        <li className="text-gray-50">Family medicine</li><br />







     </ul>
    </div>
    <div className="ml-14">


<h1 className="text-gray-50 font-bold text-lg">Services</h1><br />
<ul className="text-sm">

<li className="text-gray-50">Medical</li><br />

<li className="text-gray-50">Operation</li><br />

<li className="text-gray-50">Laboratory</li><br />

<li className="text-gray-50">ICU</li><br />





</ul>
</div>

<div className=" ml-14 ">
    
<h1 className="text-gray-50 font-bold text-lg">Social Media </h1><br />
<ul className="text-sm">
     <div className="flex  justify-between">

    <i className="text-white font-bold text-lg"><FaFacebook /></i>

     <i className="text-white font-bold text-lg"><FaInstagram /></i>

    <i className="text-white font-bold text-lg"><FaYoutube /></i>

    <i className="text-white font-bold text-lg"><FaLinkedin /></i>

    </div>
</ul>
</div>

</div>


</div>







    )

}

export default Footer