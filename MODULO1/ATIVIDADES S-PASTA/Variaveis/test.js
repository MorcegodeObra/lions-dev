var nome = ""
console.log('Qual o nome do usuário')
process.stdin.on('data',function(data){
    nome = data.toString()
    var saudacao = "Olá " + nome
    email = ""
    console.log(saudacao)

})
console.log('Qual o email do usuário')
process.stdin.on('data',function(data){
    email = data.toString()
    var emailcomp = "Olá seu email é: \n" + email
    
console.log(emailcomp)
})
