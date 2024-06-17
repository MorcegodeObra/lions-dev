let nome
let idade

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
    if (idade >=18)
    {console.log(`Olá ${nome},você é maior de idade`)}
    else
    {console.log(`Olá ${nome},você é menor de idade`)}
    }