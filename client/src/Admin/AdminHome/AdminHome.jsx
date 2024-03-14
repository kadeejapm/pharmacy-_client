
import { Outlet } from "react-router-dom"

import SideBar from "../../Components/SideBar/SideBar"



function AdminHome() {
  return (
    <div style={{display:"flex"}}>
        <SideBar/>
        <div className=" w-[60%] h-[600px] rounded-xl m-auto bg-slate-950 ps-6 pt-20">
          <Outlet/>
        </div>
    </div>
  )
}

export default AdminHome