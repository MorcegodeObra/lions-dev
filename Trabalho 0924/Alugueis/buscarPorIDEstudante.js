const {algueis} = require('../dados')
function buscarPorIDEstudante(req,res){
    const idEstudante1 = parseInt(req.query.idEstudante);
    if (algueis.length === 0) {
        return res.status(404).send({ message: 'Não há aluguéis cadastrados!' });
    } else {
        const algueisEncontrados = algueis.filter(aluguel => aluguel.idEstudante === idEstudante1);
        if (algueisEncontrados.length > 0) {
            return res.status(200).send({
                message: 'Aluguéis encontrados com essa idEstudante:',
                algueis: algueisEncontrados
            });
        } else {
            return res.status(404).send({ message: 'Nenhum aluguel encontrado com essa idEstudante!' });
        };
    };
}
module.exports = buscarPorIDEstudante