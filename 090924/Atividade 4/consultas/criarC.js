const {consultas} = require('../dados')

function criarC(req,res){
    console.log(req.body)
    const novaConsulta = [{
        id: consultas[consultas.length-1].id+1,
        data: req.body.data,
        idMedico: req.body.idMedico,
        idPacientes: req.body.idPacientes,
        Descricao: req.body.Descricao
    }];
    consultas.push(novaConsulta);
    res.status(201).send({message:'Consulta adicionada',consultas:novaConsulta})
}
module.exports = criarC