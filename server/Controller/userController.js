import { User } from "../models/userModel.js";
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"



export const userregister = async (req, res) => {

    try {



        const newUser = new User(req.body)

        const saveUser = await newUser.save();

        if (saveUser) {
            return res.status(201).json({ user: saveUser, message: 'successfully inserted user into db' });
        }




    }
    catch (error) {
        return res.status(404).json({ message: error.message || 'error' });
    }
}



export const login = async (req, res) => {


    const getUser = await User.findOne({ email: req.body.email })

    if (!getUser) {
        return res.status(400).json({ message: 'invalid email' })
    }

    const isMatch = await User.findOne({ password: req.body.password })


    if (!isMatch) {
        return res.status(400).json({ message: 'invalid pwrd' })
    }


    const token = Jwt.sign({ userId: getUser._id, isUser: getUser.isUser }, process.env.JWT_SECRET_KEY, { expiresIn: "10h" })


    return res.status(200).json({ users: getUser, message: 'Successfull', token })



}