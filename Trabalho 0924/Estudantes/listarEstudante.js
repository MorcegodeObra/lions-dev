const {estudantes} = require('../dados')
function listarEstudante(){
    res.status(200).send(estudantes)
}

module.exports = listarEstudante