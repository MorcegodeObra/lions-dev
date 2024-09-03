const {flashcards} = require('../dados')

function deletarFlashcards(req,res){
    const {id} = req.params;
    const indice = flashcards.findIndex((b)=>b.id == id);
    if(indice === -1){
        return res.status(404).send('FlashCard não encontrado!');
    };
    const flascardDeletado = flashcards.splice(indice,1);
    res.status(200).send({
        message: "FlashCard deletado com sucesso",
        Flashcard: flascardDeletado
    });
}

module.exports = deletarFlashcards