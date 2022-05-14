//para percorrer arrays ou mesmo interações com laços com o tamanho conhecido, a tendencia é a utilização do laço 'for'
//porém ao se trabalhar com uma condicional de valor aleatório pode-se utilizar o while  

function random(min, max) {
    //elevando o valor decimal retornado pela função 'random'
    const r = Math.random() * (max - min) + min
    //arredondando o valor de 'r'
    return Math.floor(r)
}

const max = 50
const min = 10

let ale = random(min, max)

while (ale !== 10) {
    ale = random(min, max)
    console.log(ale)
}
