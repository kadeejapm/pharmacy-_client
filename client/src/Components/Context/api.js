import axios from "axios"

export const getCarts =async(id) =>{
    try {
        const response = await axios.get(`http://localhost:3000/api/cart/listCart/${id}`)
        return response.data
    } catch (error) {
        return error
    }

}


export const getWishlist =async(id) =>{
    try {
        const response = await axios.get(`http://localhost:3000/api/wishlist/list/${id}`)
        return response.data
    } catch (error) {
        return error
    }

}