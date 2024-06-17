const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []
let maiorSalario = 0
let posição = 0

exibirMenu()

function exibirMenu() {
	console.log(`
    Menu:
    1. Cadastrar funcionário
    2. Exibir funcionários
    3. Funcionário com maior salário
    4. Sair
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
        console.log(funcionarios)
        exibirMenu()}
}
function maiorRemuneracao(){
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