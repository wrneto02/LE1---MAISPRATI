//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.


let soma = 0
let lista = [] //array 

for(let n = 1; n <= 5; n++){
    let numero = Number(prompt('Digite um número: '))
    lista.push(numero);  //adiciona ao array
    soma += numero
}
console.log(`Os números digitados foram: ${lista.join(', ')}`); //transforma o array em uma string separada por vírgulas
console.log(`A soma dos números é: ${soma}`)