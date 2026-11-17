//Atividade 1: Percorra o array usando for...of. Para cada objeto, adicione uma nova 
// propriedade dentro de style chamada backgroundColor com o valor '#FFFFFF'. 
// No final, exiba o array modificado.

const elementosFake = [
    { id: 1, tagName: 'DIV', style: { color: 'blue', display: 'flex' }, classList: ['container', 'active'] },
    { id: 2, tagName: 'H1', style: { color: 'red', display: 'block' }, classList: ['title'] },
    { id: 3, tagName: 'BUTTON', style: { color: 'white', display: 'inline-block' }, classList: ['btn', 'btn-primary'] },
    { id: 4, tagName: 'LI', style: { color: 'black', display: 'list-item' }, classList: ['item-lista', 'pending'] },
    { id: 5, tagName: 'LI', style: { color: 'black', display: 'list-item' }, classList: ['item-lista', 'done'] },
    { id: 6, tagName: 'SECTION', style: { color: 'gray', display: 'grid' }, classList: ['main-section'] },
    { id: 7, tagName: 'P', style: { color: 'green', display: 'block' }, classList: ['text-content'] },
    { id: 8, tagName: 'SPAN', style: { color: 'yellow', display: 'inline' }, classList: ['highlight'] },
    { id: 9, tagName: 'LI', style: { color: 'black', display: 'list-item' }, classList: ['item-lista', 'pending'] },
    { id: 10, tagName: 'FOOTER', style: { color: 'white', display: 'flex' }, classList: ['footer-area'] }
];
console.log("--- Exercicio 01 ---")
for (const elemento of elementosFake) {
    elemento.style.backgroundColor = '#FFFFFF'
}
console.log(elementosFake)

console.log("--- Exercicio 02 ---")
elementosFake.forEach(elemento => {
    for (const chave in elemento) {
        if (chave == "id") {
            elemento[chave] = `ID-${elemento[chave]}`
        }
    }
});
console.log(elementosFake)

console.log("--- Exercicio 03 ---")

elementosFake.forEach(elemento => {
    for (const chave in elemento.classList) {
        if (elemento.classList[chave] == "pending"){
            elemento.classList.splice(chave)
            elemento.classList.push("done")
            elemento.style.color = "green"
        }
    }
});

console.log(elementosFake)
console.log("--- Exercicio 04 ---")
for (elemento of elementosFake){
    if(elemento.tagName == 'DIV'){
        elemento.tagName = 'SECTION'
        elemento.classList.push('converted')
    }
}
console.log(elementosFake)
console.log("--- Exercicio 05 ---")
let relatorioDeEstilos = []
elementosFake.forEach(elemento => {
    let add = {id: elemento.id, tagName: elemento.tagName, style: elemento.style}
    relatorioDeEstilos.push(add)  
});

console.log(relatorioDeEstilos)