//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

//solicita o número que o usuario deseja ver a tabuada
let Tabuada = Number(prompt('Digite um número de 1 a 10 para exibir a tabuada: '))

//laço para printar toda a tabuada do numero escolhido
if(Tabuada >= 1 && Tabuada <= 10){
    console.log(`\nA tabuada do número ${Tabuada} é: `)
    for(let i = 1; i <= 10; i++){ 
        console.log(`${Tabuada} x ${i} é: ${Tabuada * i}`)
    }
}else{
    console.log('Por favor, digite um número entre 1 e 10: ')
}
