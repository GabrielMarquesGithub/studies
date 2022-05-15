//arrays são indexados a partir do índice 0
//representação do índice negativo
//                -3        -4        -5         -2       -1
//                 0         1         2          3        4
const nomes = ['Gabriel', 'Tiago', 'Leonardo', 'Pablo', 'Higor']

//o método splice pode remover e adicionar elementos
//o primeiro parâmetro que ele recebe é o índice de onde começar e o segundo é quantos eleamentos deletar, e os demais são quais elementos adicionar no array
//splice retorna o valor que deletou em formato de array, pois pode ser mais de um
//usando o splice como o pop, neste caso começara no índice igual (seu tamanho - 1) e irá retirar 1 elemento, é praticamento a mesma logica do pop
let visor = nomes.splice(/*nomes.length*/-1,1)
console.log(nomes, visor)

console.log('###################################')

//usando como push, ele começa no indice de seu length que pe 1 a mais já que arrays começa no 0, vai apagar '0' elementos e vai add a palavra 'Higor'
nomes.splice(nomes.length,0,'Higor')
console.log(nomes)

console.log('###################################')


//as operações podem ser feitas em conjunto neste caso ira remover o item a partir índice -2 irá remover apenas 1 elemento, e colocar 'NovoValor' no lugar
nomes.splice(-2,1,'NovoValor')
console.log(nomes)


