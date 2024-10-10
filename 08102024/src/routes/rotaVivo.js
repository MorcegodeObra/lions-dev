import { Router } from "express";
import {criarVivo,listarVivo,atualizarVivo,deletarVivo} from "../controllers/funcoesVivo.js"

const routerVivo = Router();

routerVivo
    .route("/")
    .post((req,res)=> criarVivo(req,res))

routerVivo
    .route("/")
    .get((req,res)=> listarVivo(req,res))

routerVivo
    .route("/:id")
    .put((req,res)=> atualizarVivo(req,res))

routerVivo
    .route("/:id")
    .delete((req,res)=> deletarVivo(req,res))
    
export default routerVivo