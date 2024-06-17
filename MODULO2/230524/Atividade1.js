console.log(calculadora(5,3,'+'))
console.log(calculadora(5,3,'-'))
console.log(calculadora(5,3,'*'))
console.log(calculadora(5,3,'/'))

function calculadora(n1,n2,text){
    if(text=='+'){
    return n1+n2
    }else if (text=='-'){
        return n1-n2
    }else if (text=='*'){
        return n1*n2
    } else {
        return n1/n2
    }
}