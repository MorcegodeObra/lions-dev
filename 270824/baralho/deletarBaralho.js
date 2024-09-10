const {baralhos} = require('../dados');

function deletarBaralho(req,res){
    const {id} = req.params;
    const indice = baralhos.findIndex((b)=>b.id == id);
    if(indice === -1){
        return res.status(404).send('Baralho não encontrado!');
    };
    const baralhoDeletado = baralhos.splice(indice,1);
    res.status(200).send({
        message: "Baralho deletado com sucesso",
        baralho: baralhoDeletado
    });
};
module.exports = deletarBaralho