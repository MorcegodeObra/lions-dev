function listar(residencias,callback){
    if(residencias ==0){
        console.log('Não há residências cadastradas. Retornando...');
        callback();
    }else{
        residencias.forEach((residencia,index) =>{
            console.log(`ID: ${index+1},Bairro: ${residencia.Bairro},Rua: ${residencia.Rua},Número: ${residencia.Numero}`);
            residencia.Morador.forEach((nome)=>{
                console.log(`Nome: ${nome}`);
            });
        });
    };
};
module.exports = {listar};