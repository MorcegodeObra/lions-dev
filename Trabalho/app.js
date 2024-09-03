const express = require('express')
const app = express()
const porta = 7100

app.use(express.json())
//Livros
const atualizarLivro = require('./Livros/atualizarLivro')
const buscarPorAno = require('./Livros/buscarPorAno')
const buscarPorAutor = require('./Livros/buscarPorAutor')
const buscarPorGenero = require('./Livros/buscarPorGenero')
const buscarPorTítulo = require('./Livros/buscarPorTítulo')
const criarLivro = require('./Livros/criarLivro')
const deletarLivro = require('./Livros/deletarLivro')
const listarLivro = require('./Livros/listarLivro')
app.get('/Livros',listarLivro)
//Estudantes
const atualizarEstudante = require('./Estudantes/atualizarEstudante')
const buscarPorCurso = require('./Estudantes/buscarPorCurso')
const buscarPorMatricula = require('./Estudantes/buscarPorMatricula')
const buscarPorNome = require('./Estudantes/buscarPorNome')
const criarEstudante = require('./Estudantes/criarEstudante')
const deletarEstudante = require('./Estudantes/deletarEstudante')
const listarEstudante = require('./Estudantes/listarEstudante')
app.get('/Estudantes',listarEstudante)
//Alugueis
const atualizarAlguel = require('./Alugueis/atualizarAlguel')
const buscarPorData = require('./Alugueis/buscarPorData')
const buscarPorIDEstudante = require('./Alugueis/buscarPorIDEstudante')
const buscarPorIDLivro = require('./Alugueis/buscarPorIDLivro')
const criarAlguel = require('./Alugueis/criarAlguel')
const deletarAlguel = require('./Alugueis/deletarAlguel')
const listarAlguel = require('./Alugueis/listarAlguel')
app.get('/Alugueis',listarAlguel)

app.listen(porta,()=>{
    console.log(`Servidor rodando na porta http://localhost:${porta}`);
});

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
})