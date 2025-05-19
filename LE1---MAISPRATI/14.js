//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.


let numero = Number(prompt('Digite o número que você deseja calcular o fatorial: '))
let fat = 1 
if(numero < 0){
    console.log('O número inserido não pode ser negativo! Por favor, digite um número positivo e maior que 0!')
}else{
    for(let i = 1; i <= numero; i++){
        fat *= i
    }
    console.log(`O fatorial de ${numero} é: ${fat}`);
}
