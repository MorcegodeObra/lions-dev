const {baralhos} = require('../dados');

function listarBaralho(req,res){
        res.status(200).send(baralhos);
}
module.exports = listarBaralho