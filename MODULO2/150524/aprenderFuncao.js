const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function pergunta(questionText){
    return new Promise((resolve) => {
        rl.question(questionText,(answer) => {
            resolve(answer);
        });
    })
}
async function perguntarDados(){
    try{
        const nome = await pergunta(`Qual seu nome?\n`)
        const idade = await pergunta(`Qual a sua idade?\n`)
        const resposta = await pergunta(`Você já fez aniversário?\n`)
        if(resposta=="sim"){
            console.log(`Olá ${nome} você tem ${idade} e nasceu no ano ${2024-idade}.`)
        } else {
            console.log(`Olá ${nome} você tem ${idade} e nasceu no ano ${2023-idade}.`)
        }
    } finally{
        rl.close()
    }
}
perguntarDados()