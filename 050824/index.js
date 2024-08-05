const prompt = require('prompt-sync')();
const {adicionar} = require('./adicionar');
const {atualizar} = require('./atualizar');
const {listar} = require('./listar');
const {remover} = require('./remover');
const {residencias} = require('./residencias');

function menuPrincipal(){
console.log(`Seja bem vindo,abaixo estão as funções em funcionamento:
    1. Adicionar Residencias
    2. Listar Residencias
    3. Atualizar Residencias
    4. Remover Residencias
    5. Sair`);
    let escolha = prompt('Qual a função que vamos realizar conforme numeros acima?');
    switch (escolha){
        case '1':
            adicionar(prompt,residencias,menuPrincipal);
            break;
        case '2':
            listar(residencias,menuPrincipal);
            menuPrincipal();
            break;
        case '3':
            listar(residencias,menuPrincipal);
            atualizar(residencias,menuPrincipal,prompt);
            break;
        case '4':
            listar(residencias,menuPrincipal);
            remover(residencias,menuPrincipal,prompt);
            break;
        case '5':
            break;
        default:
            console.log('Não entendi seu número,digite novamente...');
            menuPrincipal();
            break;
    };
};

menuPrincipal();