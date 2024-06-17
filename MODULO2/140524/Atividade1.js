let numero

console.log('Digite um número')
process.stdin.once('data',function(data){
    numero = parseInt(data.toString().trim())
    processamento(numero)
    process.exit()
})
    function processamento(numero){
        let resto = numero%2
        if (numero == 0)
        {console.log(`Olá seu número é ${numero}`)}
        else if(resto == 0)
        {console.log(`Olá seu número é ${numero} e ele é par`)}
        else
        {console.log(`Olá seu número é ${numero} e ele é impar`)}
    }