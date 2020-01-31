// criar um programa que calcula a media
// das turmas de alunos e envia
// mensagem de calculo de média

const alunosDaTurmaA = [
    {
        nome: "Alisson",
        nota: 9.8
    },
    {
        nome: "welder",
        nota: 10
    },
    {
        nome: "silva",
        nota: 5
    }
]

const alunosDaTurmaB = [
    {
        nome: "Joao",
        nota: 4
    },
    {
        nome: "Silva",
        nota: 4
    },
    {
        nome: "Santos",
        nota: 5
    }
]

function calculaMedia(alunos){
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)


// Se a media for maior que 5, parabenizar a turma

function enviaMensagem(media, turma){
    if (media > 5){
        console.log(`A media da ${turma} foi de ${media}. Parabens`)
    }else {
        console.log(`A média da ${turma} é menor que 5`)
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')




