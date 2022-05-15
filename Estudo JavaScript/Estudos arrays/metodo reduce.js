const numero = [1 ,43, 5, 6, 7, 24, 34, 75, 86, 34 ,94, 24, 53, 54, 34, 65]

//o método 'reduce' necessita receber uma função de parâmetro, diferentemente de 'filter' e 'map', o reduce recebe um parâmetro a mais, que no caso é o acumulador, e depois recebe as outras, valor, índice e array
//o objetivo de 'reduce' é retornar a soma total de valores dentro de um array

/*
const somaTotal = numero.reduce(function (acumulador,valor) {
    return acumulador+=valor
    //ao declarar reduce como uma 'function' normal é possível indicar o seu valor apo´s a função e a virgula 
}, 0)
*/

//reduce pode ser usado como 'filter' ou mesmo 'map', porém não é algo indicado
//reduce em uma função arrow
const somaTotal = numero.reduce((acumulador,valor)=> acumulador+=valor)
console.log(somaTotal)



const objetos = [
    {nome: 'Gabriel' , idade: 36},
    {nome: 'Tiago' , idade: 46},
    {nome: 'Leonardo' , idade: 55},
    {nome: 'Pablo' , idade: 23},
    {nome: 'Higor' , idade: 66}
]
//é possível usar reduce para laços de comparação, o acumulador ao não receber parâmetros após a função tem como dados o primeiro objeto, e valor tem como dados 1 a mais, no caso o segundo objeto
const maiorIdade = objetos.reduce(function (acumulador,valor) {
    //essa linha será comparada até o final do array, retornando ao final o objeto com maior idade
    if (acumulador.idade > valor.idade) return acumulador
    return valor
})

console.log(maiorIdade)
