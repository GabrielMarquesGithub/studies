//aspas simples dentro de aspas duplas são exibidas e vise-versa, já usando a crase ambas são exibidas
console.log('"hello" world')
console.log("'hello' world")
console.log(`"hello" 'world'`)

//textos com variaveis dentro ah 3 modelos a se seguir

var nome = 'Gabriel'
var idade = 19

//na separação por virgula ',', é criado com espaço entre os elementos 
console.log(nome, 'tem', idade, 'anos de idade')

//na união por '+' os elementos são concatenados em uma única string, porem para uma legibilidade é necessários aplicar espaços manualmente  
console.log(nome + ' tem ' + idade + ' anos de idade')

//essa é a mais moderna e a técnica mais indicada, onde em um texto com crases se utiliza o '$' e os '{}' para indicar as variaveis  
console.log(`${nome} tem ${idade} anos de idade`)