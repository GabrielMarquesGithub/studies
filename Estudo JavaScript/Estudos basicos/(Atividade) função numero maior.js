//escrever uma função para retornar o maior número
function maiorNumero(num1, num2) {

    //operador ternário tem uma condição depois o '?' após vem o valor a ser retornado ser for true 'num1' depois ':' e depois o valor a ser retornado caso for false 'num2'
    return num1 > num2 ? num1:num2
 
}

console.log(maiorNumero(120, 430))


//usando uma arrow function é possível reduzir muito o código, quando cabe em uma linha arrow function não necessita da palavra return
const maiorValor = (y, x) => y > x ? y:x

console.log(maiorValor(234, 250))