const {estudantes} = require('../dados')

function criarEstudante(req,res){
    console.log(req.body)
    const novoEstudante = [{
        id: estudantes[estudantes.length-1].id+1,
        nome: req.body.nome,
        matricula: req.body.matricula,
        curso: req.body.curso,
        ano: req.body.ano
    }];
    estudantes.push(novoEstudante);
    res.status(201).send({message:`Estudante adicionado`,estudantes:novoEstudante})
}

module.exports = criarEstudante