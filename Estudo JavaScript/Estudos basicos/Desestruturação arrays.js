//a atribuição por desestruturação tem base na possibilidade de receber valores de arrays em muitas variaveis em apenas uma linha

/*
let número = [100,200,300,400,500]
let [a,b,c,d,e] = número
console.log(a,b,c,d,e)
*/

//ocorre que a posição de cada variável recebe a mesma posição do índice do array

//não é necessário que o numero de variaveis atinja a quantidade total do array

/*
let número = [100,200,300,400,500,600,700,800]
let [a,b,c,d,e] = número
console.log(a,b,c,d,e)
*/

//é possível que os valores não pegos do array sejam direcionado a apenas uma variável criando assim outro array sem os valeres já selecionados  

/*
let número = [100,200,300,400,500,600,700,800,900]
let [a,b,c,d, ...resto] = número
console.log(a,b,c,d)
console.log(resto)
*/

//o operador '...' quando usado para pegar o resto é chamado de 'rest', quando usado para espalhar algo é chamado de 'spread'

//é possível pular valores para pegar os posteriores, é somente usar a virgula com espaço vazio 

let número = [100,200,300,400,500,600,700,800,900]
let [a, ,b, ,c , ,d] = número
console.log(a,b,c,d)
console.log(resto)