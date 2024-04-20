import mongoose from "mongoose";
import { Blog4 } from "../models/blog4Model.js";


export const createBlog4 = async (req, res) => {
    try {
        const { name, description } = req.body;

        if(!name) {
            return res.status(400).json({ message: "blog name is missing" });
        }
        if(!description) {
            return res.status(400).json({ message: "description is missing" });
        }
       
        const isBlog4Exist = await Blog4.findOne({ name:req.body.name});

        if(!!isBlog4Exist) {
            return res.status(400).json({ message: "blog name is existing...Please enter another one" });
        }

        const newBlog4 = new Blog4(req.body)

        const createdBlog4 = await newBlog4.save();
        return res.status(201).json({ data: createdBlog4, message: "Successfully inserted blog into db" });
    } catch (error) {
        return res.status(404).json({ message: error.message || 'error' });
    }
}


export const getBlog4 = async (req, res) => {
    const Blog4s = await Blog4.find()

        return res.status(200).json({ Blog4: Blog4s });
    
}


export const getBlog4ById = async (req, res) => {
    const response = await mongoose.connection.collection("blog").findOne({ _id: new mongoose.Types.ObjectId(req.params.id) });

    if(response) {
        return res.status(200).json({ Blog: response });
    }else {
        return res.status(404).json("no entries yet");
    }
}


export const deleteBlog4ById = async (req, res) => {
    try {
        if(!req.params.id) {
            return res.status(400).json({ message: "error while deleting!!!" });
        }
        await Blog4.findByIdAndDelete(req.params.id)
        return res.status(200).json({ message: "deleted" });
    } catch(error) {
        return res.status(200).json({ message: error.message || 'error' });
    }
}


export const updateBlog4ById = async (req, res) => {
    console.log(req.params.id);

    try {
        if(!req.params.id) {
            return res.status(400).json({ message: 'error while deleting!' });
        }

        await Blog4.findByIdAndUpdate(req.params.id,{$set:req.body});
        return res.status(200).json({ message: "updated" });
    } catch (error) {
        return res.status(400).json({ message: error.message || "updation error" })
    }
}