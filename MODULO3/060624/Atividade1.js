let dado
let numero

//Gabriel Soares - Gabriel 
console.log('Qual o numero do dado?')
process.stdin.once('data',function(data){
    dado=parseInt(data.toString().trim())
    numero = Math.floor(Math.random()*dado)+1
    console.log(numero)
    process.exit()
})