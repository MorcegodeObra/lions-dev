const {livros} = require('../dados')
function buscarPorAno(req,res){
    const ano = parseInt(req.query.ano);
    if (livros.length === 0) {
        return res.status(404).send({ message: 'Não há Livros cadastrados!' });
    } else {
        const livrosEncontrados = livros.filter(liv => liv.ano === ano);
        if (livrosEncontrados.length > 0) {
            return res.status(200).send({
                message: 'Livros encontrados com essa ano:',
                livros: livrosEncontrados
            });
        } else {
            return res.status(404).send({ message: 'Nenhum livro encontrado com essa ano!' });
        };
    };
}
module.exports = buscarPorAno