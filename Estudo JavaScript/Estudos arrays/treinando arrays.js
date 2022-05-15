//codigo para inversão de vetores 
let numeros = [1, 3, 6, 2, 4, 7, 4, 2, 1, 67, 23, 86, 1, 4, 6, 7, 9, 8]

const inverteValor = vetor => {
    const manu = [...vetor] 
    for (const indice in vetor) {
        console.log(indice)
        vetor[indice] = manu[vetor.length - indice - 1]
    } 
    return vetor  
}
numeros = inverteValor(numeros)
console.log(numeros) 
//fim.
console.log('#####################################')