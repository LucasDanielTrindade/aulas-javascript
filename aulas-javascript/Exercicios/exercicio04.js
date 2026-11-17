const prompt = require('prompt-sync')();
let maximo = prompt("Insira a quantidade maxima de repetições: ")

function contagem(numMax) {
    for (let i = 1; i <= maximo; i++) {
        console.log(i)
    }
}
contagem(maximo)