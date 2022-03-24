function calcular(){

    let res = document.getElementById('res')

    let num1 = Number(prompt('Digite o primeiro número'))
    let num2 = Number(prompt('Digite o segundo número'))

    let escolha = Number(prompt('O que devemos fazer?' +
    '\n [1]Somar' + '\n [2]Subtrair' + '\n [3]Multiplicar' + '\n [4]Dividir'))

    if (escolha == 1) {
        let resultado =  num1 + num2
        res.innerHTML = `A soma entre os dois valores é ${resultado}`
    } else if(escolha == 2) {
        let resultado = num1 - num2
        res.innerHTML = `A subtração entre os dois valores é ${resultado}`
    } else if (escolha == 3) {
        let resultado = num1 * num2
        res.innerHTML = `A multiplicação entre os dois valores é ${resultado}`
    } else if (escolha == 4) {
        let resultado = num1 / num2
        res.innerHTML = `A divisão entre os dois valores é ${resultado}`
    } else {
        res.innerHTML = `[ERRO] Valor inválido`
    }
        
}