let numeros =  [1,2,3,4,5,6,7,8,9]

for (const valor of numeros) {

    //a linha 'continue' tem a função de pular a execução do laço atual e ir pro proximo neste caso quando o valor for 2 ele não chegara no restante do condigo encontrar on continue e executara já no proximo valor 
    if (valor === 2) {
        continue
    }
    console.log(valor)
}

console.log('################################')

for (const valor2 of numeros) {

    //a linha 'break' tem a função de encerrar a execução, ele é usado geralmente para quando se procura um único elemento e quando encontrar ele finalizar a execução do condigo, neste caso ao chegar no valor 5 o laço será encerrado 
    if (valor2 === 5) {
        break
    }
    console.log(valor2)
}