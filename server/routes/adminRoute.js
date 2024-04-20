import express, { Router } from "express";
import { register, login,} from "../Controller/adminController.js";




const router = Router()

router.post('/login', login);
router.post('/register', register);

// router.put('/:id', getAdmin);

export default router;