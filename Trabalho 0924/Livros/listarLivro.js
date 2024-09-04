const {livros} = require('../dados')
function listarLivro(req,res){
    res.status(200).send(livros)
}
module.exports = listarLivro