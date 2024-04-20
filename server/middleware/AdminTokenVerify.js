import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyAdminToken = (req, res, next) =>{
    const headerWithToken = req.headers.authorization

    if(!headerWithToken) {
        res.status(400).json("token is not provided");
    }

    const token = headerWithToken.split(" ")[1];

    if(!token) {
        res.status(404).json("token is not provided");
    }

    var decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = decoded;
    
    if(decoded.isAdmin) {
        next()
    }
    else {
        res.status(400),json("admin not authenticated!")
    }
}