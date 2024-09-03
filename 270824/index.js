const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const criarBaralho = require('./baralho/criarBaralho')
app.post('/baralho',criarBaralho);

const listarBaralho = require('./baralho/listarBaralho')
app.get('/baralho',listarBaralho);

const atualizarBaralho = require('./baralho/atualizarBaralho')
app.put('/baralho/:id', atualizarBaralho)

const deletarBaralho = require('./baralho/deletarBaralho')
app.delete('/baralho/:id',deletarBaralho)

const criarFlashCards = require('./flashcards/criarFlashCards')
app.post('/flashcards',criarFlashCards);

const listarFlashCards = require('./flashcards/listarFlashCards')
app.get('/flashcards',listarFlashCards);

const atualizarFlashcards = require('./flashcards/atualizarFlashcards')
app.put('/flashcards/:id',atualizarFlashcards);

const deletarFlashCards = require('./flashcards/deletarFlashCards')
app.delete('/flashcards/:id',deletarFlashCards);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    });
    
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
    });