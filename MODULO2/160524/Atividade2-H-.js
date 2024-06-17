const readline = require('readline')
const rl = readline.createInterface({input: process.stdin,output: process.stdout})
function mediaProva(){
    rl.question('Qual a primeira nota?\n',(prova1)=>{
        rl.question('Qual a segunda nota?\n',(prova2)=>{
            let valores = []
            valores.push(prova1 , prova2)
            let media1 = (parseFloat(valores[0]) + parseFloat(valores[1]))/2
            console.log(`A média das provas é: ${media1} e as notas são: ${valores}`)
            rl.close()
        })
    })
}
mediaProva()