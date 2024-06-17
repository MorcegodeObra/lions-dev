const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    })

let numeroAleatorio = Math.floor(Math.random()*100)+1
function papite(){
    rl.question('Qual o numero vc acha que é:',(valor)=>{
        if(numeroAleatorio>valor){
           console.log(`Você errou o numero é mais acima.`)
           papite()
        }else if(numeroAleatorio<valor){
            console.log('Você errou o numero é mais abaixo')
            papite()
        }else{
            console.log(`Você acertou o numero é ${numeroAleatorio}`)
            rl.close()
        }
})}
papite()