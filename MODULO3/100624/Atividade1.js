let opcoes = ['pedra','papel','tesoura']
let escolhaPc
let escolhaUser
let resultado

console.log('Qual a sua escolha? (pedra,papel,tesoura)')
process.stdin.once('data',function(data){
    escolhaPc = opcoes[Math.floor(Math.random()*opcoes.length)]
    escolhaUser = data.toString().trim()
    if(escolhaUser==escolhaPc){
        resultado = 'empate'
    }else if (escolhaUser == 'pedra' && escolhaPc == 'tesoura' || escolhaUser == 'tesoura' && escolhaPc == 'papel' || escolhaUser == 'papel' && escolhaPc == 'pedra'){
        resultado = 'você ganhou'
    }else{
        resultado = 'voce perdeu'
    }
    console.log(resultado)
    process.exit()
})