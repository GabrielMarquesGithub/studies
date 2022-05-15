const numero = [1 ,43, 5, 6, 7, 24, 34, 75, 86, 34 ,94, 24, 53, 54, 34, 65]

//função eficiente
/*
const callbackFilter = (valor, indice, array) => valor > 30
*/

//o método 'filter' necessita receber uma função de parâmetro, está função realizara a condicional do filtro, retornando true ou false, se retornado true o valro analisado é adicionado ao novo array neste caso 'numeroFiltrado'
//queremos números maiores que 30
//é passado como parâmetro apenas a referencia a função ela n é executada, pois o próprio método a executara
//const numeroFiltrado = numero.filter(callbackFilter)
//se eu não planejo usar minha função em nenhum outro lugar do código posso simplesmente criar uma função anonima 
const numeroFiltrado = numero.filter(valor => valor > 30)

console.log(numeroFiltrado)

//as funções chamadas por filter recebem como padrão o valor do numero executado em cada laço, o seu índice, e é passado o array como um todo se necessário 

//formas de escrever funções, a mais eficiente para essa tarefa seria uma de arrow, que está no topo do código já q funções arrows não recebem hoisting
/*
function callbackFilter(valor, indice, array){
    if (valor > 30) return true
    return false
}
*/

/*
function callbackFilter(valor, indice, array){
    return valor > 30
}
*/

console.log('##################################################3')


//retornar pessoas com mais de 5 letras
//com mais de 30 anos
//pessoas que o nome termino com 'o'
const objetos = [
    {nome: 'Gabriel' , idade: 36},
    {nome: 'Tiago' , idade: 46},
    {nome: 'Leonardo' , idade: 73},
    {nome: 'Pablo' , idade: 23},
    {nome: 'Higor' , idade: 17}
]

const pessoa5Letras = objetos.filter(valor => valor.nome.length > 5)
const pessoa30Mais = objetos.filter(valor => valor.idade > 30)
//da para realizar a ultima com o slice
//const pessoaO= objetos.filter(valor => valor.nome.slice(-1) == 'o')
const pessoaO= objetos.filter(valor => valor.nome.endsWith('o'))


console.log(pessoa5Letras)
console.log(pessoa30Mais)
console.log(pessoaO)

