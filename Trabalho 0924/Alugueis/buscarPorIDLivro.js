const {algueis} = require('../dados')
function buscarPorIDLivro(req,res){
    const idLivro1 = parseInt(req.query.idLivro);
    if (algueis.length === 0) {
        return res.status(404).send({ message: 'Não há aluguéis cadastrados!' });
    } else {
        const algueisEncontrados = algueis.filter(aluguel => aluguel.idLivro === idLivro1);
        if (algueisEncontrados.length > 0) {
            return res.status(200).send({
                message: 'Aluguéis encontrados com essa idLivro:',
                algueis: algueisEncontrados
            });
        } else {
            return res.status(404).send({ message: 'Nenhum aluguel encontrado com essa idLivro!' });
        };
    };
}
module.exports = buscarPorIDLivro