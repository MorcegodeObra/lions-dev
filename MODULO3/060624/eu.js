const maxNumbers = 8
let list = []
let randomNumber
let tmp
let l1 = []
let l2 = []
let l3 = []
let l4 = []

for(let i=0;i<maxNumbers;i++){
    list[i]=i+1
}

for(let i = 0;i <= list.length;i++){
    randomNumber=Math.random()*list.length
    console.log(list)
    tmp = list[randomNumber];
    list.splice(randomNumber-1, randomNumber+1)
    list.push(tmp);

}

for(let i=0;i<list.length;i++){
    if(l1.length<2){
        l1.push(list[i])
    }else if(l2.length<2){
        l2.push(list[i])
    }else if(l3.length<2){
        l3.push(list[i])
    }else{
        l4.push(list[i])
    }
}
console.log(`A primeira dupla é: ${l1}\nA segunda dupla é: ${l2}\nA terceira dupla é: ${l3}\nA quarta dupla é: ${l4}`)