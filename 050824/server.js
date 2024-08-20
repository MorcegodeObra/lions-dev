let contatos = [
    {id: 1, nome: 'Gabriel', email: 'geefoliveira@gmail.com', contato: [42999802966,42936182268]},
    {id: 2, nome: 'Igor', email: 'igorenrique@gmail.com', contato: [42999802966,42936182268]}
];

function servidor(requisicao){
    const {escolha,dados} = requisicao
    switch(escolha){
        case 1:
            return adicionar(dados)
        case 2:
            listar()
            break
        case 3:
            atualizar(requisicao)
            break
        case 4:
            remover(requisicao)
            break
    }
}
function adicionar(dados){
    contatos.push({id : 3,nome: dados.nome,email:dados.email,contato:dados.contato})
    console.log(contatos)
    return ('Executado')
};

function listar(requisicao){
    console.log(contatos)
};

function atualizar(contatos,posicao,nome,email,contato,update){

};

function remover(requisicao){

};

module.exports = servidor