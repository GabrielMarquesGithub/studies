//os tipos primitivos são - String, Number, Boolean, Undefined, Null, BigInt Symbol

//um dado primitivo quando passado a outra variável somente gera uma copia, ou seja após a passagem se torna independente não sendo afetado por mudanças feitas no primeiro 
a = 10
b = a

console.log(a, b)

a = 20

console.log(a, b)
//'b' manteve seu valor mesmo com a mudança posterior de 'a'

console.log('---------------------------------------------')

//isso ocorre em dados primitivos, porém outros tipos atuam por referencia ou seja sendo mutáveis e referenciando o mesmo local da memoria - arrays, object, function 
x = [1,2,3]
y = x
console.log(x, y)

x[1] = 'a'
console.log(x, y)
//como referenciam ao mesmo local de memoria mesmo após o final da interação, quando 'x' é alterado 'y' também é

console.log('---------------------------------------------')

w = [33,22,55]
//maneira de fazer uma copia de todos os dados de um array com '...', neste caso z recebe w por completo, criando uma copia como um tipo primitivo e não referencia  
z = [...w]
console.log(w, z)

w[1]=0
console.log(w, z)

console.log('---------------------------------------------')

//as constantes funcionam exatamente como arrays 
const pessoa = {
    nome:'Gabriel',
    idade: 19
}
const pessoa2 = pessoa
console.log(pessoa, pessoa2)
//seguem a referencia 
pessoa.nome = 'Nicolas'
console.log(pessoa, pessoa2)


//pode-se usar '...' para copiar e não referenciar também 
const pessoa3 = {...pessoa}
console.log(pessoa, pessoa2, pessoa3)

pessoa.nome = 'Marcos'
console.log(pessoa, pessoa2, pessoa3)
//a que usa referencia foi alterada junto, já a copiada não sofre a pós alteração 