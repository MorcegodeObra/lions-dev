import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectDB = async()=>{
    mongoose
    .connect(process.env.linkBancoDados)
    .then(()=> console.log('Conecatado ao MongoDB'))
    .catch((error) => console.log(error))
}

export default connectDB