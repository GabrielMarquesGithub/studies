//diferente de arrays objetos são cariados com '{}', um objeto e declarado, recebendo um nome, e pode guarda atributos, dentro de um objeto cada elemento deve ser separado por uma virgula 
const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Marques',
    idade: 19
}
//pare acessar um atributo desse objeto é exatamente como em outros usando o '.'
console.log(pessoa.idade)



//é possível a criação de uma função que cria objetos, recebendo apenas, ssas funções ~sao chamadas de factory 
function criarPessoas(nome, sobrenome, idade) {
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade 
    }
}
//chamada da função para criação de um nome
const pessoa1 = criarPessoas('Breno','Wender', 20)
console.log(pessoa1.nome)


//O javaScript tem inteligencia para identificar os valores é ja tratar os próprios parâmetros como atributos do objeto, evitando por exemplo a necessidade de duplicar como no primeiro exemplo  
function criarPessoas2(nome, sobrenome, idade) {
    return{nome, sobrenome, idade }
}

//chamada da função aprimorada 
const pessoa2 = criarPessoas2('Lara','Silva', 21)
console.log(pessoa2.nome)

console.log('---------------------------------------------')

//é possível criar funções dentro de objetos, neste caso sem utilizar a palavra 'function' e essas funções são chamadas de métodos 
const carro = {
    nome: 'Fusca',
    tipo: 'carro',
    ano: 2050,

    anoDoCarro() {
            //o this neste contexto faz referencia ao objeto ao qual ele está dentro, neste caso o objeto 'carro'
            console.log(`O ${this.nome} é do ano de ${this.ano}`)
    },
    incrementaAno() {
            this.ano++  
    }
}

//para chamar um método dentro de um objeto, também é como os demais nativos, bastando adicionar o '.'
carro.anoDoCarro()
carro.incrementaAno()
carro.incrementaAno()
carro.anoDoCarro()