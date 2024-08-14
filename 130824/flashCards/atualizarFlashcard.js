function atualizarFlashCard(update,flashcards,perguntaA,respostaA,idbaralhoA,temp1){
    let temp2 = flashcards[flashcards.findIndex(flashcards =>flashcards.id == update)]
        flashcards[temp1]=({id: temp2.id,pergunta: perguntaA, resposta: respostaA,idbaralho: idbaralhoA});
        console.log('Contato atualizado com sucesso!! Retornando...');
}

module.exports = atualizarFlashCard