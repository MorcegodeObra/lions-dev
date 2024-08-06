const prompt = require('prompt-sync')();
const {adicionar} = require('./adicionar');
const {atualizar} = require('./atualizar');
const {listar} = require('./listar');
const {remover} = require('./remover');
const {residencias} = require('./residencias');

let update
let posicao
let nome
let rua
let resi
let moradores = []

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
            formulário();
            adicionar(residencias,menuPrincipal,nome,rua,resi,moradores);
            break;
        case '2':
            listar(residencias,menuPrincipal);
            menuPrincipal();
            break;
        case '3':
            listar(residencias,menuPrincipal);
            update = parseInt(prompt('Qual residencia gostaria de atualizar?'));
            posicao = residencias.findIndex(residencia=> residencia.id == update);
            if(posicao<0 || posicao>=residencias.length){
                console.log('Numero não reconhecido ou não existente,retornando para o menu...');
                menuPrincipal();
            }else{
                formulário();
                atualizar(residencias,posicao,nome,rua,resi,moradores);
            }
            menuPrincipal();
            break;
        case '4':
            listar(residencias,menuPrincipal);
            update = parseInt(prompt('Qual residencia gostaria de remover?'));
            posicao = residencias.findIndex(residencia=> residencia.id == update);
            if(posicao<0 || posicao>=residencias.length){
                console.log('Numero não reconhecido ou não existente,retornando para o menu...');
                menuPrincipal();
            }else{
                remover(residencias,posicao);
            }
            menuPrincipal();
            break;
        case '5':
            break;
        default:
            console.log('Não entendi seu número,digite novamente...');
            menuPrincipal();
            break;
    };
};

function formulário(){
    nome = prompt('Qual o nome da Vila?');
    rua = prompt('Qual o nome da Rua?');
    resi = prompt('Qual o numero da residencia?');
    let i =0;
    while(i==0){
        let morador = prompt('Qual o nome do morador?');
        moradores.push(morador);
        let opcao = prompt('Gostaria de adicionar outro morador?(sim)(nao)').toLowerCase();
        if(opcao =='nao'){
            i++
        };
    };
};

menuPrincipal();