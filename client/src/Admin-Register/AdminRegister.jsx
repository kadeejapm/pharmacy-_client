import { useState } from "react";
import InputField from "../Components/Forms/InputField/InputField";
import { NavLink } from "react-router-dom";
import { errorToast,successToast } from "../Components/Toast";




function AdminRegister() {

  

  const [formFiled, setFormField] = useState({});

  const formdatas = [
    {
      type: "email",
      placeholder: "E-Mail",
      className: "",
      name: "email",
    },
    {
      type: "password",
      placeholder: "Password",
      className: "",
      name: "password",
    },
  ];

  const onChangeValues = (e) => {
    console.log(e.target.value);
    setFormField({ ...formFiled, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formFiled);
    try {
      const response = await adminLogin(formFiled)
 
       successToast(response.data.message)

       console.log(response.data.token);

       if(!response.data.token){
        return errorToast('token is not provided')
       }

       localStorage.setItem("token",response.data.token)
       
    
     } catch (error) {
       errorToast(error.response.data.message,'error')
     }
  };


  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <form
        onSubmit={handleSubmit}
        action=""
        className="w-[40%] rounded-md bg-green-600 h-[400px] flex justify-center flex-col gap-5 items-center"
      >
        <h2 className="text-white text-xl">Register</h2>
        {formdatas.map(({ className, placeholder, type, name }, index) => (
          <InputField
            onChange={onChangeValues}
            key={index}
            type={type}
            placeholder={placeholder}
            name={name}
            className={`${className} max-w-[300px] w-[80%] h-[40px] bg-white flex justify-start ps-5 rounded-md items-center`}
          />
        ))}


        <NavLink to={'/admin-login'}>
        <input
          type="submit"
          className="text-white border-solid border-2 border-green-300 w-[4  0%]"
        />
         </NavLink>



        <NavLink to={'/admin-login'}>
        <p className="text-white text-xs underline "> SignUp  </p>
        </NavLink>
      </form>
    </div>
  );
}

export default AdminRegister;
