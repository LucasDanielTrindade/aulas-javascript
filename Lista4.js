/*
Atividade 1: Você tem uma lista de usuários e precisa apenas daqueles que estão ativos para enviar um e-mail. 
Tarefa: Use o método filter para criar um novo array chamado usuariosAtivos.
*/
console.log("--- Atividade 01 ---")
const usuarios = [
    { nome: 'Ana', ativo: true },
    { nome: 'Beto', ativo: false },
    { nome: 'Caio', ativo: true },
    { nome: 'Duda', ativo: false }
];

let usuariosAtivos = usuarios.filter(usuario => usuario.ativo == true)
console.log(usuariosAtivos)

/*
Atividade 2: Uma loja quer dar 10% de desconto em todos os produtos, 
mas você deve manter os dados originais intactos (imutabilidade). 
Tarefa: Use map e o operador spread para criar um novo array de produtos com o preço atualizado.
*/
console.log("--- Atividade 02 ---")
const produtos = [ { nome: 'Teclado', preco: 100 }, { nome: 'Mouse', preco: 50 } ];

let produtosDescontados = produtos.map(produto => ({
    ...produto,
    preco: produto.preco*.9
}));
console.log(produtosDescontados)

console.log("--- Atividade 03 ---")

//Atividade 3: Você precisa calcular o valor total que o cliente vai pagar. 
// Tarefa: Use o método reduce para somar todos os preços do array abaixo.

const carrinho = [25.50, 10.00, 100.00, 5.00];

let total = carrinho.reduce((all,valor) => all + valor, 0) 

console.log(total); 

console.log("--- Atividade 04 ---")

//Atividade 4: Você recebeu uma lista de convidados onde alguns nomes aparecem duplicados por erro no sistema. 
// Tarefa: Crie uma função pura chamada limparLista que recebe um array e retorna um novo array sem duplicatas. 
// Requisito: Use o utilitário new Set() e o operador spread.

const nomesRepetidos = ['João', 'Maria', 'João', 'Pedro', 'Maria'];

let semDuplicatas = [...new Set(nomesRepetidos)];

console.log(semDuplicatas)

console.log("--- Atividade 05 ---")

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