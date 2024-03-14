import  express  from "express";
import connectDb from "./config/dbConnection.js";
import adminRoute from "./routes/adminRoute.js";
import userRoute from "./routes/userRoute.js"
import cors from "cors";
import dotenv from "dotenv";





const app = express();
connectDb();
dotenv.config();
app.use(cors())
app.use(express.json());
app.use(express.static(process.env.FILE_UPLOADING_PATH));



app.use("/api/admin", adminRoute);
app.use("/api/admin",userRoute)



app.listen(process.env.PORT || 3000, () => {
    console.log(`server is running on PORT ${process.env.PORT || 3000}`);
})