import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    description: {
        type: String,
        
    },
    details: {
        type: String,
       
    },
    cost: {
        type: Number,
        
    },
  
},
    {
        timestamps: true,
    }
);

export const Category = mongoose.model("category",CategorySchema );
