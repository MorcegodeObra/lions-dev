const {flashcards} = require('../dados')

function listarFlashCards(req,res){
    res.status(200).send(flashcards);
}

module.exports = listarFlashCards