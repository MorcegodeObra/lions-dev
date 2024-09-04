const {algueis} = require('../dados')
function listarAluguel(){
    res.status(200).send(algueis)
}
module.exports = listarAluguel