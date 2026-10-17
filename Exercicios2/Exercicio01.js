import elementosFake from "./elementosFake.json" with { type: "json" };
for (const chave in elementosFake[0]){
    console.log(elementosFake[0][chave])
}
