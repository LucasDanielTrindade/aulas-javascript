//Atividade 4: Você recebeu uma lista de convidados onde alguns nomes aparecem duplicados por erro no sistema. 
// Tarefa: Crie uma função pura chamada limparLista que recebe um array e retorna um novo array sem duplicatas. 
// Requisito: Use o utilitário new Set() e o operador spread.

const nomesRepetidos = ['João', 'Maria', 'João', 'Pedro', 'Maria'];

let semDuplicatas = [...new Set(nomesRepetidos)];

console.log(semDuplicatas)