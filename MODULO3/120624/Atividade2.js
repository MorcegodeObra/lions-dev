const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []
let posição = 0

exibirMenu()

function exibirMenu() {
	console.log(`
    Menu:
    1. Cadastrar funcionário
    2. Exibir funcionários
    3. Funcionário com maior salário
    4. Editar informações do funcionário
    5. Remover funcionário
    6. Sair
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
			case '2':
				exibirFuncionarios()
				break
            case '3':
                maiorRemuneracao()
                break
            case '4':
                editarFuncionario()
                break
            case '5':
                removerFuncionario()
                break
            case '6':
                rl.close()
                break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: salario })
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}

function exibirFuncionarios(){
    if(funcionarios==''){
        console.log('Não há nenhum funcionário cadastrado')
        exibirMenu()
    } else{
        funcionarios.forEach((nome,i)=>{
            console.log(`${i+1}.${funcionarios[i].nome},${funcionarios[i].cargo},${funcionarios[i].salario}`)
        })
        exibirMenu()}
}
function maiorRemuneracao(){
    let maiorSalario = funcionarios[0].salario
    for(let i=0;i<funcionarios.length;i++){
        if(maiorSalario<funcionarios[i].salario){
            maiorSalario=funcionarios[i].salario
            posição = i
        }else{
        }
    }
    console.log(`O maior salário é de ${maiorSalario} e pertence à ${funcionarios[posição].nome}`)
    exibirMenu()
}
function editarFuncionario(){
    if (funcionarios == 0){
        console.log('Não há funcionários cadastrados')
        exibirMenu()
    }else{
        funcionarios.forEach((nome,i)=>{
            console.log(`${i+1}.${funcionarios[i].nome}, ${funcionarios[i].cargo},${funcionarios[i].salario}`)
        })
        rl.question('Digite o numero do funcionário será editado.',(numero)=>{
            if(numero>0 && numero<=funcionarios.length){
                rl.question('Digite o novo nome:',(nome)=>{
                    rl.question('Digite o novo cargo:',(cargo)=>{
                        rl.question('Digite o novo salário:',(salario)=>{
                            funcionarios[numero-1]={nome,cargo,salario}
                            console.log('Editado com sucesso!')
                            exibirMenu()
                        })
                    })
                })
            } else {
                console.log('Numero invalido, tente novamente.')
                exibirMenu()
            }
        })
    }
}
function removerFuncionario(){
    if (funcionarios == 0){
        console.log('Não há funcionários cadastrados')
        exibirMenu()
    }else{
        funcionarios.forEach((nome,i)=>{
            console.log(`${i+1}.${funcionarios[i].nome},${funcionarios[i].cargo},${funcionarios[i].salario}`)
        })
        rl.question('Qual o funcionário deseja remover?',(numero)=>{
            if(numero>0 && numero<=funcionarios.length){
                funcionarios.splice(numero-1,1)
                console.log('Funcionário removido com sucesso!')
                exibirMenu()
            }else{
                console.log('Numero inválido,tente novamente.')
                exibirMenu()
            }
        })
}
}