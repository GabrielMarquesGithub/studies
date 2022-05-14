//escrever função para checar se imagem está no modo paisagem 

function checarModo(x, y) {
    //operador ternário 
    return x > y ? true : false
}

console.log(checarModo(523, 676))


//função arrow para checagem, ao fazer um checagem que retorna true ou false, basta deixar o operação, que naturalmente ela retorna true ou false  
const imagemTipo = (x, y) => x > y

console.log(imagemTipo(124, 64))