const missoes = [
    {nome: "Derrotar chefe", pontos: 500},
    {nome: "Encontrar tesouro", pontos: 200},
    {nome: "Salvar personagem", pontos: 800},
    {nome: "Explorar mapa", pontos: 100}
]

function analisarMissoes(array){
    for(missao of array){
        if (missao.pontos >= 500){
            console.log(`${missao.nome} - Missão Difícil`)
        }else if(missao.pontos >= 200){
            console.log(`${missao.nome} - Missão Média`)
        }else{
            console.log(`${missao.nome} - Missão Fácil`)
        }
    }
}

analisarMissoes(missoes)