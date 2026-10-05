function andar(distanciaParede){
    let passos = 0
    while(true){
        console.log(`Quantidade de passos ${passos}`)
        if(passos == distanciaParede){
            break
        }
        passos += 1
    }
    console.log("Bateu e Parou")
}
andar(10)