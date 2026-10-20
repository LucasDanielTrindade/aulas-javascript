/*
Atividade 5: Você recebeu uma lista de produtos de uma API. Os nomes estão todos em letras minúsculas e
os preços são números brutos. Você precisa transformar essa lista em um formato amigável para o cliente.
Tarefa: Use o método map para criar um novo array chamado produtosFormatados.
Requisito 1: O nome deve começar com a primeira letra em maiúscula.
Requisito 2: Deve ser adicionada uma nova propriedade chamada precoFormatado contendo o valor com "R$ " 
e duas casas decimais.
Requisito 3: Utilize o Spread Operator para manter as propriedades originais (como o id) intactas.
*/

const apiProdutos = [
    { id: 101, nome: 'monitor led', preco: 899.9 },
    { id: 102, nome: 'teclado mecanico', preco: 250.0 },
    { id: 103, nome: 'mouse gamer', preco: 125.45 }
];

let produtosFormatados = apiProdutos.map(produto => ({
    ...produto,
    nome: produto.nome.charAt(0).toUpperCase() + produto.nome.slice(1),
    precoFormatado: `R$ ${produto.preco.toFixed(2)}`
})
)

console.log(produtosFormatados)