const {pacientes} = require('../dados')
function listarM(req,res){
    res.status(200).send(pacientes)
}
module.exports = listarM