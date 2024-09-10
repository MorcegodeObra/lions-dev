const {algueis} = require('../dados')
function atualizarAluguel(req,res){
    console.log(req.body);
    const {id} = req.params;
    const Algueis = algueis.find((est)=>est.id == id);
    if(!Algueis){
        return res.status(404).send({message: "Id não encontrado"});
    }{
    Algueis.id = id;
    Algueis.dataAlugel = req.body.dataAlugel;
    Algueis.dataDevolucao = req.body.dataDevolucao;
    Algueis.idLivro = req.body.idLivro;
    Algueis.idEstudante = req.body.idEstudante;
    };
    res.status(200).send({message:'algueis atualizado com sucesso!', algueis:Algueis});
}
module.exports = atualizarAluguel