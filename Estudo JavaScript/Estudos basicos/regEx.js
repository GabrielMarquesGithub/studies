//essa é uma variável para comparar senhas tanto em letras maiúsculas 'A-Z', minusculas 'a-z', números '0-9' e caracteres especias declarados literalmente, porém é necessário ter apenas de um tipo para ser validada
//outra função é a limitação de caractere indicados pelo {8,20} que tem q ter no mínimo 8 e no máximo 20
let regex = /^(?=.*[@!#$%^&*()/\\])[@!#$%^&*()/\\a-zA-Z0-9]{8,20}$/

//regex mais elaborado exigindo a inclusão de pelo menos um caractere de cada tipo
//cada regex é separado por parentese '()'
//por exemplo esse regex (?=.*[0-9]) confere a existência de um numero de 0 a 9
let regex = /^(?=.*[@!#$%^&*()/\\])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[@!#$%^&*()/\\a-zA-Z0-9]{8,20}$/