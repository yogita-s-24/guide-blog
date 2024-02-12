import mongoose from "mongoose";
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
  
export default connectDB;