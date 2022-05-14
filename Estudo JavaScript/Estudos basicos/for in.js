let frutas = ['banana', 'maça', 'uva', 'pera', 'laranja']

//o for in percorre um array de forma 'automática' sendo necessário apenas a criação do índice e informar o array 
for (const indice in frutas) {
    console.log(frutas[indice])
}
 
const pessoa = {
    nome: 'Gabriel',
    Sobrenome: 'Marques',
    idade: 19
}
//pode-se fazer a mesma dinâmica para a leitura de objetos, neste caso o índice do for não será um número mais sim a chave de um atributo 
for (const indice in pessoa) {
    console.log(indice, pessoa[indice])
}