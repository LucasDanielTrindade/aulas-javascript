//Atividade 3: Você precisa calcular o valor total que o cliente vai pagar. 
// Tarefa: Use o método reduce para somar todos os preços do array abaixo.

const carrinho = [25.50, 10.00, 100.00, 5.00];

let total = carrinho.reduce((all,valor) => all + valor, 0) 

console.log(total); 