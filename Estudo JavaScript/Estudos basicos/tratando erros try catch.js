//o tratamento de erros deve ser feitos em linhas de códigos que podem apresentar alguma falha durante a execução do código, vale salientar que é indicado não apresentar o erro ao usuário, e se necessário apenas guarder ele em um banco de dados


//os códigos que possam ter erros devem ir dentro do bloco try
try{
    console.log(erroProposital)
    //o tratamento do erro é realizado dentro do bloco catch
}catch(err){
    console.log('Erro enviado para o back end')
}

try{
    //é executado quando não a erros
}catch{
    //é executado quando a erros
}finally{
    //sempre é executado 
}


console.log('#################################')
// ################# exemplo #################

function retornaHora(data) {
    //basicamente será executado se a variável data for enviada e diferente de uma instancia do objeto 'Date'
    if(data && !(data instanceof Date)){
        console.log('Tipo Date não enviado')
        throw new TypeError('Esperando instancia de Date')
    }
    //se nenhuma data for enviada, data recebera uma instancia padrão
    if(!data){
        console.log('Nenhum valor enviado para data, criando um novo')
        data = new Date()
    }

    //retorna a hora
    return data.toLocaleTimeString('pt-BR', {
        //configurando exibição para a hora
        hour:'2-digit',minute:'2-digit',second:'2-digit'
    })
}

let data = new Date()

const hora = retornaHora(data)
console.log(hora)
