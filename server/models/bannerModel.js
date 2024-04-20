import mongoose from "mongoose";

const BannerSchema = new mongoose.Schema({

    image: {
        type: String,
        
    },
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

export const Banner = mongoose.model("banner",BannerSchema );
