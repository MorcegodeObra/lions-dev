function atualizarBaralho(update,baralhos,nomeA,temp){
    let temp2 = baralhos[baralhos.findIndex(baralhos =>baralhos.id == update)]
        baralhos[temp]=({id: temp2.id,nome: nomeA});
        console.log('Contato atualizado com sucesso!! Retornando...');
};

module.exports = atualizarBaralho