let list = ['Gabriel S','Gabriel l','Murilo','Guilherme','Igor','Marquinhos','Matheusinho','Wanderlei','Enzo','Leonardo','Stachiack','Bruno','Conrado','José','Nayla','Neferti']
let randomNumber
let tmp
let l1 = []
let l2 = []
let l3 = []
let l4 = []
let l5 = []
let l6 = []
let l7 = []
let l8 = []

for(let i = list.length;i;i--){
    randomNumber= Math.random() * i-- |0;
    tmp = list[randomNumber];
    list[randomNumber] = list[i];
    list[i] = tmp;
}

for(let i=0;i<list.length;i++){
    if(l1.length<2){
        l1.push(list[i])
    }else if(l2.length<2){
        l2.push(list[i])
    }else if(l3.length<2){
        l3.push(list[i])
    }else if(l4.length<2){
        l4.push(list[i])
    }else if(l5.length<2){
        l5.push(list[i])
    }else if(l6.length<2){
        l6.push(list[i])
    }else if(l7.length<2){
        l7.push(list[i])
    }else{
        l8.push(list[i])
    }
}
console.log(`A primeira dupla é: ${l1}`)
console.log(`A segunda dupla é: ${l2}`)
console.log(`A terceira dupla é: ${l3}`)
console.log(`A quarta dupla é: ${l4}`)
console.log(`A quinta dupla é: ${l5}`)
console.log(`A sexta dupla é: ${l6}`)
console.log(`A sétima dupla é: ${l7}`)
console.log(`A sétima dupla é: ${l8}`)