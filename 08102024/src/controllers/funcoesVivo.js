import Vivo from "../models/modelo.js"

export const criarVivo = async(req,res)=>{
    try {
        const novoVivo = await Vivo.create(req.body);
        res.status(200).json(novoVivo)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
};

export const listarVivo = async(req,res)=>{
    try {
        const Vivos = await Vivo.find().exec()
        return res.status(200).json(Vivos)
    } catch (error) {
        res.status(400).json({message: error.message})        
    }
};

export const atualizarVivo = async(req,res)=>{
    try {
        const atualizarVivos = await Vivo.findByIdAndUpdate(req.params.id,req.body).exec()
        return res.status(200).json(atualizarVivos)
    } catch (error) {
        return res.status(400).json({message: error.message })
    };
};

export const deletarVivo = async(req,res)=>{
    try {
        const vivoDeletado = await Vivo.findByIdAndDelete(req.params.id, req.body).exec()
        return res.status(200).json(vivoDeletado)
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}