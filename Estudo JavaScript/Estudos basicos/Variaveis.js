//pode-se usar tanto let quando var para a declaração de variaveis, o atualmente se utiliza mais o let, variaveis servem para guardar informações em tempo de execução
//não utilize var, use o let uma da diferenças é que o var permite a declaração de variaveis iguais no código podendo assim criar sobreposições 
let nome = 'Iza'
var nome2 = 'paula'

//utilizando virgula o elemento já tem um espaço para o proximo
console.log(nome, nome2)

//quando uma variável é declarada porém não iniciada ela recebe o valor de 'undefined'
let nova

console.log(nova)

//é de suma importância dar nomes significativos para as variaveis por exemplo para não usar só 'n' ou só 'nome' pode-se criar uma variável 'nomeCliente' que deixará o entendimento do código muito superior
let nomeCliente
//é utilizado o camelCase onde as palavras não possuem separação, porém as palavras após a primeira tem suas iniciais maiúsculas 