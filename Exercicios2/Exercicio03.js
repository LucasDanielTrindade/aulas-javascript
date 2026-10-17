import elementosFake from "./elementosFake.json" with { type: "json" };
elementosFake.forEach(element => {
    console.log(`Nome do elemento: ${element.tagName}`)
});