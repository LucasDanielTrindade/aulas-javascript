function gastoEnergia(energiaInicial){
    while(energiaInicial > 0){
        energiaInicial -= 10
        console.log(`Energia restante: ${energiaInicial}`)
    }
}
gastoEnergia(100)