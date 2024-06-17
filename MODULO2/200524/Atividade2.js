let somaPar = 0
let somaImpar = 0
let totalPares = 0
let totalImpares = 0

for (contagem = 0;contagem <= 999;contagem++){
    if (contagem % 2 == 0){
        somaPar = somaPar + contagem
        totalPares++
    }else{
        somaImpar = somaImpar + contagem
        totalImpares++
    }
}
    console.log(`O total par é de ${totalPares},a soma é ${somaPar} e a média é ${somaPar/totalPares}`)
    console.log(`O total de impares é de ${totalImpares},a soma é ${somaImpar} e a média é ${somaImpar/totalImpares}`)
    if (totalPares>totalImpares){
        console.log('A maior média foi de pares.')        
    }else if (totalPares<totalImpares) {
        console.log('A maior média de impares.')
    } else{
        console.log('As médias são iguais.')
    }