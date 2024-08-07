function adicionar(contatos,callback,nome,email,contato){
    let existe = false
    let id = contatos[contatos.length-1].id+1
    contatos.push({id: id,nome: nome,email: email,contato: contato});
    console.log('Contato adicionada ocm sucesso!! Retornando...');
    callback();
};
module.exports = {adicionar}