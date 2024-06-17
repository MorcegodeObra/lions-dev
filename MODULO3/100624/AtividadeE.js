let caracteres = '123312kjbnkjhkjh@'
let senha = ''
let comprimentoSenha
 
console.log('qual será o tamanho da senha a ser usado')
   process.stdin.once('data' , function(data){
    comprimentoSenha = parseInt(data.toString().trim())

    for(let i = 0; i < comprimentoSenha; i++) {
     senha += caracteres.charAt(Math.floor (Math.random() * caracteres.length))
   } console.log(senha)
   
   process.exit()
   }) 