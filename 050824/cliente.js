const prompt = require('prompt-sync')();
const servidor = require('./server');

let contatos = [
    {id: 1, nome: 'Gabriel', email: 'geefoliveira@gmail.com', contato: [42999802966,42936182268]},
    {id: 2, nome: 'Igor', email: 'igorenrique@gmail.com', contato: [42999802966,42936182268]}
];
let nome = 'Igor'
let contato = [42999802966,41936182268]
let email = 'salve'
let requisicaoAdicionar = {escolha: 1,
    dados:{nome,contato,email}
};

let requisicaoListar = {escolha : 2,
    dados:{contatos}
};

let requisicaoAtualizar = {escolha : 3,
    dados:{posicao: 0,nome,contato,email}
};

let requisicaoRemover = {escolha: 4,
    dados:{contatos,posicao : 1}
};

servidor(requisicaoListar)