let Booleanos = [true, false, false, false, true, true, false]

function verBooleanos() {
    let Verificados = []
    for (let booleano of Booleanos) {
        if (booleano == true) {
            Verificados.push("Concluido")
        } else {
            Verificados.push("Pendente")
        }
    }
    return Verificados
}

console.log(verBooleanos())