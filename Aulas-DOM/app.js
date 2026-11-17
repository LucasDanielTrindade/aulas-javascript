//PASSO 2

console.log('Missão iniciada!');
console.log(document)

//Passo 3

const titulo = document.querySelector('#titulo');
titulo.textContent = 'Aula de DOM';
titulo.style.color = 'red';


//Passo 04

const p1 = document.querySelector('.texto');
p1.style.fontWeight = 'bold';

const textos = document.querySelectorAll('.texto');
textos.forEach(p => p.style.color = 'green');

// passo 05

const caixa = document.querySelector('div');
caixa.style.border = '3px solid blue';
caixa.style.padding = '20px';

const campoNome = document.querySelector(
    '.container input[type="text"]'
);
campoNome.value = 'Maria';