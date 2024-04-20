import { instance } from "../Axios";


export const UserRegister =(data)=>{
    try{
        return instance.post("/user/register",data)
    } catch (error){
        return error

    }
}

export const UserLogin =(data)=>{
    try{
        return instance.post("/user/login",data)
    } catch (error){
        return error

    }
}


