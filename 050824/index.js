const prompt = require('prompt-sync')();
const {adicionar} = require('./adicionar');
const {atualizar} = require('./atualizar');
const { contatos } = require('./contatos');
const {listar} = require('./listar');
const {remover} = require('./remover');

let update
let posicao
let nome = ''
let contato = []
let email = ''

function menuPrincipal(){
console.log(`Seja bem vindo,abaixo estão as funções em funcionamento:
    1. Adicionar usuário
    2. Listar usuários
    3. Atualizar usuário
    4. Remover usuário
    5. Sair`);
    let escolha = prompt('Qual a função que vamos realizar conforme numeros acima?');
    switch (escolha){
        case '1':
            nome = prompt('Qual o nome do usuário?');
            email = prompt('Qual o email do usuário?');
            let i =0;
            contato = []
            let emailExistente = contatos.find(contato => contato.email === email)
            if(emailExistente == undefined){
            while(i==0){
                let contato2 = prompt('Qual o contato do usuário?');
                contato.push(contato2);
                let opcao = prompt('Gostaria de adicionar outro contato?(sim)(nao)').toLowerCase();
                if(opcao =='nao'){
                    i++
                };
            };
            let verificacao
            adicionar(contatos,menuPrincipal,nome,email,contato);
        }else{
            console.log("Email já existente crie novamente, retornando...")
            menuPrincipal()
        }
            break;
        case '2':
            listar(contatos,menuPrincipal);
            menuPrincipal();
            break;
        case '3':
            listar(contatos,menuPrincipal);
            update = parseInt(prompt('Qual usuário gostaria de atualizar?'));
            posicao = contatos.findIndex(contatos=> contatos.id == update);
            if(posicao<0 || posicao>=contatos.length){
                console.log('Numero não reconhecido ou não existente,retornando para o menu...');
                menuPrincipal();
            }else{
                let selecao = ''
                do{
                    selecao = prompt('Gostaria de atualizar o nome,email,contato ou sair?').toLowerCase()
                    switch(selecao){
                        case 'nome':
                        nome = prompt('Qual o nome do usuário?');
                        atualizar(contatos,posicao,nome,email,contato,update);
                        break
                        case 'email':
                        email = prompt('Qual o email do usuário?');
                        let emailExistente = contatos.find(contato => contato.email === email);
                        if(emailExistente == undefined){
                            atualizar(contatos,posicao,nome,email,contato,update);
                        }else{
                            console.log('Email existente, tente atualizar novamente...')
                        }
                        break
                        case 'contato':
                        contato = [];
                        let i =0;
                        while(i==0){
                            let contato2 = prompt('Qual o contato do usuário?');
                            contato.push(contato2);
                            let opcao = prompt('Gostaria de adicionar outro contato?(sim)(nao)').toLowerCase();
                            if(opcao =='nao'){
                                i++;
                            };
                        };
                    atualizar(contatos,posicao,nome,email,contato,update);
                    break
                    default:
                    console.log('Não entendi,vamos tentar novamente...')
                    };                
                }while(selecao !== 'sair')
            };
            menuPrincipal();
            break;
        case '4':
            listar(contatos,menuPrincipal);
            update = parseInt(prompt('Qual usuário gostaria de remover?'));
            posicao = contatos.findIndex(contatos=> contatos.id == update);
            if(posicao<0 || posicao>=contatos.length){
                console.log('Numero não reconhecido ou não existente,retornando para o menu...');
                menuPrincipal();
            }else{
                let choice = prompt('Tem certeza que gostaria de remover esse contato?').toLowerCase()
                if(choice =='sim'){
                remover(contatos,posicao);
                }else{
                    console.log('Contato não foi removido, retornando...')
                }
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

menuPrincipal();