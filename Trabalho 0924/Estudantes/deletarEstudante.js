const {estudantes} = require('../dados')
function deletarEstudante(req,res){
    console.log(req.body);
    const {id} = req.params;
    const indice = estudantes.findIndex((alu)=>alu.id == id);
    if(indice ==-1){
        return res.status(404).send({message:'ID não localizado!'});
    };
    const deletado = estudantes.splice(indice,1);
    res.status(200).send({message: 'Tarefa de deletar realizada com sucesso!',estudantes:deletado});
}

module.exports = deletarEstudante