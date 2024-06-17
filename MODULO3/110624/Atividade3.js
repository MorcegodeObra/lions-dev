const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Boas Vindas!' 
})

let numeroAleatorio = Math.floor(Math.random()*100)+1
let rodadas = 0
rl.prompt()
console.log(`Você tem ${10-rodadas} rodadas.`)

function papite(){
    rodadas++
    if(rodadas<=10){
            rl.question('Qual o numero vc acha que é:',(valor)=>{
            switch(true){
            case(numeroAleatorio>valor):
                console.log(`Você errou o numero é mais acima.Você tem ${10-rodadas} rodadas restantes.`)
                papite()
                break
            case(numeroAleatorio<valor):
                console.log(`Você errou o numero é mais abaixo.Você tem ${10-rodadas} rodadas restantes.`)
                papite()
                break
            case(numeroAleatorio==valor):
                console.log(`Você acertou,o numero é ${numeroAleatorio} e você demorou ${rodadas} rodadas`)
                rl.close()
                break
            default:
                console.log(`Numero inválido.`)
                papite()
                break
            }
        })   
    }else{
        console.log(`Você perdeu foram todas as suas tentativas,o numero era ${numeroAleatorio}`)
        rl.close()
    }
}
papite()