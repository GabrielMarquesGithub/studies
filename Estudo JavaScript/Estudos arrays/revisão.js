//arrays são indexados a partir do índice 0
//                 0         1         2          3        4
const nomes = ['Gabriel', 'Tiago', 'Leonardo', 'Pablo', 'Higor']

//método slice tem o poder de recortar, neste caso vai cortar do índice 1 até o 2 'Tiago' e 'Leonardo'
let visor = nomes.slice(1,3)
console.log(visor)

//ou podo cortar como do índice zero ou seja o array inteiro menos um valor
visor = nomes.slice(0,-1)
console.log(visor)

console.log('##########################################################')

const nome = 'Gabriel Marques Magalhães'
visor = nome.split(' ')
//o método split separa strings por caracteres informados, neste caso ela vai separar quando encontrar um espaço ' '
console.log(visor)

visor = visor.join(', ')
//o método join tem a  função de unir elementos de um array em uma string, é possível determinar um caractere para a separação deles na string deste caso a virgula e o espaço ', '
console.log(visor)