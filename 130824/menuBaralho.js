const criarBaralho = require('./baralho/criarBaralho');
const atualizarBaralho = require('./baralho/atualizarBaralho');
const listarBaralho = require('./baralho/listarBaralhos');
const deletarBaralho = require('./baralho/deletarBaralho');
const baralhos = require('./data');
const prompt = require('prompt-sync')();

function menuBaralhos(menuP1){
console.log(`Seja bem vindo,abaixo estão as funções sobre baralho em funcionamento:
    1. Adicionar baralho
    2. Listar baralhos
    3. Atualizar baralho
    4. Remover baralho
    5. Voltar ao menu principal`);
    let escolha = prompt('Qual a função que vamos realizar conforme numeros acima?');
    switch (escolha){
        case '1':
            let nomeC = prompt('Qual o nome do baralho?')
            criarBaralho(baralhos,nomeC);
            menuBaralhos(menuP1)
            break;
        case '2':
            listarBaralho(baralhos);
            menuBaralhos(menuP1);
            break;
        case '3':
            listarBaralho(baralhos)
            let update = prompt('Qual o baralho gostaria de atualizar?')
            let temp = baralhos.findIndex(baralhos =>baralhos.id == update)
            if(temp<0 || temp>=baralhos.length){
                console.log('O numero do usuário não foi encontrado, retornando...')
            }else{
            let nomeA = prompt('Qual o nome do novo baralho?')
            atualizarBaralho(update,baralhos,nomeA,temp)
            }
            menuBaralhos(menuP1)
            break;
        case '4':
            listarBaralho(baralhos)
            let update1 = prompt('Qual o baralho gostaria de atualizar?')
            let temp1 = baralhos.findIndex(baralhos =>baralhos.id == update1)
            if(temp1<0 || temp1>=baralhos.length){
                console.log('O numero do usuário não foi encontrado, retornando...')
            }else{
            deletarBaralho(temp1,baralhos)
            }
            menuBaralhos(menuP1)
            break;
        case '5':
            menuP1();
            break;
        default:
            console.log('Não entendi seu número,digite novamente...');
            menuBaralhos();
            break;
    };
};

module.exports = menuBaralhos