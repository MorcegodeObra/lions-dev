const {pacientes} = require('../dados')

function deletarM(req,res){
    console.log(req.body);
    const {id} = req.params;
    const indice = pacientes.findIndex((alu)=>alu.id == id);
    if(indice ==-1){
        return res.status(404).send({message:'ID não localizado!'});
    };
    const deletado = pacientes.splice(indice,1);
    res.status(200).send({message: 'Tarefa de deletar realizada com sucesso!',pacientes:deletado});
}
module.exports = deletarM