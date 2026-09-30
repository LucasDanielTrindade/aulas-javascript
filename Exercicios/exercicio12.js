let Alunos = [
    {
        Nome: "Joelson",
        Nota: 7
    },
    {
        Nome: "Pedro",
        Nota: 5
    },
    {
        Nome: "Ryan",
        Nota: 4
    },
    {
        Nome: "Carlos",
        Nota: 9
    },
    {
        Nome: "Lucas",
        Nota: 10
    }
]

const verNotas = alunos =>{
    for (aluno of alunos){
        if (aluno.Nota>=7){
            console.log(aluno)
        }
    }
}

verNotas(Alunos)