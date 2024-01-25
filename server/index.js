import express, { json }  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const connectDB = () =>{
    try{
        const conn = mongoose.connect(process.env.MONGO_URI);
        if(conn){
            console.log("MongoDb is connected Successfully.")
        }

    }catch(err){
        console.log("Something went to wrong.");

    }
}
connectDB();

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})