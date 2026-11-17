const bissexto = anoFinal =>{
    for (let i = 2000; i <= anoFinal; i++){
        if (i%4 == 0){
            console.log(`Ano ${i} é um ano bissexto!`)
        }
    }
}

bissexto(2032)