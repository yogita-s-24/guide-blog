import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js"

dotenv.config();

const app = express();

app.use(express.json());

const connectDB = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI);
    if (conn) {
      console.log("MongoDB is connected Successfully.");
    }
  } catch (err) {
    console.log("Something went to wrong.");
  }
};

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}.`);
  connectDB();
});

app.use("/api/user", userRoutes);
app.use('/api/auth', authRoutes);


app.use((err, req, res, next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success : false,
    statusCode,
    message
  })
  next()
})
