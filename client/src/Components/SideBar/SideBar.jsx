import { NavLink } from "react-router-dom";

function SideBar() {




 

  return (

  
    
    <div className=" rounded-xl bg-slate-300 w-[400px] h-screen ">
      



      <ul className="mt-24">
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100">
          <NavLink to={"/admin/home"}> Home </NavLink>
        </li>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100">
          <NavLink to={"/admin/product"}> Product </NavLink>
        </li>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100">
          <NavLink to={"/admin/admin-category"}> Categories </NavLink>
        </li>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100">
          <NavLink to={"/admin/orders"}> orders </NavLink>
        </li>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100">
          <NavLink to={"/admin/banner"}> banner</NavLink>
        </li>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100">
          <NavLink to={"/admin/blog4"}> Blog4</NavLink>
        </li>

        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100">
          <NavLink to={"/admin/payment"}> payment</NavLink>
        </li>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-slate-100">
          <NavLink to={"/admin/profile"}>profile</NavLink>
        </li>
       
      </ul>
    </div>
  );
}

export default SideBar;
