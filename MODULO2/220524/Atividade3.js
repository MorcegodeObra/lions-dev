let coresFavoritas = ['Preto','Azul','Verde']
let coresEspeciais = []
let corUsuario

console.log('Qual a sua cor favorita?')
process.stdin.once('data',function(data){
    corUsuario=data.toString().trim()
    cor(corUsuario)
    process.exit()
})
function cor(corUsuario){
    if(coresFavoritas.includes(corUsuario)){
        console.log('Sua cor está entre as favoritas')
        console.log(`As cores favoritas são ${coresFavoritas}no total de ${coresFavoritas.length}`)
    }else{
        console.log('Sua cor não está entre as favoritas,vamos adiciona-lá')
        coresEspeciais.push(corUsuario)
        console.log(`As cores favoritas são ${coresFavoritas} no total de ${coresFavoritas.length} e as especias são ${coresEspeciais}`)
    }
}