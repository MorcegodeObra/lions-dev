let opcoes = ["pedra" , "papel" , "tesoura"]
let escolhaUsuario
let escolhaComputador
let resultado

console.log('qual opção deseja? pedra, papel ou tesoura')
    process.stdin.once('data' , function(data) {
     escolhaUsuario = (data.toString().trim())
    
escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)]
console.log(escolhaComputador)
if(escolhaUsuario == escolhaComputador) {
    resultado = 'Empate'
} else if(escolhaUsuario == 'pedra' && escolhaComputador == 'tesoura' || escolhaUsuario == 'tesoura' && escolhaComputador == 'papel' || escolhaUsuario == 'papel' && escolhaComputador == 'pedra') {
    resultado = 'você venceu'
} else {
    resultado = 'você perdeu'
}console.log(resultado)
process.exit()
}) 
