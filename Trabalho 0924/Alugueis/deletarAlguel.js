const {algueis} = require('../dados');
function deletarAluguel(req,res){
    console.log(req.body);
    const {id} = req.params;
    const indice = algueis.findIndex((alu)=>alu.id == id);
    if(indice ==-1){
        return res.status(404).send({message:'ID não localizado!'});
    };
    const deletado = algueis.splice(indice,1);
    res.status(200).send({message: 'Tarefa de deletar realizada com sucesso!',algueis:deletado});
};
module.exports = deletarAluguel