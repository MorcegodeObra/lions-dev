let resposta1
let resposta2

console.log("Qual a primeira nota?")
process.stdin.once('data',function(data){
    resposta1= parseFloat(data.toString().trim())
    console.log("Qual a segunda nota?")
    process.stdin.once('data',function(data){
        resposta2= parseFloat(data.toString().trim())
        processamento(resposta1,resposta2)
        process.exit()
    })
})
function processamento(resposta1,resposta2){
    let media=(resposta1+resposta2)/2
    console.log("Olá a média é: " + media)
}