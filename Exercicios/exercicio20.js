let salarios = [1500,3000,2500,2000,1200,5000,4500]

const verSalarios = array =>{
    let gastoTotal = 0
    for(salario of salarios){
        if(salario<2000){
            gastoTotal += (salario*1.1)
        }else{
            gastoTotal += salario
        }
    }
    return `O gasto total foi de R$ ${gastoTotal}!`
}
console.log(verSalarios(salarios))