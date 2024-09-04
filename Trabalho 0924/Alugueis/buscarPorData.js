const {algueis} = require('../dados');

function buscarPorData(req, res) {
    const data = parseInt(req.query.data);
    if (algueis.length === 0) {
        return res.status(404).send({ message: 'Não há aluguéis cadastrados!' });
    } else {
        const algueisEncontrados = algueis.filter(aluguel => aluguel.dataAlugel === data);
        if (algueisEncontrados.length > 0) {
            return res.status(200).send({
                message: 'Aluguéis encontrados com essa data:',
                algueis: algueisEncontrados
            });
        } else {
            return res.status(404).send({ message: 'Nenhum aluguel encontrado com essa data!' });
        };
    };
};

module.exports = buscarPorData;
