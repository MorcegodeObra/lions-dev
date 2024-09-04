const {estudantes} = require('../dados')
function buscarPorMatriula(req,res){
    const matricula = parseInt(req.query.matricula);
    if (estudantes.length === 0) {
        return res.status(404).send({ message: 'Não há aluguéis cadastrados!' });
    } else {
        const estudantesEncontrados = estudantes.filter(est => est.matricula == matricula);
        if (estudantesEncontrados.length > 0) {
            return res.status(200).send({
                message: 'Estudantes encontrados com esse matricula:',
                estudantes: estudantesEncontrados
            });
        } else {
            return res.status(404).send({ message: 'Nenhum estudante encontrado com esse matricula!' });
        };
    };
}

module.exports = buscarPorMatriula