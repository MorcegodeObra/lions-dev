let notas = []
let prova1
let prova2
console.log('Qual a primeira nota?')
process.stdin.once('data',function(data){
    prova1=parseFloat(data.toString().trim())
    console.log('Qual a segunda nota?')
    process.stdin.once('data',function(data){
        prova2=parseFloat(data.toString().trim())
        processamento(prova1,prova2)
        process.exit()
    })
})
function processamento(prova1,prova2){
notas.push(prova1 , prova2)
let media = (notas[0]+notas[1])/2
console.log(`As notas são ${notas} e a média é ${media}.`)
}