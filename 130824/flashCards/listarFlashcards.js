function listarFlashCard(flashcards){
    if(flashcards ==0){
        console.log('Não há flashcards cadastrados. Retornando...');
    }else{
        flashcards.forEach(flashcards2 =>{
            console.log(`ID: ${flashcards2.id},Pergunta: ${flashcards2.pergunta},Resposta: ${flashcards2.resposta},ID Baralho: ${flashcards2.idbaralho}`);
            });
    };
}

module.exports = listarFlashCard