const {estudantes} = require('../dados')
function buscarPorCurso(req,res){
    const curso = req.query.curso.toLowerCase();
    if (estudantes.length === 0) {
        return res.status(404).send({ message: 'Não há aluguéis cadastrados!' });
    } else {
        const estudantesEncontrados = estudantes.filter(est => est.curso.toLowerCase().includes(curso));
        if (estudantesEncontrados.length > 0) {
            return res.status(200).send({
                message: 'Estudantes encontrados com esse curso:',
                estudantes: estudantesEncontrados
            });
        } else {
            return res.status(404).send({ message: 'Nenhum estudante encontrado com esse curso!' });
        };
    };
}

module.exports = buscarPorCurso