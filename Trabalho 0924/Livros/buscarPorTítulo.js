const {livros} = require('../dados')
function buscarPorTitulo(req,res){
    const titulo = (req.query.titulo.toLowerCase());
    if (livros.length === 0) {
        return res.status(404).send({ message: 'Não há Livros cadastrados!' });
    } else {
        const livrosEncontrados = livros.filter(liv => liv.titulo.toLowerCase().includes(titulo));
        if (livrosEncontrados.length > 0) {
            return res.status(200).send({
                message: 'Livros encontrados com essa titulo:',
                livros: livrosEncontrados
            });
        } else {
            return res.status(404).send({ message: 'Nenhum livro encontrado com essa titulo!' });
        };
    };
}
module.exports = buscarPorTitulo