const frutas = ['Maçã', 'Banana', 'Uva'];

console.log("--- lista normal ---")

for (const fruta of frutas) {
    console.log(fruta);
}


frutas.push("Laranja")
console.log("--- lista adicionando Laranja no final ---")
for (const fruta of frutas) {
    console.log(fruta);
}

frutas.pop()
console.log("--- lista removendo Laranja no final ---")
for (const fruta of frutas) {
    console.log(fruta);
}
frutas.unshift("Laranja")

console.log("--- lista adicionando Laranja no começo ---")
for (const fruta of frutas) {
    console.log(fruta);
}

frutas.shift()

console.log("--- lista removendo Laranja do começo ---")
for (const fruta of frutas) {
    console.log(fruta);
}

console.log("--- lista adicionando Laranja na posição 1 ---")
frutas.splice(1, 0, "Laranja");
for (const fruta of frutas) {
    console.log(fruta);
}
console.log("--- lista removendo Laranja da posição 1 ---")
frutas.splice(1, 1);
for (const fruta of frutas) {
    console.log(fruta);
}
console.log("--- lista adicionando 3 novas frutas ---")
frutas.splice(1, 0, "Morango");
frutas.unshift("Laranja")
frutas.push("Abacaxi")

for (const fruta of frutas) {
    console.log(fruta);
}

console.log("--- lista removendo 2 frutas ---")
frutas.pop()
frutas.shift()
for (const fruta of frutas) {
    console.log(fruta);
}