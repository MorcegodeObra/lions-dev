const express = require('express')
const app = express()
const porta = 7100

app.use(express.json())

const livrosRoutes = require('./Rotas/livros');
const estudantesRoutes = require('./Rotas/estudantes');
const alugueisRoutes = require('./Rotas/algueis');

app.use('/Livros',livrosRoutes)
app.use('/Estudantes',estudantesRoutes)
app.use('/Alugueis',alugueisRoutes)

app.listen(porta,()=>{
    console.log(`Servidor rodando na porta http://localhost:${porta}`);
});

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
})