const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function perguntaNome(){
    rl.question('Qual o seu nome?',(nome)=>{
        rl.question('Qual a sua idade',(idade)=>{
            rl.question('Você já fez aniversário?',(aniversário)=>{
                if (aniversário=="sim"){
                    console.log(`Olá ${nome}, você tem ${idade} e nasceu no ano de ${2024-idade}`)
                    rl.close()
                } else {
                    console.log(`Olá ${nome}, você tem ${idade} e nasceu no ano de ${2023-idade}`)
                    rl.close()
                }
            })
        })
    })
}


perguntaNome()