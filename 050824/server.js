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
function adicionar(requisicao){
    const { nome, contato, email } = requisicao.dados;
    const novoId = requisicao.dados.contatos.length + 1;
    requisicao.dados.contatos.push({id: novoId, nome, contato, email});
    console.log('Contato adicionado');
function adicionar(dados){
    contatos.push({id : 3,nome: dados.nome,email:dados.email,contato:dados.contato})
    console.log(contatos)
    return ('Executado')
};

function listar(requisicao){
    console.log(contatos)
};

function atualizar(contatos,posicao,nome,email,contato,update){
const { contatos, posicao, nome, contato, email } = requisicao.dados;

    if (posicao >= 0 && posicao < contatos.length) {
        contatos[posicao] = { id: contatos[posicao].id, nome, contato, email };
        console.log('Contato atualizado');
    } else {
        console.log('Posição inválida');
    }
};

function remover(requisicao){

};

module.exports = servidor
