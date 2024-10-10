const {medicos} = require('../dados')

function criarM(req,res){
    console.log(req.body)
    const novoMedico = [{
        id: medicos[medicos.length-1].id+1,
        nome: req.body.nome,
        especialidade: req.body.especialidade,
    }];
    medicos.push(novoMedico);
    res.status(201).send({message:'Médico adicionado',medicos:novoMedico})
}
module.exports = criarM