//função fizz buzz com autenticação de valor
function teste(num) {
    if ((Number(num)) === NaN) return num
    if(num%3==0 && num%5==0) return 'FizzBuzz'
    if(num%3==0) return 'fizz'
    if(num%5==0) return 'buzz'
    return num
    
}

for (let i = 0; i < 100; i++) {
    console.log(i, teste(i))
}
