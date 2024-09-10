const {livros} = require('../dados');
function atualizarLivro(req,res){
    console.log(req.body);
    const {id} = req.params;
    const livro = livros.find((liv)=>liv.id == id);
    if(!livro){
        return res.status(404).send({message: "Id não encontrado"});
    }{
    livro.id = id;
    livro.titulo = req.body.titulo;
    livro.autor = req.body.autor;
    livro.ano = req.body.ano;
    livro.genero = req.body.genero;
    };
    res.status(200).send({message:'Livro atualizado com sucesso!', livro:livro});
};
module.exports = atualizarLivro