function retornaHora() {
    return new Date().toLocaleTimeString('pt-BR', {
        hour12:false
    })
}
function mostraHora(){
console.log(retornaHora())
}

//setInterval é uma função nativa que funciona como um timer, onde executa uma função a cada intervalo de tempo, o  tempo é passado em milissegundos neste caso a cada 1000 milissegundos ou 1 segundo a função mostraHora será executada 
const timer = setInterval(mostraHora, 1000)

//o clearInterval tem a função de interromper a execução de alguma função de intervalo, para ela ser executada é necessário ter alguma referencia ao intervalo, neste caso ele foi passado para um constante  
clearInterval(timer)

//a ocorrência mais comum de setInterval é se utilizando de uma função anonima 
const timer2 = setInterval(function(){console.log(retornaHora())}, 1000)

//o 'setTimeout' é um função de intervalo que executa uma única vez, neste caso ele executará a sua função anonima irá parar a execução do 'setInterval' depois de 6000 milissegundos ou 6 segundos 
setTimeout(function(){
    clearInterval(timer2)
},6000)