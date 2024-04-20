import { Category} from "../models/categoriesModel.js"
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"



export const createCategory = async (req, res) => {

    try {



        const newcategory = new Category(req.body)

        const savecategory = await newcategory.save();

        if (savecategory) {
            return res.status(201).json({ result:savecategory , message: 'successfully inserted user into db' });
        }




    }
    catch (error) {
        return res.status(404).json({ message: error.message || 'error' });
    }
}



export const getAllCategory = async (req, res) => {


    const getAllCategory = await Category.find()

    if (!getAllCategory) {
        return res.status(400).json({ message: 'invalid email' })
    }


    return res.status(200).json({ result:getAllCategory , message: 'Successfull' })



}


export const deleteCategory = async (req, res) => {


    const getcategory = await Category.findOneAndDelete(req.params.id)

    if (!getcategory) {
        return res.status(400).json({ message: 'invalid email' })
    }


    return res.status(200).json({ result: getcategory, message: 'deleted' })



}

export const editCategory = async (req, res) => {


    const getcategory = await Category.findByIdAndUpdate(req.params.id,{$set:req.body})

    if (!getcategory) {
        return res.status(400).json({ message: 'invalid email' })
    }


    return res.status(200).json({ result: getcategory, message: 'updated' })



}