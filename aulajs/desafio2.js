// desafio 2

const nome = 'João'
const sexo = 'M'
const idade = 60
const contribuicao = 15

const somaIdadeContribuicao = idade + contribuicao

if (contribuicao >= 35 && sexo == 'M' && somaIdadeContribuicao >= 95) {
    console.log(`${nome}, você pode se aposentar`)
} else {
    if (contribuicao >= 30 && sexo == 'F' && somaIdadeContribuicao >= 85) {
        console.log(`${nome}, você pode se aposentar`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar`)
    }
}
