function adicionar(residencias,callback,nome,rua,resi,moradores){
    let id = residencias[residencias.length-1].id+1
    residencias.push({id: id,Bairro: nome,Rua: rua,Numero: resi,Morador: moradores});
    console.log('Residencia adicionada ocm sucesso!! Retornando...');
    callback();
};
module.exports = {adicionar}