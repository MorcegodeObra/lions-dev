const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function p1(){
    rl.question('Qual o nome do primeiro integrante?',(nome1) =>{
        rl.question('Qual o nome do segundo integrante?',(nome2) =>{
            rl.question('Qual o nome do terceiro integrante?',(nome3) =>{
                rl.question('Qual o nome do ultimo integrante?',(nome4) =>{
                    console.log(`Seus colegas são ${nome1},${nome2},${nome3},${nome4}`)
                    rl.close()
                })
            })
        })
    })
}
p1()