//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

//solicita a idade do usuário
let IDADE = Number(prompt('Digite a sua idade: '))

//função criada para definir em qual faixa etária o usuário se encontra
if((IDADE >= 2) && (IDADE <= 11)){
    console.log('Você é uma criança!')
}else if((IDADE >= 12) && IDADE <=17){
    console.log('Você é um adolescente!')
}else if((IDADE >= 18) && (IDADE <= 59)){
    console.log('Você é um adulto!')
}else if(IDADE >= 60){
    console.log('Você é um idoso!')
}else{
    console.log('Digite um número válido!')
}