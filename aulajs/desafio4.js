const programador1 = {
    nome: 'Carlos',
    idade: 32,
    tecnologias: [
        { 
        tecnome: 'C++', 
        especialidade: 'Desktop' 
        },

        { 
        tecnome: 'Python', 
        especialidade: 'Data Science' 
        },

        { 
        tecnome: 'JavaScript', 
        especialidade: 'Web/Mobile' 
        }

    ]
    
}

const programador2 = {
    nome: 'João',
    idade: 30,
    tecnologias: [
        { 
        tecnome: 'C', 
        especialidade: 'Desktop' 
        },

        { 
        tecnome: 'Java', 
        especialidade: 'Data Science' 
        },

        { 
        tecnome: 'React Native', 
        especialidade: 'Web/Mobile' 
        }

    ]
    
}





  console.log(`O usuario ${programador1.nome} tem ${programador1.idade}anos e usa a tecnologia ${programador1.tecnologias[0].tecnome} com especialidade em ${programador1.tecnologias[0].especialidade}` )