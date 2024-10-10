const express = require('express');
const app = express();
const porta = 8000;

app.use(express.json());

// História do caso 2 (explosão causada por sobrecarga do computador via software)
const crime = {
    historia: `
        <h1>O Colapso da Arena Virtual</h1><br>
        Durante uma intensa competição de e-sports, o jogador profissional <strong>Lucas Moreira</strong> morreu de forma misteriosa após a explosão de seu computador.<br>
        A explosão foi causada por uma sobrecarga de energia manipulada via software.<br>
        Sherlock Holmes e seu fiel parceiro, Dr. John Watson, são chamados para investigar.<br>
        A vítima estava envolvida em uma competição de alto nível, e algo mais profundo parece estar em jogo.<br>
        Alguém com grande conhecimento técnico deve ter causado o acidente.<br>
        <br>
        <strong>O desafio:</strong> Identificar o assassino, a arma do crime e o motivo.<br>
        Locais: arena/aquarios/areaDoLeao/salaDeAula/cozinha/banheiros/estacionamento <br>
        As pistas estão espalhadas por vários locais. Só um detetive atento será capaz de conectá-las e resolver o caso. A palavra secreta será o nome do assassino.<br>
    `,
    pistas: {
        assassino: "Eduardo Silva, o programador principal do evento",
        arma: "Sobrecarga de energia via software, causando a explosão do computador",
        motivo: "Lucas descobriu que Eduardo estava manipulando os resultados da competição para favorecer apostas ilegais."
    }
};
// Rota para exibir a história do crime
app.get('/', (req, res) => {
    res.send(`${crime.historia}`);
});

// Rota para exibir a história do crime
app.get('/arena', (req, res) => {
    res.send(`Lucas Moreira estava no auge da competição quando seu computador explodiu de maneira devastadora.<br>Alguém com habilidades avançadas de programação manipulou o sistema. A questão é: quem teria os conhecimentos e o motivo?<br>`);
});

// Pista no Aquário
app.get('/aquarios', (req, res) => {
    res.send(`
        No aquário, Holmes observa algo intrigante.<br>
        O sistema de monitoramento de água, aparentemente simples, foi modificado.<br>
        Holmes descobre que <strong>Paulo Ferreira</strong>, um dos técnicos da competição, usou o aquário para testar variações extremas de energia.<br>
        Seria Paulo o responsável, ou ele estava apenas testando o sistema?<br>
    `);
});

// Pista na Área do Leão
app.get('/areaDoLeao', (req, res) => {
    res.send(`
        Na área dos leões, Holmes descobre que as câmeras de segurança estavam desligadas no momento do incidente.<br>
        Ele também nota que <strong>Eduardo Silva</strong>, o programador principal do evento, tinha total controle sobre os sistemas de segurança.<br>
        Eduardo tinha o conhecimento técnico necessário para manipular os servidores e os sistemas de energia.<br>
        Mas teria ele um motivo para matar Lucas?<br>
    `);
});

// Pista na Sala de Aula
app.get('/salaDeAula', (req, res) => {
    res.send(`
        Na sala de aula, Holmes encontra um laptop com códigos de energia avançados.<br>
        O código parece estar relacionado à distribuição de energia em eventos.<br>
        <strong>Renata Oliveira</strong>, uma engenheira de software da equipe técnica, havia testado esse código recentemente.<br>
        Estaria ela envolvida ou teria seu trabalho sido manipulado por outra pessoa?<br>
    `);
});

// Pista na Cozinha
app.get('/cozinha', (req, res) => {
    res.send(`
        Na cozinha, Holmes observa uma anomalia no sistema de refrigeração.<br>
        <strong>Carla Mendes</strong>, a gerente de operações, menciona que o sistema teve picos de energia recentemente.<br>
        Esses picos podem ter sido um teste de sobrecarga semelhante ao que causou a explosão no computador de Lucas.<br>
        Mas quem teria causado essas alterações?<br>
    `);
});

// Pista nos Banheiros
app.get('/banheiros', (req, res) => {
    res.send(`
        Nos banheiros, Sherlock encontra um pedaço de papel com uma sequência de números.<br>
        A sequência coincide com uma senha para acessar o sistema de controle de energia da Arena.<br>
        A senha pertencia a <strong>Eduardo Silva</strong>, mas ele afirma que a perdeu recentemente.<br>
        Quem teria usado sua senha para causar o desastre? E estaria Eduardo falando a verdade?<br>
    `);
});

// Rota bônus no Estacionamento
app.get('/estacionamento', (req, res) => {
    res.send(`
        No estacionamento,essa parte ficou meio rasgada,talvez no local a pista esteja completa...
    `);
});

// Tratamento de erro
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

// Iniciar o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando na porta http://localhost:${porta}`);
});
