const {livros} = require('../dados')
function deletarLivro(req,res){
    console.log(req.body);
    const {id} = req.params;
    const indice = livros.findIndex((alu)=>alu.id == id);
    if(indice ==-1){
        return res.status(404).send({message:'ID não localizado!'});
    };
    const deletado = livros.splice(indice,1);
    res.status(200).send({message: 'Tarefa de deletar realizada com sucesso!',livros:deletado});
}
module.exports = deletarLivro