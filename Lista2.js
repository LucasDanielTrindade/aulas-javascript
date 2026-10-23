const elementosFake = [
    {
      tagName: 'DIV',
      style: { color: 'blue', display: 'flex' },
      classList: ['container', 'active']
    },
    {
      tagName: 'H1',
      style: { color: 'red', display: 'block' },
      classList: ['title']
    },
    {
      tagName: 'BUTTON',
      style: { color: 'white', display: 'inline-block' },
      classList: ['btn', 'btn-primary']
    }
  ];  

console.log("--- Atividade 01 ---")

for (const chave in elementosFake[0]){
    console.log(elementosFake[0][chave])
}

console.log("--- Atividade 02 ---")
for (const elemento of elementosFake){
    if (elemento.style.color == "blue"){
        console.log(`O elemento ${elemento.tagName} é azul`)
    }
}

console.log("--- Atividade 03 ---")
elementosFake.forEach(element => {
    console.log(`Nome do elemento: ${element.tagName}`)
});

console.log("--- Atividade 04 ---")
elementosFake.forEach(element => {
    console.log(`Nome do elemento: ${element.tagName}`)
    console.log(`Quantidade de classes: ${element.classList.length}`)
});

console.log("--- Atividade 05 ---")
elementosFake.forEach(element => {
    console.log(`Nome do elemento: ${element.tagName}`)
    console.log(`Quantidade de classes: ${element.classList.length}`)
    console.log(`Classes: ${element.classList}`)
});