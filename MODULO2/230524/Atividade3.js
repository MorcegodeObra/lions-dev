let nota = 0

console.log('Qual foi a nota recebida?')
process.stdin.once('data',function(data){
    nota=parseFloat(data.toString().trim())
    caculonota(nota)
    process.exit()
})

function caculonota(nota){
    switch(true){
        case(nota>=90 && nota<=100):
            return console.log('Nota A')
            break
        case (nota>=80 && nota<=89):
            return console.log('Nota B')
            break
        case (nota>=70 && nota<=79):
            console.log('Nota C')
            break
        case (nota>=60 && nota<=69):
            console.log('Nota D')
            break
        case (nota>=0 && nota<=59):
            console.log('Nota F')
            break
        default:
            console.log('Nota inválida')
            break
    }
}