import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();
//Router() is a method

router.get("/test", test);

export default router;
