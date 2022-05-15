const numero = [1 ,43, 5, 6, 7, 24, 34, 75, 86, 34 ,94, 24, 53, 54, 34, 65]


//o método 'map' necessita receber uma função de parâmetro, está função realizara a a modificação do array, modificando todos os elementos conforme ordenado
//as funções chamadas por map recebem valor, índice e o array assim como ocorre com filter
//o array retornado de map sempre terá o mesmo tamanho do original 
const dobrarNumero = numero.map((valor, índice, array) => valor*2)
console.log(dobrarNumero)

console.log('#################################')

//retornar somente os nomes 
//remover apenas a chave nome do objeto
//adicione um id a cada objeto
const objetos = [
    {nome: 'Gabriel' , idade: 36},
    {nome: 'Tiago' , idade: 46},
    {nome: 'Leonardo' , idade: 73},
    {nome: 'Pablo' , idade: 23},
    {nome: 'Higor' , idade: 17}
]

const somenteNome = objetos.map(valor => valor.nome)
//ao retornar um objeto é necessário usar colchetes, que causam um bug, pois são interpretados como colchetes de função, para corrigir isso é necessário envolver em parenteses '()' para ser interpretado como uma expressão
const removeNome = objetos.map(obj => ({idade: obj.idade}))
const removeNome2 = objetos.map(obj => {delete(obj.nome); return obj})
//para adicionar um novo atributo a um objeto basta o criar usando o '.'
const addId = objetos.map((obj, indice) => obj.id = indice)

console.log(somenteNome)
console.log(removeNome)
console.log(removeNome2)
console.log(addId)