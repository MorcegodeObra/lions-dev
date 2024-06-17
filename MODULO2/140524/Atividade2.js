let resposta
let gostadecafe

console.log('Você gosta de café? S(sim) N(Não)')
process.stdin.once('data',function(data){
    resposta = data.toString().trim()
    processamento(resposta)
    process.exit()
})
function processamento(resposta){
    if (resposta=='S','Sim','sim','SIM'){
        gostadecafe = true
    }else{
        gostadecafe = false
    }
    if (gostadecafe == true){
        console.log('Quer legal eu também gosto de café ^_^')
    }else{
        console.log('Café é bom demais mano :(')
    }
}
