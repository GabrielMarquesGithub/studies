//let possui escopo de bloco e não pode ser redeclarada apenas recriada em outro bloco, já var possui apenas escopo de função ex
let nome1 = 'Gabriel'
var nome2 = 'Pablo'

if(true){
    let nome1 = 'Nikolas'
    var nome2 = 'Marcelo'

    console.log(nome1, nome2)
}
//note que let manteve o valor do bloco global, e teve o valor alterado quando recriada em outro bloco, ja var sofreu a alteração em todos os escopos 
console.log(nome1, nome2)

//o escopo de funções é especial podendo receber variaveis de fora porém não podendo ser usadas variaveis declaradas dentro da função 

//com  var ocorre o hosting ou seja o JavaScript eleva a sua declaração para o topo e mesmo se ela for declarada após ser usada não retorna erra, isso é corrigido em let, tornando mais previsível o código e facilitando o entendimento 