//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.


let sequencia = Number(prompt('Quantas vezes você deseja ver a sequência de Fibonacci? '));
let N1 = 0
let N2 = 1

console.log('Sequência de Fibonacci: ');

for(i = 1; i <= sequencia; i++){
    console.log(N1)
    let proximo = N1 + N2;
    N1 = N2;
    N2 = proximo;
}