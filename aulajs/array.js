const alunos = [{
    nome: 'Alisson',
    nota: 98
    },

    {
        nome: 'Welder',
        nota: 100
    },

    {
        nome: 'Silva',
        nota: 99
    }


]

const nomeDeAlunos = ["alisson", "welder", "silva"]


const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

if(media > 50){
    console.log(`a media é ${media}. Parabens`)

}else{
    console.log("nota baixa")
}