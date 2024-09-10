const {estudantes} = require('../dados')
function atualizarEstudante(req,res){
    console.log(req.body);
    const {id} = req.params;
    const Estudantes = estudantes.find((est)=>est.id == id);
    if(!Estudantes){
        return res.status(404).send({message: "Id não encontrado"});
    }{
    Estudantes.id = id;
    Estudantes.nome = req.body.nome;
    Estudantes.matricula = req.body.matricula;
    Estudantes.curso = req.body.curso;
    Estudantes.ano = req.body.ano;
    };
    res.status(200).send({message:'Estudantes atualizado com sucesso!', estudantes:Estudantes});
}

module.exports = atualizarEstudante