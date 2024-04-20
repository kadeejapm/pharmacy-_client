import  express  from "express";
import connectDb from "./config/dbConnection.js";
import adminRoute from "./routes/adminRoute.js";
import cors from "cors";
import dotenv from "dotenv";

import {userregister} from "./Controller/userController.js"
import { createProducts,getAllProducts,deleteProducts,editProducts,} from "./Controller/productController.js";
import { createCategory, deleteCategory, editCategory, getAllCategory } from "./Controller/categoriesController.js";
import { createBanner, deleteBanner, editBanner, getAllBanner } from "./Controller/bannerController.js";
import { createBlog4, deleteBlog4ById, getBlog4, getBlog4ById, updateBlog4ById } from "./Controller/blogController.js";
import { addToCart,getCart } from "./Controller/cartController.js";
import {login} from "./Controller/userController.js";






const app = express();
connectDb();
dotenv.config();
app.use(cors())
app.use(express.json({limit:"50mb"}));
app.use(express.static(process.env.FILE_UPLOADING_PATH));



app.use("/api/admin", adminRoute);
app.post("/api/user/register",userregister);
app.post("/api/user/login",login);
// app.post("/api/products", productRoute);
app.post("/api/admin/add-products",createProducts)
app.put("/api/admin/edit-products/:id",editProducts)
app.delete("/api/admin/delete-products/:id",deleteProducts)
app.get("/api/admin/getall-products",getAllProducts)

app.post("/api/add-to-cart",addToCart)
app.get("/api/Cart/:id",getCart)
// http://localhost:3000/


app.post("/api/admin/add-category",createCategory)
app.put("/api/admin/edit-category/:id",editCategory)
app.delete("/api/admin/delete-category/:id",deleteCategory)
app.get("/api/admin/getall-category",getAllCategory)


app.post("/api/admin/add-Banner",createBanner)
app.put("/api/admin/edit-Banner/:id",editBanner)
app.delete("/api/admin/delete-Banner/:id",deleteBanner)
app.get("/api/admin/getall-Banner",getAllBanner)


app.post("/api/admin/blog4",createBlog4);
app.get("/api/admin/getallblogs",getBlog4);
app.get("/api/admin/:id",getBlog4ById)
app.put("/api/admin/:id",updateBlog4ById)
app.delete("/api/admin/:id",deleteBlog4ById)






















app.listen(process.env.PORT || 3001, () => {
    console.log(`server is running on PORT ${process.env.PORT || 3001}`);
})