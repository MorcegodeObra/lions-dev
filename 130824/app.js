const prompt = require('prompt-sync')();
const menuFlashCards = require('./menuFlashCards');
const menuBaralhos = require('./menuBaralho');

function menuPrincipal(){
console.log(`Seja bem vindo,abaixo estão as funções em funcionamento:
    1. Menu Baralhos
    2. Menu de FlashCards
    3. Sair`);
    let escolha = prompt('Qual a função que vamos realizar conforme numeros acima?');
    switch (escolha){
        case '1':
            menuBaralhos(menuPrincipal);
            break;
        case '2':
            menuFlashCards(menuPrincipal);
            break;
        case '3':
            break
        default:
            console.log('Não entendi seu número,digite novamente...');
            menuPrincipal();
            break;
    };
};

menuPrincipal();

module.exports = menuPrincipal