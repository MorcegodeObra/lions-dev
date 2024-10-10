const {consultas} = require('../dados')
function listarM(req,res){
    res.status(200).send(consultas)
}
module.exports = listarM