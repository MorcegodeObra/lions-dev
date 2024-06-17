let numero=[27,10,3,0,20,5,6,3]
let pares=[]
let impar=[]

console.log('Qual a sua idade?')
process.stdin.once('data',function(data){
    numero.push(parseFloat(data.toString().trim()))
    numeros(numero)
    process.exit()
})
function numeros(numero){
    for(let i=0;i<=numero.length;i++){
        if(numero[i]%2==0){
            pares.push(numero[i])
        }else if(numero[i]%2==1){
            impar.push(numero[i])
        } else {

        }
    }
console.log(`Os numeros pares são ${pares} \n e os impares são: ${impar}`)
}