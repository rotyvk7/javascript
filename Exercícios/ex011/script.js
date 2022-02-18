function calcular(){

    let valor = document.getElementById('res')
    var num = Number(prompt(`Digite um número`))

    if(num%2 == 0){
        valor.innerHTML = (`<p>O número ${num} que foi digitado é <strong>PAR</strong></p>`)
    } else {
        valor.innerHTML =(`<p>O número ${num} que foi digitado é <strong>ÍMPAR</strong></p>`)
    }
    
}