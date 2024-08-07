function remover(contatos,posicao){
        contatos.splice(posicao,1);
        console.log('Usuário removido com sucesso!! Retornando...');
};
module.exports = {remover}