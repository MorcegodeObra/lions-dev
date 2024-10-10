import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectDB = async()=>{
    mongoose
    .connect("mongodb://localhost:27017/funeraria")
    .then(()=> console.log('Conecatado ao MongoDB'))
    .catch((error) => console.log(error))
}

export default connectDB