const {algueis} = require('../dados')
function criarAluguel(req,res){
    console.log(req.body)
    const novoAlguel = [{
        id: algueis[algueis.length-1].id+1,
        dataAlugel: req.body.dataAlugel,
        dataDevolucao: req.body.dataDevolucao,
        idLivro: req.body.idLivro,
        idEstudante: req.body.idEstudante
    }];
    algueis.push(novoAlguel);
    res.status(201).send({message:`Alguel adicionado`,algueis:novoAlguel})
}
module.exports = criarAluguel