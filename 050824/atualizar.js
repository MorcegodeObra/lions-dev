function atualizar(residencias,callback,prompt){
    let update = parseInt(prompt('Qual residencia gostaria de atualziar?'))-1;
    if(update<0 || update>=residencias.length){
        console.log('Numero não reconhecido ou não existente,retornando para o menu...')
    }else{
        let nome = prompt('Qual o nome da Vila?');
        let rua = prompt('Qual o nome da Rua?');
        let resi = prompt('Qual o numero da residencia?');
        let moradores = [];
        let i =0;
        while(i==0){
            let morador = prompt('Qual o nome do morador?');
            moradores.push(morador);
            let opcao = prompt('Gostaria de adicionar outro morador?(sim)(nao)').toLowerCase();
            if(opcao==='nao'){
                i++
            };
        };
        residencias[update]=({Bairro: nome,Rua: rua,Numero: resi,Morador: moradores})
        console.log('Residencia adicionada com sucesso!! Retornando...');
    }
    callback();
}
module.exports = {atualizar};