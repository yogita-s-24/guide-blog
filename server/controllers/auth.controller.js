import User from "../models/user.model.js";
import bcryptjs from 'bcrypt';

const postApisignup = async (req , res) => {
  const { username, email, password } = req.body;

const hashedPassword = bcryptjs.hashSync(password, 10);

  const user = new User({
    username,
    email,
    password : hashedPassword,
  });

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({
      message: "All field are required.",
    });
  }
  try{
    const saveUserData = await user.save();
    res.json({
      success: true,
      data: saveUserData,
      message: "User data save Successfully.",
    });
  }

  catch(error){
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export { postApisignup }
