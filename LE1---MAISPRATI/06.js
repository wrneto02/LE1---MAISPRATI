//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.


let LA = Number(prompt('Digite um número inteiro para o lado A do triângulo: ')) 
let LB = Number(prompt('Digite um número inteiro para o lado B do triângulo: '))
let LC = Number(prompt('Digite um número inteiro para o lado C do triângulo: '))

if((LA < LB + LC) && (LB < LA + LC) && (LC < LA + LB)){

    if((LA == LB) && (LB == LC)){
        console.log('Os lados fornecidos formam um Triângulo Equilátero!')
    }else if((LA == LB) || (LA == LC) || (LB == LC)){
        console.log('Os lados fornecidos formam um Triângulo Isósceles!')
    }else{
        console.log('Os lados fornecidos formam um Triângulo Escaleno!')
    }

}else{
    console.log('Os lados fornecidos não formam um triângulo!')
}