import { Banner} from "../models/bannerModel.js"
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"



export const createBanner = async (req, res) => {

    try {



        const newbanner = new Banner(req.body)

        const savebanner = await newbanner.save();

        if (savebanner) {
            return res.status(201).json({ result:savebanner , message: 'successfully inserted user into db' });
        }




    }
    catch (error) {
        return res.status(404).json({ message: error.message || 'error' });
    }
}



export const getAllBanner = async (req, res) => {


    const getAllBanner = await Banner.find()

    if (!getAllBanner) {
        return res.status(400).json({ message: 'invalid email' })
    }


    return res.status(200).json({ result:getAllBanner , message: 'Successfull' })



}


export const deleteBanner = async (req, res) => {


    const getbanner = await Banner.findOneAndDelete(req.params.id)

    if (!getbanner) {
        return res.status(400).json({ message: 'invalid email' })
    }


    return res.status(200).json({ result: getbanner, message: 'deleted' })



}

export const editBanner = async (req, res) => {


    const getbanner = await Banner.findByIdAndUpdate(req.params.id,{$set:req.body})

    if (!getbanner) {
        return res.status(400).json({ message: 'invalid email' })
    }


    return res.status(200).json({ result: getbanner, message: 'updated' })



}