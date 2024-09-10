const {livros} = require('../dados')

function criarLivro(req,res){
    console.log(req.body)
    const novoLivro = [{
        id: livros[livros.length-1].id+1,
        titulo: req.body.titulo,
        autor: req.body.autor,
        ano: req.body.ano,
        genero: req.body.genero
    }];
    livros.push(novoLivro);
    res.status(201).send({message:'Livro adicionado',livros:novoLivro})
}
module.exports = criarLivro