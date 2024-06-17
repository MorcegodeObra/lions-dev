console.log(calculadora(5,3,'+'))
console.log(calculadora(5,3,'-'))
console.log(calculadora(5,3,'*'))
console.log(calculadora(5,3,'/'))

function calculadora(n1,n2,text){
    switch(text){
        case '+':
            return n1+n2
            break
        case '-':
            return n1-n2
            break
        case '*':
            return n1*n2
            break
        case '/':
            return n1/n2
            break
        default:
            console.log("erro")
    }
}