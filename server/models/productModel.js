import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    image: {
        type: String,
        
    },
    
    description: {
        type: String,
        
    },
    price: {
        type: Number,
       
    },
   
  
},
    {
        timestamps: true,
    }
);

export const Products = mongoose.model("Products", ProductSchema);
