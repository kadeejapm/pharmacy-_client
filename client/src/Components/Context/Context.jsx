import React, { useEffect, useState } from 'react'
import {getCarts,getWishlist } from './api'

export const ContextAPI = React.createContext()
function Context({children}) {

    const [carts,setCarts] = useState([])
    const [wishlist,setWishlist] = useState([])
    const [refresh,setRefresh] = useState(true)
    
    useEffect(()=>{
        fetchAPI()
        fetchData()
    },[refresh])
    


    const fetchAPI = async ()=>{
        try {
            const result = await getCarts(JSON.parse(localStorage.getItem("users"))._id);
            console.log(result,'yyy');
            setCarts(result.data)
        } catch (error) {
            console.log(error.message,'rrr');
        }
    };


    const fetchData = async ()=>{
        try {
            const result = await getWishlist(JSON.parse(localStorage.getItem("users"))._id);
            console.log(result,'list');
            setWishlist(result.data)
        } catch (error) {
            console.log(error.message,'rrr');
        }
    };


    const value = {
        carts,
        wishlist,
        setRefresh,
        refresh,
    }

  return (
    <ContextAPI.Provider value={value}>
        {children}
    </ContextAPI.Provider>
  )
}

export default Context