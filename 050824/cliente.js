const prompt = require('prompt-sync')();
const servidor = require('./server');

let nome = 'Igor'
let contato = [42999802966,41936182268]
let email = 'salve'

adicionar(nome,email,contato)
function adicionar(nome,email,contato){
    let requisicao = {escolha: 1 ,dados:{nome,email,contato}}
    console.log(servidor(requisicao))
}

function listar(){
    let requisicao = {escolha: 2}
}
function atualizar(){
    let requisicao = {escolha: 1 ,dados:{nome,email,contato}}
    servidor(requisicao)
}

/*let requisicaoAdicionar = {escolha: 1,
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
};*/