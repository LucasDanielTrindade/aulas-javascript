/*
Atividade 3: Use o método forEach. Verifique se no array classList
do elemento atual existe a string "pending". Se existir:
Remova "pending".
Adicione "done".
Altere a cor (style.color) para 'green'.
No final, exiba o array modificado.
*/


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

let elementosModificados = elementosFake

elementosModificados.forEach(elemento => {
    for (const chave in elemento.classList) {
        if (elemento.classList[chave] == "pending"){
            elemento.classList.splice(chave)
            elemento.classList.push("done")
            elemento.style.color = "green"
        }
    }
});

console.log(elementosModificados)