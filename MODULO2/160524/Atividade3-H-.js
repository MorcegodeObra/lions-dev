const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

let pinturatotal = {
    nomePintura: '',
    nomeArtista: '',
    anoPintura: '',
    significado: ''
}
function perguntas(){
    rl.question('Qual o nome da pintura?\n',(pintura)=>{
        rl.question('Qual o nome do artista?\n',(artista)=>{
            rl.question('Qual o ano da pintura?\n',(ano)=>{
                rl.question('Qual o significado da pintura?\n',(significado)=>{
                    pinturatotal.nomePintura=pintura
                    pinturatotal.nomeArtista=artista
                    pinturatotal.anoPintura=ano
                    pinturatotal.significado=significado
                    console.log(`Minha pintura favorita é ${pinturatotal.nomePintura}, feita por ${pinturatotal.nomeArtista} em ${pinturatotal.anoPintura} e significa ${pinturatotal.significado}`)
                    rl.close()
                })
            })
        })
    })
}
perguntas()