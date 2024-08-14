function listarBaralho(baralhos){
    if(baralhos ==0){
        console.log('Não há baralhos cadastrados. Retornando...');
    }else{
        baralhos.forEach(baralhos2 =>{
            console.log(`ID: ${baralhos2.id},Título: ${baralhos2.nome}`);
            });
    };
};

module.exports = listarBaralho