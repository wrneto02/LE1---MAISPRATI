//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

//solicita a nota que o aluno tirou
let notafinal = Number(prompt('Digite uma nota de 0 a 10: '))

//define a nota média
let media = 6

//função para definir a situação final do aluno
if(isNaN(notafinal) || notafinal < 0 || notafinal > 10){
    console.log('Por favor, digite um número inteiro entre 0 e 10!')
}else if(notafinal > media){
    console.log(`O(a) aluno(a) que tirou ${notafinal} está APROVADO!`)
}else if(notafinal === media){
    console.log(`O(a) aluno(a) que tirou ${notafinal} está em RECUPERAÇÃO!`)
}else{
    console.log(`O(a) aluno(a) que tirou ${notafinal} está REPROVADO!`)
}
