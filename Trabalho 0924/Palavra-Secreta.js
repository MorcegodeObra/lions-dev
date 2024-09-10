const express = require('express');
const app = express();
const porta = 8000;

app.use(express.json());

// Rotas para as páginas do enigma

// Página 1 (Dica inicial)
app.get('/', (req, res) => {
    res.send('Bem-vindo ao enigma SMART! Sua primeira dica é: "A resposta está na boca do leão."');
});

// Página 2
app.get('/Bumblebee',(req, res) => {
    res.send('Dica 2: "Nem só de pão vive o homem,mas com certeza no céu tem pão."');
});

// Página 3
app.get('/Ironhide', (req, res) => {
    res.send('Dica 3: "Até agora estava facil,tá na hora de dificultar as coisas, o nome do autobot que você digitou tem um nome engraçado né o que significa?"');
});

// Página 4
app.get('/StarWars', (req, res) => {
    res.send('Dica 4: "Legal tá melhorando,se nós somos a força qual seria o lado negro da força então?"');
});

// Página 5
app.get('/Decepticons', (req, res) => {
    res.send('Dica 5: "Para dar continuidade é necessário voltar para o mundo dos Transformes,onde ninguém pensou em procurar fica escondido onde toda tecnologia fica guardada"');
});

// Página 6
app.get('/SalaTecnica',(req, res) => {
    res.send('Dica 6: "E se o lider do Decepticons fosse numeros?."');
});

// Página 7 (Final)
app.get('/63428766',(req, res) => {
    res.send('Parabéns! Você solucionou o enigma. A palavra secreta do dia é: "Megatron", retire seu premio comigo!');
});

// Tratamento de erro
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta http://localhost:${porta}`);
});
