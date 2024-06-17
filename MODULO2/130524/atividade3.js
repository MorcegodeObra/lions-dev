let nome
let idade
let niver

console.log('Qual o seu nome?')
process.stdin.once('data',function(data){
    nome = data.toString().trim()
    console.log('Qual a sua idade?')

    process.stdin.once('data',function(data){
        idade = parseInt(data.toString().trim())
        console.log('Você já fez aniversário?')
        process.stdin.once('data',function(data){
            niver = data.toString().trim()
        processamento(nome,idade,niver)
        process.exit()
        })
    })
})
function processamento(nome,idade,niver){
    if (niver =="sim")
    {console.log(`Olá ${nome},você é de ${2024-idade}`)}
    else
    {console.log(`Olá ${nome},você é de ${2023-idade}`)}
    }