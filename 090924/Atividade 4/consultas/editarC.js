const {consultas} = require('../dados');
function editarM(req,res){
    console.log(req.body);
    const {id} = req.params;
    const consultas1 = consultas.find((liv)=>liv.id == id);
    if(!consultas1){
        return res.status(404).send({message: "Id não encontrado"});
    }{
    consultas1.id = id;
    consultas1.nome = req.body.nome;
    consultas1.idMedico = req.body.idMedico;
    consultas1.idPacientes = req.body.idPacientes;
    consultas1.Descricao = req.body.Descricao;
    };
    res.status(200).send({message:'Consulta atualizada com sucesso!', consultas1:consultas1});
};
module.exports = editarM