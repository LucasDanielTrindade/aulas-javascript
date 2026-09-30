function gastoEnergia(energia){
    while(energia > 0){
        energia -= 10
        console.log(`Energia restante: ${energia}`)
    }
}
gastoEnergia(100)