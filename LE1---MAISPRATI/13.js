//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.


let soma = 0
let contador = 0
let resultado = 0

do{
    result = parseFloat(prompt('Digite números decimais (Para finalizar a operação e calcular a média, digite 0): '))

    if(resultado !== 0){
        soma += resultado 
        contador++ 
    }

}while(resultado != 0)

    if(contador > 0){
        let media = soma/(contador)
        console.log(`A média final é: ${media.toFixed(2)}`)
    }else{
        console.log('Digite um número válido, por favor.')
    }
