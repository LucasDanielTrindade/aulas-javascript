const prompt = require('prompt-sync')();

const FichaItemTemplate = {
    Nome: "",
    Preco: 0,
    Raridade: "Comum",
    Estoque: 12
};

let Itens = {};

let nome = '';
nome = prompt("Qual o nome do item?");
let preco = 0;
while (preco <= 0) {
    preco = prompt("Qual o preço do item?");
};
let raridade = '';
let emDestaque = false;
if (preco < 100) {
    raridade = "Comum"
} else if (preco >= 100 && preco < 500) {
    raridade = "Raro"
} else {
    raridade = "Lendário"
    emDestaque = true
};

console.log(`Nome: ${nome}`)
console.log(`Preco: ${preco}`)
console.log(`Raridade: ${raridade}`)
console.log(`EmDestaque: ${emDestaque}`)