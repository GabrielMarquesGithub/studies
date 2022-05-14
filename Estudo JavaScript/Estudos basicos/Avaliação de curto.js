//na utilização do operador logico and '&&' o javaScript interrompe a leitura da expressão logica ao encontrar  o primeiro false, para não desperdiçar tempo, e esse valor falso encontrado pode ser retornado   

//a alguns valores que são os FALSY que retornam falso sozinhos são eles o false  o zero 0 as chaves vazias '', "", `` o null, undefined e NaN, então qualquer outro valor sem ser estes retornam true 

//quando a espresso de logica é true retorna o ultimo valor
console.log('maria' && 'jão')
console.log('maria' && 'jão' && 12)

//quando ocorre o curto circuito ela retorna o primeiro valor FALSY encontrado 
console.log(false && 'jão' && 'abacate')
console.log('maria' && NaN && 12)
console.log('maria' && 0 && 'jão')

//sabendo disso é possível criar uma condicional sem uma estrutura 
function falaOi(){return 'oiiiii'}
//com a condição recebendo um valor Falsy ela criar um curto
condicao = undefined
console.log(condicao && falaOi())

//agora será exibida o oi pois a condição tinha um valor true, e a função está no ultimo lugar sendo ela então o retorno  
condicao2 = 12
console.log(condicao2 && falaOi())

console.log('----------------------------------------------------------')

//-o operador logico or '||' diferentemente do and executa uma curto-circuito de true, ou seja retorna o primeiro true encontrado, e pode ser utilizado como condicional

const usuarioCor = null
const corSIte = usuarioCor || 'preto'
//se o usuário não escolher uma cor, ele usara o padrão já que o valor true é retornado 
console.log(corSIte)

const usuarioCor2 = 'vermelho'
const corSIte2 = usuarioCor2 || 'preto'
//se o usuário escolher a cor a variável 'usuarioCor' terá um valor true e o curto-circuito será no primeiro true e retornara o valor que o usuario escolheu 
console.log(corSIte2)
