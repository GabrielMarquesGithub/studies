let frutas = ['banana', 'maça', 'uva', 'pera', 'laranja']

//o for of lé diretamente o valor e não o índice isso permite uma exibição mais fácil com menos código, porém limita as possibilidades não fornecendo o valor do índice por exemplo 
for (const valor of frutas) {
    console.log(valor)
}