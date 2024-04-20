import mongoose from "mongoose";

const blog4Schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the title for blog4"]
    },
    description: {
        type: String,
        required: [true, "Please add the title for blog4"]
    },
    image:{
        type:String,
    },
    date: {
        type:Date
    }
},
    {
        timestamps: true
    }
);
 export const Blog4 = mongoose.model("Blog4", blog4Schema)