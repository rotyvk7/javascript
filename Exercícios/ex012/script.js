function calcular(){
    let valor = document.getElementById('res')

    var num1 = Number(prompt(`Digite um número`))
    var num2 = Number(prompt(`Digite outro número`))

    if(num1>num2){
        valor.innerHTML = (`<p>Analisando os valores ${num1} e ${num2} o maior valor é <strong>${num1}</strong></p>`)
    } else if(num1<num2) {
        valor.innerHTML = (`<p>Analisando os valores ${num1} e ${num2} o maior valor é <strong>${num2}</strong></p>`)
    } else {
        valor.innerHTML = (`<p>Analisando os valores ${num1} e ${num2} o maior valor é <strong>IGUAIS</strong></p>`)
    }
}