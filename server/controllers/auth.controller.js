import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from '../utils/error.js'
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

export const postApisignup = async (req, res, next) => { // Added 'next' parameter
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, 'All fields are required.')); // Use 'next' to handle errors
    return; // Don't forget to return or use else to prevent execution of the next code
  }

  try {
    const hashedPassword = await bcryptjs.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    const savedUser = await user.save();
    res.json({ message: "Signup Successful", data: savedUser });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const postApisignin = async (req, res, next) => { // Added 'next' parameter
  const { email, password } = req.body;

  if (
    !email || 
    !password || 
    email === '' || 
    password === '' 
  ) {
    next(errorHandler(400, "All fields are required.")); // Use 'next' to handle errors
    return; // Don't forget to return or use else to prevent execution of the next code
  }

  try {
    const validUser = await User.findOne({ email: email }); // Changed 'email' to 'username'
    if (!validUser) {
      return next(errorHandler(404, "User not found."));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return  next(errorHandler(400, 'Invalid Password'));
    }

    const token = jwt.sign(
      { id: validUser._id }, 
      process.env.JWT_SECRETE
    );

const {password : pass, ...rest} = validUser._doc;

    res
    .status(200)
    .cookie('access_token', token, {
      httpOnly: true
    })
    .json(rest);

  } catch (error) {
    next(error); // Pass the error to the next middleware
  }
};
