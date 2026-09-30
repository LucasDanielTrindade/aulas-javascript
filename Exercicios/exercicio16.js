let vips = ["Lucas","Ryan","Gabriel","Caio","Andrew"]

const verVips = nome =>{
    for (vip of vips){
        if (vip == nome){
            return "Está na lista"
        }
    }
    return "Não está na lista"
}

console.log(verVips("Ryan"))