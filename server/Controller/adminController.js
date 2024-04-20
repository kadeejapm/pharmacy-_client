import { Admin } from "../models/adminModel.js";
import bcrypt from "bcrypt"
import  Jwt from "jsonwebtoken";




export const register =async (req, res) =>{

    try {
    //     const { fname, lname, email, password } = req.body;

    //     if (!fname  !lname  !email  !password) {
    //         return res.status(400).json({ message: "All fields are mandatory" })
    //     }

        // .............encryption........ //

        //(saltRounds=10)
        //  req.body.password = myPlaintextPassword  //

        // bcrypt.hash(req.body.password, 10, async (err, hash) => {


            const newadmin = new Admin(req.body)

            const saveadmin = await newadmin.save();

            if (saveadmin) {
                return res.status(201).json({ admin: saveadmin, message: 'successfully inserted user into db' });
            }


        // })

    }
    catch (error) {
        return res.status(404).json({ message: error.message  ||'error' });
    }
}



export const login = async (req, res) => {


    const getadmin = await Admin.findOne({ email:req.body.email })

    if (!getadmin) {
        return res.status(400).json({ message: 'invalid email' })
    }

    const isMatch = await Admin.findOne({ password:req.body.password })


    if (!isMatch) {
        return res.status(400).json({ message: 'invalid pwrd' })
    }


            const token = Jwt.sign({adminId: getadmin._id,isadmin:getadmin.isadmin},process.env.JWT_SECRET_KEY, {expiresIn:"10h"})


            return res.status(200).json({ users: getadmin, message: 'Successfull' ,token})



}