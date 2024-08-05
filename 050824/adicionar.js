function adicionar(prompt,residencias,callback){
    let nome = prompt('Qual o nome da Vila?');
    let rua = prompt('Qual o nome da Rua?');
    let resi = prompt('Qual o numero da residencia?');
    let moradores = [];
    let i =0;
    while(i==0){
        let morador = prompt('Qual o nome do morador?');
        moradores.push(morador);
        let opcao = prompt('Gostaria de adicionar outro morador?(sim)(nao)').toLowerCase();
        if(opcao =='nao'){
            i++
        };
    };
    residencias.push({Bairro: nome,Rua: rua,Numero: resi,Morador: moradores})
    console.log('Residencia adicionada ocm sucesso!! Retornando...');
    callback();
};
module.exports = {adicionar}