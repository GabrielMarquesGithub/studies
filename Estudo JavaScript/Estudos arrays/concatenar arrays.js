//arrays são indexados a partir do índice 0
//representação do índice negativo
//                -3        -4        -5         -2       -1
//                 0         1         2          3        4
const nomes = ['Gabriel', 'Tiago', 'Leonardo', 'Pablo', 'Higor']
const func = ['front-end', 'atoa', 'back-end','B-dados','escritor']

//o método concat tem a função de concatenar, agr 'junto' recebe a junção dos arrays 
const junto = nomes.concat(func)
console.log(junto)

//usando o 'concat' é possível fazer a junção de diversos tipos de valores
const junto2 = junto.concat(2, 400000, ['alo'])
console.log(junto2)

console.log('##################################')

//outra maneira de fazer a junção é com o operador spread, é possível adicionar diversos tipos de valores também  
const junto3 = [...nomes, ...func, ...[1,2,3,4], 'NovoValor']