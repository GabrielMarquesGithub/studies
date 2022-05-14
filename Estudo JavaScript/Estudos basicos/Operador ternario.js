//o operador ternário tem a função de substituir um if else, em uma linha apenas 

const pontosUsuario = 534

/* todas essa linha de if podem ser substituídas 
if (pontosUsuario > 500) {
    console.log('Usuário vip')
}
else{
    console.log('Usuário normal')
}
*/

const resposta = pontosUsuario > 500 ? 'Usuário vip' : 'Usuário normal'
console.log(resposta)