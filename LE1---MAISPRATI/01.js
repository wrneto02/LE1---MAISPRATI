//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

// Solicita ao usuário que digite um número
let numero = Number(prompt("Digite o número que deseja verificar se é par ou ímpar:"));

// Função para verificar se o número é par ou ímpar
if (numero % 2 === 0) {
    alert("O número ${numero} é par.");
} else {
    alert("O número ${numero} é ímpar.");
}
