import express, { Router } from "express";
import { register, login,} from "../Controller/adminController.js";




const router = Router()

router.post('/register', register);
router.post('/login', login);

// router.put('/:id', getAdmin);

export default router;