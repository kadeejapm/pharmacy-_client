import { Products} from "../models/productModel.js"
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"



export const createProducts = async (req, res) => {

    try {



        const newproduct = new Products(req.body)

        const saveproduct = await newproduct.save();

        if (saveproduct) {
            return res.status(201).json({ result: saveproduct, message: 'successfully inserted user into db' });
        }




    }
    catch (error) {
        return res.status(404).json({ message: error.message || 'error' });
    }
}



export const getAllProducts = async (req, res) => {


    const getproduct = await Products.find()

    if (!getproduct) {
        return res.status(400).json({ message: 'invalid email' })
    }


    return res.status(200).json({ result: getproduct, message: 'Successfull' })



}


export const deleteProducts = async (req, res) => {


    const getproduct = await Products.findOneAndDelete(req.params.id)

    if (!getproduct) {
        return res.status(400).json({ message: 'invalid email' })
    }


    return res.status(200).json({ result: getproduct, message: 'deleted' })



}

export const editProducts = async (req, res) => {


    const getproduct = await Products.findByIdAndUpdate(req.params.id,{$set:req.body})

    if (!getproduct) {
        return res.status(400).json({ message: 'invalid email' })
    }


    return res.status(200).json({ result: getproduct, message: 'updated' })



}




export const searchProduct = async(req,res)=>{
    let filter={}
    if(req?.query?.name){
        filter={name:{$regex:req.query.name,$options:"i"}}
    }
    const product = await Products.find(filter);
    return res.status(200).json({result: product})
}