const express = require('express')
const app = express()
const porta = 8001

app.use(express.json())

const rotaConsultas = require('./consultas/consultas');
const rotaMedicos = require('./medicos/medicos');
const rotaPacientes = require('./pacientes/pacientes');

app.use('/Consultas',rotaConsultas);
app.use('/Medicos',rotaMedicos);
app.use('/Pacientes',rotaPacientes);

app.listen(porta,()=>{
    console.log(`Servidor rodando na porta http://localhost:${porta}`)
})

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send({message: "Algo deu errado"})
})