const {pacientes} = require('../dados')

function criarM(req,res){
    console.log(req.body)
    const novoPaciente = [{
        id: pacientes[pacientes.length-1].id+1,
        nome: req.body.nome,
        dataNascimento: req.body.dataNascimento,
    }];
    pacientes.push(novoPaciente);
    res.status(201).send({message:'Paciente adicionado',pacientes:novoPaciente})
}
module.exports = criarM