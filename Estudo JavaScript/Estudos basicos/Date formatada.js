function zeroEsquerda(num) {
    if (num < 10) {
        num = `0${num}`
        return num
    }
    return num
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate())
    const mes = zeroEsquerda(data.getMonth())
    const ano = zeroEsquerda(data.getFullYear())
    const hora = zeroEsquerda(data.getHours())
    const min = zeroEsquerda(data.getMinutes())
    const seg = zeroEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date()

dataFormatada = formataData(data)

console.log(dataFormatada)