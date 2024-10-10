import mongoose, { Schema,model } from "mongoose";

const vivoSchema = new Schema({
    nome:{
        type: String,
        required: true
    },
    dataNascimento:{
        type: Date,
        required:true
    },
    cpf:{
        type:Number,
        required:true
    },
    telefone:{
        type:[Number],
        required:true
    }
})
const Vivo = mongoose.model("Vivo",vivoSchema)
export default Vivo
