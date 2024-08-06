function erro(){
    let numero = 2
    try {
        if(numero % 2==1){
            console.log('Par')
        }else{
            throw new Error('não sei se é par ou impar')
        }
    } catch (error) {
        console.log(`${error}`)
        menuprincipal()
    }
}
erro()