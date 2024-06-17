let nome
let idade
const ano = 2024

console.log('Qual o seu nome?')
process.stdin.once('data',function(data){
    nome = data.toString().trim()
    console.log('Qual a sua idade?')

    process.stdin.once('data',function(data){
        idade = parseInt(data.toString().trim())
        processamento(nome,idade)
        process.exit()
    })
})
function processamento(nome,idade){
    let calculoAno = ano-idade
    console.log(`Olá ${nome},se você já fez aniversário você é de ${calculoAno} anos\nCaso contrário você é de ${calculoAno-1}`)
}