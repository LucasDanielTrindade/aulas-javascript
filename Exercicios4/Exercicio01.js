/*
Atividade 1: Você tem uma lista de usuários e precisa apenas daqueles que estão ativos para enviar um e-mail. 
Tarefa: Use o método filter para criar um novo array chamado usuariosAtivos.
*/
const usuarios = [
    { nome: 'Ana', ativo: true },
    { nome: 'Beto', ativo: false },
    { nome: 'Caio', ativo: true },
    { nome: 'Duda', ativo: false }
];

let usuariosAtivos = usuarios.filter(usuario => usuario.ativo == true)
console.log(usuariosAtivos)