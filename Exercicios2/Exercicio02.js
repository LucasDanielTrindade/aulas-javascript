import elementosFake from "./elementosFake.json" with { type: "json" };
for (const elemento of elementosFake){
    if (elemento.style.color == "blue"){
        console.log(`O elemento ${elemento.tagName} é azul`)
    }
}