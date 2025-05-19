//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

let quantidade = Number(prompt('Quantas maçãs foram compradas? '))
let total = 0

if(isNaN(quantidade) || quantidade <= 0){
    console.log('Por favor digite um número válido!')
}else if(quantidade >= 12){
    total = (quantidade*0.25)
    console.log(`Total da compra de ${quantidade} maçãs é de R$ ${total.toFixed(2)}`)
}else{
    total = (quantidade*0.30)
    console.log(`Total da compra de ${quantidade} maçãs é de R$ ${total.toFixed(2)}`)
}