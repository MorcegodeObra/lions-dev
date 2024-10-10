const {medicos} = require('../dados')
function listarM(req,res){
    res.status(200).send(medicos)
}
module.exports = listarM