function atualizar(contatos,posicao,nome,email,contato,update){
    let temp = contatos[posicao]
    if(email=='' && contato ==''){
    contatos[posicao]=({id: update,nome: nome,email: temp.email,contato: temp.contato});
    console.log('Contato atualizado com sucesso!! Retornando...');
    }else if(nome == '' && contato == ''){
        contatos[posicao]=({id: update,nome: temp.nome,email: email,contato: temp.contato});
        console.log('Contato atualizado com sucesso!! Retornando...');
    }else{
        contatos[posicao]=({id: update,nome: temp.nome,email: temp.email,contato: contato});
        console.log('Contato atualizado com sucesso!! Retornando...');
    }
};
module.exports = {atualizar};