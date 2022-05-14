//criação de objeto
const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Marques',
    idade: '19',
    //é comum no JS a criação de objetos dentro de objetos 
    endereço:{
        rua: 'Av. Ana',
        num: '541'
    }
}
//console direto no num do endereço
console.log(pessoa.endereço.num)

//passando algum valor do objeto pra uma varinel 
let numCasa = pessoa.endereço.num
console.log(numCasa)

//a atribuição via desestruturação em objetos se da pelas '{}'
//para receber um valor basta criar uma variável entre colchetes '{}' com o mesmo nome do atributo desejado do objeto 
//é possível definir um valor padrão para se não existir no objeto, por exemplo neste caso caso o objeto n tenha um atributo 'nome1' ele recebe 'nome padrão' como objeto
const {nome = 'nome padrão', sobrenome, idade} = pessoa
console.log(nome, sobrenome, idade)

//caso deseje que o nome da variável seja diferente do atributo do objeto é pssivel citar o atributo usar ':' e criar uma variável com o valor
const {nome:nomeAki = 'nome padrão', sobrenome: sobrenomeAki} = pessoa
console.log(nomeAki, sobrenomeAki)

//para atribuições em objetos de objetos basta adicionar outro colchete indicando sua abertura, e funciona normalmente podendo até adicionar valores padrões 
const {endereço:{ rua:ruaAki = 'variável padrão', num}} = pessoa
console.log(ruaAki, num)

//é possível usar o rest também, pegando valores e deixando o resto para uma variável com o operador rest '...' 
const {nome:novoNome, ...resto} = pessoa
console.log(resto)