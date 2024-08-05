function remover(residencias,callback,prompt){
    let update = parseInt(prompt('Qual residencia gostaria de atualziar?'))-1;
    if(update<0 || update>=residencias.length){
        console.log('Numero não reconhecido ou não existente,retornando para o menu...')
    }else{
        residencias.splice(update,1)
        console.log('Residencia removida com sucesso!! Retornando...');
    }
    callback();
}
module.exports = {remover}