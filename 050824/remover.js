function remover(residencias,posicao){
        residencias.splice(posicao,1);
        console.log('Residencia removida com sucesso!! Retornando...');
};
module.exports = {remover}