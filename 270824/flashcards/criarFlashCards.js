const {flashcards,baralhos} = require('../dados')

function criarFlashCards(req,res){
    console.log(req.body);
    const novoFlascard = {
        id: baralhos.length + 1,
        pergunta: req.body.pergunta,
        resposta: req.body.resposta,
        idbaralho: req.body.baralho
    };
    flashcards.push(novoFlascard);
    res.status(201).send({message: 'FlashCard criado com sucesso!',baralhos:novoFlascard});
}

module.exports = criarFlashCards