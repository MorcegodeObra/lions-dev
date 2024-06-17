let nome = ""
console.log('Qual o nome do usuário')
process.stdin.on('data',function(data){
    let nome = data.toString();
    let saudacao = "Olá " + nome
    console.log(saudacao)
    process.exit()
})
