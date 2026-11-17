const isAdulto = idade => idade >= 18

console.log("Função isAdulto, 67 anos")
console.log(isAdulto(67))

const getAreaQuadrado = lado => lado*lado

console.log("Função getAreaQuadrado, lado 67")
console.log(getAreaQuadrado(67))
const formatarReal = valor => `R$ ${valor.toFixed(2)}`

console.log("Função formatarReal, valor 67.50")
console.log(formatarReal(67.67))