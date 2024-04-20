
import { Outlet } from "react-router-dom"

import SideBar from "../../Components/SideBar/SideBar"
import Header from "./Header/Header"





function AdminHome() {
  return (
    <div style={{display:"flex"}}>
      
        <SideBar/>
     
        <div className=" w-[100%] h-[800px] rounded-xl m-auto  ps-6 pt-20 ml-2">
          <Outlet/>
          <Header/>
        </div>
    </div>
  )
}

export default AdminHome