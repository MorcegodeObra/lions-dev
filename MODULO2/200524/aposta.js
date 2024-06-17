const readline = require('readline')
const rl = readline.createInterface({input: process.stdin,output: process.stdout})

function gerarNumero(){return Math.floor(Math.random()*11)}
function gerarNumero2(min,max){return Math.floor(Math.random()*(max-min)+min)}

let somaAcumulada = 0
let casa = gerarNumero2(16,21)

function perguntar(){
    if (somaAcumulada>21){
        console.log(`Você perdeu seu valor é de ${somaAcumulada}`)
        rl.close()
    }else{
    rl.question('Você quer uma carta? S(sim) N(nao)',(resposta) => {
        if(resposta.trim().toLowerCase() === 'sim'){
            const numeroAleatorio = gerarNumero()
            somaAcumulada +=numeroAleatorio
            console.log(`Sua carta é ${numeroAleatorio}`)
            console.log(`Você está com o valor de ${somaAcumulada}`)
            perguntar()
        } else if (resposta.trim().toLowerCase()=== 'nao'){
            if(somaAcumulada>casa){
                console.log(`Você ficou com o valor de ${somaAcumulada} e o sistema com ${casa},você ganhou.`)
                rl.close()
            }
            else{
                console.log(`Você ficou com o valor de ${somaAcumulada} e o sistema com ${casa},você perdeu.`)
                rl.close()
            }
        } else {
            console.log('Resposta nao reconhecida')
            perguntar()
        }
    })
}
}
perguntar()