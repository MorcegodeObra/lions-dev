let livros = [
    {id: 1,titulo: "Dom Quixote",autor: "Miguel",ano: 1999,genero: "Romance"},
    {id: 2,titulo: "Dom",autor: "Miguel",ano: 2000,genero: "Ação"}
];
let estudantes = [
    {id: 1,nome: "Gabriel",matricula: "13653713",curso: "Eng. Civil",ano: 1999},
    {id: 2,nome: "Murilo",matricula: "14567890",curso: "Eng. Agronomo",ano: 2005},
];
let algueis = [
    {id: 1,dataAlugel: 23,dataDevolucao: 15,idLivro: 1,idEstudante: 1},
    {id: 2,dataAlugel: 23,dataDevolucao: 15,idLivro: 2,idEstudante: 1},
];

module.exports = {livros,estudantes,algueis};