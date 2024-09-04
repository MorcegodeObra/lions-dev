const {livros} = require('../dados')
function buscarPorGenero(req,res){
    const genero = (req.query.genero.toLowerCase());
    if (livros.length === 0) {
        return res.status(404).send({ message: 'Não há Livros cadastrados!' });
    } else {
        const livrosEncontrados = livros.filter(liv => liv.genero.toLowerCase().includes(genero));
        if (livrosEncontrados.length > 0) {
            return res.status(200).send({
                message: 'Livros encontrados com essa genero:',
                livros: livrosEncontrados
            });
        } else {
            return res.status(404).send({ message: 'Nenhum livro encontrado com essa genero!' });
        };
    };
}
module.exports = buscarPorGenero