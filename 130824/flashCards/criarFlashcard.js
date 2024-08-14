function criarFlashCard(flashcards,perguntaC,respostaC,idbaralhoC){
    let id = flashcards[flashcards.length-1].id+1
    flashcards.push({id: id,pergunta: perguntaC, resposta: respostaC,idbaralho: idbaralhoC});
    console.log('Baralho adicionado com sucesso!! Retornando...');
}

module.exports = criarFlashCard