# Trabalho 09/2024

## Inicio

Esse trabalho é referente à um trabalho realizado no Curso Lions Startups para fins academicos, o trabalho é para criar um API utilizando um servidor local para utilizar as funções POST, GET, PUT e DELETE utlizando o PostMan.

A ideia do trabalho era criar um servidor que realiza funções como CRUD, Criar, Listar, Atulizar e Remover os dados do banco de dados, os dados utlizados são referentes a uma escola/faculdade on teremos os alunos cadastrados, livros cadstrados e conforme um aluno for emprestando livros do centro de ensino ele vai realizando solicitações de algueis.

### Servidor

No servidor os principais comandos utlizados são:
```javascript
const express = require('express')
const app = express()
const porta = 8000

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
```
A principal biblioteca utilizada para fazer tudo rodar foi o Express, com as funções APP e ROUTER, APP para rodas as funções e ROUTER para poder deixar as rotas masi modularizadas.

## Algueis

Para os alugueis tivemos o sistema principal CRUD e com as buscas por data, ID do estudante e ID do livro.
As principais informações do vetor são:

```javascript
let algueis = [
    {id: 1,dataAlugel: 23,dataDevolucao: 15,idLivro: 1,idEstudante: 1},
    {id: 2,dataAlugel: 23,dataDevolucao: 15,idLivro: 2,idEstudante: 1},
];
```
## Estudantes
Já para os estudantes o sistema CRUD também foi utilizado e as buscas foram por curso, matricula e nome.
As principais informações do vetor são:
```javascript
let estudantes = [
    {id: 1,nome: "Gabriel",matricula: "13653713",curso: "Eng. Civil",ano: 1999},
    {id: 2,nome: "Murilo",matricula: "14567890",curso: "Eng. Agronomo",ano: 2005},
];
```
## Livros
Já para os livros o sistema CRUD também foi utilizado e as buscas foram por ano, autor, genero e titulo.
As principais informações do vetor são:
```javascript
let livros = [
    {id: 1,titulo: "Dom Quixote",autor: "Miguel",ano: 1999,genero: "Romance"},
    {id: 2,titulo: "Dom",autor: "Miguel",ano: 2000,genero: "Ação"}
];
```
## Teste

Para testar o programa foi utlizado o comando:
```bash
 node app.js
```
Assim iniciando o servidor no :
```bash
http://localhost:8000
```
Para acessar as rota dos livros será necessário utlizar barra e o sistema a ser utlizado, por exemplo:
```bash
/Livros ou /Estudantes ou /Alugueis
```
Para as criações o comando utlizado foi POST, para listar o vetor, GET, para atualizar o vetor,PUT e deletar no DELETE.

### Observações extras:

Para fazer atualizações é necessário passar o id no parametros da pagina, por exemplo:
```bash
/Livros/1 ou 2 ou ...
```
E as informações no corpo da requisição:
```javascript
    "titulo": "Dom Quixote"
    "autor": "Miguel"
    "ano": 1999
    "genero": "Romance"}
```
Para deletetar somente o id nos parametros da rota.

Para as buscar especificas será necessário passar a informação que será localizada nos parametros da pagina também, não podendo ser utlizado os parametros do corpo da requisição.