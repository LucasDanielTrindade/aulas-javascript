import elementosFake from "./elementosFake.json" with { type: "json" };
elementosFake.forEach(element => {
    console.log(`Nome do elemento: ${element.tagName}`)
    console.log(`Quantidade de classes: ${element.classList.length}`)
});