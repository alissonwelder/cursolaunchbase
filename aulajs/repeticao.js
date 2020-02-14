
const classA = [
    {
        name: "Alisson",
        grade: 9.8
    },
    {
        name: "welder",
        grade: 10
    },
    {
        name: "silva",
        grade: 5
    }
]

const classB = [
    {
        name: "Joao",
        grade: 4
    },
    {
        name: "Silva",
        grade: 4
    },
    {
        name: "Santos",
        grade: 5
    },

    {
        name: "student novo",
        grade: 5
    },
    {
        name: "mais um student",
        grade: 10
    }
]

function calculateAverage(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }
    const average = sum / students.length
    return average
}




function SendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average}. Congratulations`)
    } else {
        console.log(`${turma} average: ${average}. Is not Good.`)
    }
}

function markAsFlunked(student) {

    student.flunked = false
    if (student.grade < 5) {
        student.flunked = true
    }

}


function sendMessageflunked(student) {
    if (student.flunked) {
        console.log(`O student ${student.name} está flunked!`)
    }
}


function studentflunked(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendMessageflunked(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

SendMessage(average1, ' Class A')
SendMessage(average2, 'Class B')

studentflunked(classA)
studentflunked(classB)

