//retornar a soma do dobro dos números pares
const numero = [1 ,43, 5, 6, 7, 24, 34, 75, 86, 34 ,94, 24, 53, 54, 34, 65]
const resultado = numero
//filtrando números pares
.filter(valor => valor%2===0)
//duplicando os valores
.map(valor => valor*2)
//somando todos os valores
.reduce((ac, valor) => ac += valor)  

console.log(resultado)