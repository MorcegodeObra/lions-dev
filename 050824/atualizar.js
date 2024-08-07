function atualizar(contatos,posicao,nome,email,contato){
    let id = contatos[posicao].id
    contatos[posicao]=({id: id,nome: nome,email: email,contato: contato});
    console.log('Contato atualizado com sucesso!! Retornando...');
};
module.exports = {atualizar};