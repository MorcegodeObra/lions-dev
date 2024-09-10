const {consultas} = require('../dados')

function deletarC(req,res){
    console.log(req.body);
    const {id} = req.params;
    const indice = consultas.findIndex((alu)=>alu.id == id);
    if(indice ==-1){
        return res.status(404).send({message:'ID não localizado!'});
    };
    const deletado = consultas.splice(indice,1);
    res.status(200).send({message: 'Tarefa de deletar realizada com sucesso!',consultas:deletado});
}
module.exports = deletarC