function servidor(requisicao){
    switch(requisicao.escolha){
        case 1:
            adicionar(requisicao)
            break
        case 2:
            listar(requisicao)
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
};

function listar(requisicao){
    console.log(requisicao.dados)
};

function atualizar(contatos,posicao,nome,email,contato,update){

};

function remover(requisicao){
    requisicao.dados.contatos.splice(requisicao.dados.posicao,1)
    console.log(requisicao.dados)
    console.log('Deletado')
};

module.exports = servidor
