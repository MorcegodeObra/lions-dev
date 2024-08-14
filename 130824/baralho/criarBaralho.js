function criarBaralho(baralhos,nomeC){
    let id = baralhos[baralhos.length-1].id+1
    baralhos.push({id: id,nome: nomeC});
    console.log('Baralho adicionado com sucesso!! Retornando...');
};

module.exports = criarBaralho