import { NavLink } from "react-router-dom";

function SideBar() {




 

  return (
    <div className=" rounded-xl bg-green-800 w-[400px] h-screen ">
      <ul className="mt-24">
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100">
          <NavLink to={"/admin/home"}> Home </NavLink>
        </li>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100">
          <NavLink to={"/admin/product"}> Product </NavLink>
        </li>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100">
          <NavLink to={"/admin/orders"}> Orders </NavLink>
        </li>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100">
          <NavLink to={"/admin/cart"}> Cart </NavLink>
        </li>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100">
          <NavLink to={"/admin/payment"}> Payments </NavLink>
        </li>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100">
          <NavLink to={"/admin-login"}> Sign-In </NavLink>
        </li>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100">
          <NavLink to={"/admin-register"}> Sign-Up </NavLink>
        </li>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100">
          <NavLink to={"/admin/users"}> Users </NavLink>
        </li>
       
      </ul>
    </div>
  );
}

export default SideBar;
