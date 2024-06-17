let resposta
let idade
let aniversario
console.log('Qual o seu nome?')
process.stdin.once('data',function(data){
    resposta = data.toString().trim()
    console.log('Qual a sua idade?')
    process.stdin.once('data',function(data){
        idade =parseInt(data.toString().trim())
        console.log('Você já fez aniversário esse ano?(Responda com sim ou não)')
        process.stdin.once('data',function(data){
            aniversario =data.toString().trim()
            processamento(resposta,idade,aniversario)
            process.exit()
        })
    })
})
function processamento(resposta,idade,aniversario){
    if(aniversario=='sim'){
        console.log(`Parabéns ${resposta}, vocé já fez aniversário e nasceu no ano de ${2024-idade}`)
    }else{
        console.log(`Olá ${resposta} você nasceu no ano de ${2023-idade} e ainda irá fazer aniversário`)
    }
}