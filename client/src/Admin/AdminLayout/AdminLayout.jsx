import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import Header from '../AdminHome/Header/Header'

function AdminLayout() {
  return (
    <div style={{display:"flex"}}>
      
    <SideBar/>
 
    <div className=" w-[100%] h-[800px] rounded-xl m-auto  pt-2 ">
      <Header/>
      <Outlet/>
    </div>
</div>
  )
}

export default AdminLayout
