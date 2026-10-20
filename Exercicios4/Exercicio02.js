/*
Atividade 2: Uma loja quer dar 10% de desconto em todos os produtos, 
mas você deve manter os dados originais intactos (imutabilidade). 
Tarefa: Use map e o operador spread para criar um novo array de produtos com o preço atualizado.
*/

const produtos = [ { nome: 'Teclado', preco: 100 }, { nome: 'Mouse', preco: 50 } ];

let produtosDescontados = produtos.map(produto => ({
    ...produto,
    preco: produto.preco*.9
}));
console.log(produtosDescontados)