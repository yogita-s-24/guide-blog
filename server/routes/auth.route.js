import express from "express";
import { postApisignup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/signup', postApisignup);

export default router;