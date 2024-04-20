import express, { Router } from "express";
import { login, register } from "../Controller/adminController.js";





const router = Router()

router.post('/login', login);
router.post('/register', register);


export default router;