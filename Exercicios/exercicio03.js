function estoque(quantidade){
    if(quantidade<5){
        return "Estoque Crítico"
    }else{
        return "Estoque Normal"
    }
}

console.log(estoque(3))