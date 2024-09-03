const {flashcards} = require('../dados')

function atualizarFlashcards(req,res){
    const {id} = req.params;
    const novaPergunta = req.body.pergunta;
    const novaResposta = req.body.resposta;
    const novaIdBaralho = req.body.idbaralho;
    const flashcard = flashcards.find((b)=>b.id==id);
    if(!flashcard){
        return res.status(404).send({message: 'FlashCard não encontrado'});
    };
    flashcard.pergunta = novaPergunta
    flashcard.resposta = novaResposta
    flashcard.idbaralho = novaIdBaralho
    res.status(200).send({
        message: 'FlashCard atualizado com sucesso!',
        flashcard: {novaPergunta,novaResposta,novaIdBaralho}
    });
}

module.exports = atualizarFlashcards