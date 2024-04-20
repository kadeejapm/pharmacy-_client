import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { errorToast, successToast } from "../Components/Toast";
import axios from "axios";



function AdminLogin() {

  const navigate = useNavigate()

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/admin/login',
        {email: email, password: password })
    navigate('/admin')
    successToast(response.data.message)
  } catch (error) {
    console.log(error.response.data.message,'errr');
    errorToast(error.response.data.message)
  }
};
return (
  <div className="flex justify-center items-center flex-col h-screen">
    <form
      onSubmit={handleSubmit}
      action=""
      className="w-1/3 rounded-md bg-green-600 h-[500px] flex justify-center flex-col gap-5 items-center "
    >

      <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="{max - w - [300px] w-[80%] h-[40px] bg-white flex justify-start ps-5 rounded-md items-center} "/>
      <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="{max - w - [300px] w-[80%] h-[40px] bg-white flex justify-start ps-5 rounded-md items-center} "/>

      <input
        type="submit"
        className="text-white border-solid border-2 border-green-200 bg-green-500 w-24 rounded-2xl"
      />
      <Link to={"/admin-register"}>
        <p className="text-white  font-semibold text-xs underline ">Sign up </p>
      </Link>
    </form>
  </div>
);
}
export default AdminLogin;
