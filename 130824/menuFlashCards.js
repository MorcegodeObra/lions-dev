const prompt = require('prompt-sync')();
const {baralhos} = require('./data');
const {flashcards} = require('./data');
const listarBaralho = require('./baralho/listarBaralhos')
const criarFlashCard = require('./flashCards/criarFlashcard');
const atualizarFlashCard = require('./flashCards/atualizarFlashcard');
const listarFlashCard = require('./flashCards/listarFlashcards');
const listarFlashCardPorBaralho = require('./flashCards/listarFlashcardsPorBaralho');
const deletarFlashCard = require('./flashCards/deletarFlashcard');
const buscarFlashCardsPorBaralho = require('./flashCards/buscarFlashcardsPorBaralho');
const buscarFlashCardsPorPergunta = require('./flashCards/buscarFlashcardsPorPergunta');

function menuFlashCards(menuP2){
console.log(`Seja bem vindo,abaixo estão as funções de FlashCard em funcionamento:
    1. Criar FlashCard
    2. Listar FlashCard
    3. Listar FlashCard por Baralho
    4. Atualizar FlashCard
    5. Remover FlashCard
    6. Buscar FlashCard por Baralho
    7. Buscar FlashCard por Pergunta
    8. Sair`);
    let escolha = prompt('Qual a função que vamos realizar conforme numeros acima?');
    switch (escolha){
        case '1':
            let perguntaC = prompt('Qual a pergunta do FlashCard?')
            let respostaC = prompt('Qual a resposta do FlashCard?')
            console.log('FlashCards disponiveis:')
            listarBaralho(baralhos)
            let idbaralhoC = prompt('Qual o Id do baralho?')
            let temp = baralhos.findIndex(baralhos =>baralhos.id == idbaralhoC)
            if(temp<0 || temp>=baralhos.length){
                console.log('Baralho não existente,retornando ao menu...')
            }else{
                criarFlashCard(flashcards,perguntaC,respostaC,idbaralhoC)
            }
            menuFlashCards(menuP2)
            break;
        case '2':
            listarFlashCard(flashcards)
            menuFlashCards(menuP2)
            break;
        case '3':
            listarFlashCardPorBaralho(flashcards)
            menuFlashCards(menuP2)
            break;
        case '4':
            listarFlashCard(flashcards)
            let update = prompt('Qual o FlashCard gostaria de atualizar?')
            let temp1 = flashcards.findIndex(flashcards =>flashcards.id == update)
            if(temp1<0 || temp1>=flashcards.length){
                console.log('O numero do usuário não foi encontrado, retornando...')
            }else{
                let perguntaA = prompt('Qual a nova pergunta?')
                let respostaA = prompt('Qual a nova resposta?')
                listarBaralho(baralhos)
                let idbaralhoA = prompt('Qual o Id do baralho?')
                let temp2 = baralhos.findIndex(baralhos =>baralhos.id == idbaralhoA)
                if(temp2<0 || temp2>=baralhos.length){
                    console.log('Baralho não existente,retornando ao menu...')
                }else{
                atualizarFlashCard(update,flashcards,perguntaA,respostaA,idbaralhoA,temp1)
                }
            }
            menuFlashCards(menuP2)
            break;
        case '5':
            listarFlashCard(flashcards)
            let update1 = prompt('Qual o FlashCard gostaria de atualizar?')
            let temp2 = flashcards.findIndex(flashcards =>flashcards.id == update1)
            if(temp2<0 || temp2>=flashcards.length){
                console.log('O numero do usuário não foi encontrado, retornando...')
            }else{
            deletarFlashCard(temp2,flashcards)
            }
            menuFlashCards(menuP2)
            break;
        case '6':
            listarBaralho(baralhos)
            let idbaralhoB = prompt('Qual o ID do baralho gostaria de saber os FlashCards incluidos?')
            buscarFlashCardsPorBaralho(flashcards,idbaralhoB)
            menuFlashCards(menuP2)
            break;
        case '7':
            let perguntaB = prompt('Qual a pergunta do FlashCard?')
            buscarFlashCardsPorPergunta(flashcards,perguntaB)
            menuFlashCards(menuP2)
            break;
        case '8':
            menuP2()
            break;
        default:
            console.log('Não entendi seu número,digite novamente...');
            menuFlashCards(menuP2);
            break;
    };
};

module.exports = menuFlashCards
