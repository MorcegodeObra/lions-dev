const {pacientes} = require('../dados');
function editarM(req,res){
    console.log(req.body);
    const {id} = req.params;
    const pacientes1 = pacientes.find((liv)=>liv.id == id);
    if(!pacientes1){
        return res.status(404).send({message: "Id não encontrado"});
    }{
    pacientes1.id = id;
    pacientes1.nome = req.body.nome;
    pacientes1.dataNascimento = req.body.dataNascimento;
    };
    res.status(200).send({message:'Medico atualizado com sucesso!', pacientes1:pacientes1});
};
module.exports = editarM