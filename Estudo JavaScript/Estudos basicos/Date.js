//Date é uma função construtora, esse tipo de função deve sempre se iniciar com letra maiúscula e 'new' antes de sua declaração

//let data = new Date(0) //a data 0 é em 1/1/1970 Timestamp unix ou época unix, para se ter uma data anterior é necessário utilizar valores negativos 

//é possível criar uma data, passando primeiro o 'ano' o 'mes' que começa do 0 ao 11, depois o 'dia' a 'hora' os 'minutos' 'segundos' e depois 'milissegundos'
let data2 = new Date(2022, 5, 10, 19, 44)

//outra maneira de passar a data é como string, passando  data e depois a hora, neste caso o més recebe o valor convencional
let data3 = new Date('2022-6-10 20:14:45')

//exibir a data escrita 
console.log(data2.toString())
console.log(data3.toString())

console.log('-------------------------------------------------')

//é possível 'quebrar' a data e obter os valores separados
console.log('Dia', data3.getDate())
console.log('Mes', data3.getMonth())
console.log('Ano', data3.getFullYear())
console.log('Min', data3.getMinutes())
console.log('Seg', data3.getSeconds())
console.log('Ms', data3.getMilliseconds())
console.log('Dia da semana', data3.getDay()) // dia da semana 0 é domingo e 6 é sábado

