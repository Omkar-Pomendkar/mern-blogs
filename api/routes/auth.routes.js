import express from "express";
import {signup} from "../controllers/auth.controller.js"
const router = express.Router();

//  NOw we create something so we are making use of post request

router.post('/signup',signup)

export default router;