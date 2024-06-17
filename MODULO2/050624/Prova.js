let notasAlunos=[7.5,8,6,9.5,5,8.5,7,10,6.5,9]
let soma=0
let media=0
let notaMaior=notasAlunos[0]
let notaMenor=notasAlunos[0]
let i=0
let notasAcima=0
let notasAbaixo=0
let aprovado=0
let reprovado=0

console.log('Qual a nota a adicionar?')
process.stdin.once('data',function(data){
    notasAlunos.push(parseFloat(data.toString().trim()))
    notas(notasAlunos)
    process.exit()
})

function notas(notasAlunos){
    for(i=0;i<notasAlunos.length;i++){
        soma=soma+notasAlunos[i]
    }
    media=soma/notasAlunos.length
    for(i=0;i<notasAlunos.length;i++){
        if(notasAlunos[i]>notaMaior){
            notaMaior=notasAlunos[i]
        }
        if(notaMenor>notasAlunos[i]){
        notaMenor=notasAlunos[i]
        }
    }

    for(i=0;i<notasAlunos.length;i++){
        if(notasAlunos[i]>media){
            notasAcima++
        }else{
            notasAbaixo++
        }
    }
    for(i=0;i<notasAlunos.length;i++){
        if(notasAlunos[i]>=6){
            aprovado++
        }else{
            reprovado++
        }
    }
    console.log(`A média da turma é: ${media}.`)
    console.log(`A nota maior da turma é: ${notaMaior} e a nota menor é: ${notaMenor}.`)
    console.log(`Temos ${notasAcima} notas acima da média da turma e ${notasAbaixo} abaixo.`)
    console.log(`Para notas acima de 6, ${aprovado} pessoas foram aprovados e ${reprovado} reprovadas.`)
}