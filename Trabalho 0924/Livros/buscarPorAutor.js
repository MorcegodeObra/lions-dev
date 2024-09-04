const {livros} = require('../dados')
function buscarPorAutor(req,res){
    const autor = (req.query.autor.toLowerCase());
    if (livros.length === 0) {
        return res.status(404).send({ message: 'Não há Livros cadastrados!' });
    } else {
        const livrosEncontrados = livros.filter(liv => liv.autor.toLowerCase().includes(autor));
        if (livrosEncontrados.length > 0) {
            return res.status(200).send({
                message: 'Livros encontrados com essa autor:',
                livros: livrosEncontrados
            });
        } else {
            return res.status(404).send({ message: 'Nenhum livro encontrado com essa autor!' });
        };
    };
}
module.exports = buscarPorAutor