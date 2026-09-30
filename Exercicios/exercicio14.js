let Itens = [10,50,230,15,150,550]

function CalcCompra(array){
    let Total = 0
    for (item of Itens){
        Total += item
    }
    return Total
}

console.log(CalcCompra(Itens))
