

    
function calcular(){
    var nome = window.prompt('Digite o seu nome')
    var nota1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`))
    var nota2 = Number(prompt(`Além de ${nota1} qual foi a outra nota de ${nome}?`))


    let acionar = document.getElementById('res')
    var resultado = nota1+nota2
    var media = resultado / 2

    acionar.innerHTML = `<p>Calculando a média final de <strong>${nome}</strong>`
    acionar.innerHTML += `<p>As notas obtidas foram ${nota1} e ${nota2}</p>`
    res.innerHTML += `<p>A média final será ${media}`

    if(media >= 6){
        acionar.innerHTML += `<p>A mensagem que temos é: <strong>Meus parabéns!</strong></p>`
    } else {
        acionar.innerHTML += `<p>A mensagem que temos é: <strong>Estude um pouco mais!</strong></p>`
    }
}