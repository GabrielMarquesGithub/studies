let num0 = 10200
let num1 = 10.123567876543
let num2 = 2.5

//soma normal 
console.log(num2+num1)

//transformando 'Number' em 'String' usando 'toString()', se um valor for string o operador '+' não irá somar, mas sim concatenar  
console.log(num2.toString()+num1)

//usando o 'toString(2)' com o valor 2 o número será passado para binário 
console.log(num0.toString(2))

//usando o 'toFixed(2)' é possível arredondar um número, e pode-se passar em valor a quantidade de casas após o ponto que deseja ser exibida 
console.log(num1.toFixed(3))

//usando o 'Number.isInteger(num0)' e passando a variável é passível checar se ela é um numero inteiro, se for será retornado true, se não false 
console.log(Number.isInteger(num0))

//na realização de uma operação matemático com um valor invalido é retornado um NaN 'not a number' é passível obter uma variável boolean testando isso com o 'Number.isNaN(temp)' onde se a variável for NaN será retornando true
let temp = 10 * 'ola'
console.log(temp)
console.log(Number.isNaN(temp))

//Ao trabalhar com número com pontos flutuantes é encontrado imprecisões em operações  
let numFloat1 = 0.7
let numFloat2 = 0.1
console.log(numFloat1 + numFloat2)
//para consertar pode-se utilizar dois métodos 
let numArrumado = (numFloat1 * 100 + numFloat2 * 100) / 100
console.log(numArrumado)
//segundo método 
numArrumado = numFloat1 + numFloat2
console.log(numArrumado)
console.log(Number.isInteger(parseInt(numArrumado.toFixed())))