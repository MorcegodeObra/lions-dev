function listar(contatos,callback){
    if(contatos ==0){
        console.log('Não há residências cadastradas. Retornando...');
        callback();
    }else{
        contatos.forEach(contatos2 =>{
            console.log(`ID: ${contatos2.id},Nome: ${contatos2.nome},Email: ${contatos2.email}`);
            contatos2.contato.forEach((numero)=>{
                console.log(`Contato: ${numero}`);
            });
        });
    };
};
module.exports = {listar};