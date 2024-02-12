import express, { json } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js"
import connectDB from "./middlewares/db.js"
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use("/api/user", userRoutes);
app.use('/api/auth', authRoutes);

connectDB() // database connection

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}.`);
});




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
