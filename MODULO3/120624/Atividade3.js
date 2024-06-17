const readline = require('readline')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt:'Seja bem vindo'
})

let jogo=[]

exibirMenu()

function exibirMenu(){
    console.log(`
    Menu:
    1. Cadastrar jogos;
    2. Exibir jogos;
    3. Jogo mais velho;
    4. Editar jogos;
    5. Remover jogos;
    6. Sair.
    `)
    rl.question('Digite Sua opção:',(opcao)=>{
        switch(opcao){
            case('1'):
            cadastrar()
            break
            case('2'):
            listarGames()
            break
            case('3'):
            jogoVelho()
            break
            case('4'):
            editarJogo()
            break
            case('5'):
            break
            case('6'):
            rl.close()
            break
        }
    })
}
function cadastrar (){
    rl.question('Qual no nome do jogo?',(game)=>{
        rl.question('Qual no ano do jogo?',(ano)=>{
            rl.question('Qual o console do jogo?',(cons)=>{
                jogo.push({nome: game, ano: ano, cons: cons})
                console.log('Jogo adicionado com sucesso!')
                exibirMenu()
            })
        })
    })
}
function listarGames(){
    if(jogo===0){
        console.log('Não nenhum jogo cadastrado,saindo...')
        exibirMenu()
    }else{
        console.log('Essa é a lista dos jogos cadastrados:')
        jogo.forEach((game,i)=>{
            console.log(`${i+1}:${jogo[i].nome},${jogo[i].ano},${jogo[i].cons}`)
        })
    }
    exibirMenu()
}
function jogoVelho(){
    if(jogo===0){
        console.log('Não nenhum jogo cadastrado,saindo...')
        exibirMenu()
    }else{
        let maisVelho = jogo[0].ano
        let posicao = 0
        jogo.forEach((nome,i)=>{
            if(maisVelho>jogo[i].ano){
                maisVelho=jogo[i].ano
                posicao = i
            }else{
            }
        })    
        console.log(`O jogo mais velho é do ano de ${maisVelho} e o jogo é ${jogo[posicao].nome}`)
    }
    exibirMenu()
}
function editarJogo(){
    if(jogo===0){
        console.log('Não nenhum jogo cadastrado,saindo...')
        exibirMenu()
    }else{
        console.log('Essa é a lista dos jogos cadastrados:')
        jogo.forEach((game,i)=>{
            console.log(`${i+1}:${jogo[i].nome},${jogo[i].ano},${jogo[i].cons}`)
        })
        rl.question('Qual jogo gostaria de editar?',(numero)=>{
            if(numero>0 && numero<=jogo.length){
            rl.question('Qual o novo nome?',(nome)=>{
                rl.question('Qual o ano do game?',(ano)=>{
                    rl.question('Qual o console desse jogo?',(cons)=>{
                        jogo[numero-1]={nome,ano,cons}
                        console.log('Jogo editado com sucesso,saindo...')
                        exibirMenu()
                    })
                    })
                })
            }else{
                console.log('Numero inválido,tente novamente')
                exibirMenu()
        }
        })
    }
}
function removerJogo(){
    if(jogo===0){
        console.log('Não nenhum jogo cadastrado,saindo...')
        exibirMenu()
    }else{
        console.log('Essa é a lista dos jogos cadastrados:')
        jogo.forEach((game,i)=>{
            console.log(`${i+1}:${jogo[i].nome},${jogo[i].ano},${jogo[i].cons}`)
        })
        rl.question('Qual jogo gostaria de remover?',(numero)=>{
            if(numero>0 && numero<=jogo.length){
                }else{
                    console.log('Numero inválido,tente novamente')
                    exibirMenu()
            }
        })
    }
}