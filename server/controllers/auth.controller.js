import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

const postApisignup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    // return res.status(400).json({ message: "All fields are required." });
    next(errorHandler(400, 'All filed are required.'))
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

export { postApisignup };
