import express from "express";
import { postApisignup, postApisignin} from "../controllers/auth.controller.js";

const router = express.Router();

router.post('/signup', postApisignup);
router.post('/signin', postApisignin);

export default router;