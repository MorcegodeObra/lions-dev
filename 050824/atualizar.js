function atualizar(residencias,update,nome,rua,resi,moradores){
    residencias[update]=({Bairro: nome,Rua: rua,Numero: resi,Morador: moradores});
    console.log('Residencia adicionada com sucesso!! Retornando...');
};
module.exports = {atualizar};