const aluno01 = {
    nome: 'Alisson',
    nota: 98
}

const aluno02 = {
    nome: 'Welder',
    nota: 100
}

const aluno03 = {
    nome: 'Silva',
    nota: 99
}

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

if(media > 50){
    console.log(`a media é ${media}. Parabens`)

}else{
    console.log("nota baixa")
}
