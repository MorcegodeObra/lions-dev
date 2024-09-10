const {estudantes} = require('../dados')
function buscarPorNome(req,res){
    const nome = req.query.nome.toLowerCase();
    if (estudantes.length === 0) {
        return res.status(404).send({ message: 'Não há aluguéis cadastrados!' });
    } else {
        const estudantesEncontrados = estudantes.filter(est => est.nome.toLowerCase().includes(nome));
        if (estudantesEncontrados.length > 0) {
            return res.status(200).send({
                message: 'Estudantes encontrados com esse nome:',
                estudantes: estudantesEncontrados
            });
        } else {
            return res.status(404).send({ message: 'Nenhum estudante encontrado com esse nome!' });
        };
    };
}

module.exports = buscarPorNome