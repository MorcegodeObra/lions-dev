let nota1
let nota2

console.log('Qual a primeira nota?')
process.stdin.once('data',function(data){
    nota1=parseFloat(data.toString().trim())
    console.log('Qual a segunda nota?')
    process.stdin.once('data',function(data){
        nota2=parseFloat(data.toString().trim())
        logica(nota1,nota2)
        process.exit()
    })
})
function logica(nota1,nota2){
    let media = (nota1+nota2)/2
    if (media<8){
        console.log(`Sua média foi ${media} e vocẽ foi reprovado!`)
    }else{
        console.log(`Sua média foi ${media} e você foi aprovado!`)
    }
}