let numero=[1,2,3,4,5,6,7,8,9,10]
let numeroImpar=[]
let numeroPar=[]

for(i=0;i<=9;i++){
    if(numero[i]%2==1){
        numeroImpar.push(numero[i])
    }else{
        numeroPar.push(numero[i])
    }
}
console.log(`A array dos numero impares é ${numeroImpar}`)