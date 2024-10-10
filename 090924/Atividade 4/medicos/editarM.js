const {medicos} = require('../dados');
function editarM(req,res){
    console.log(req.body);
    const {id} = req.params;
    const medicos1 = medicos.find((liv)=>liv.id == id);
    if(!medicos1){
        return res.status(404).send({message: "Id não encontrado"});
    }{
    medicos1.id = id;
    medicos1.nome = req.body.nome;
    medicos1.especialidade = req.body.especialidade;
    };
    res.status(200).send({message:'Medico atualizado com sucesso!', medicos1:medicos1});
};
module.exports = editarM