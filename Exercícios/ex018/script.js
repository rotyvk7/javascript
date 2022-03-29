let res = document.getElementById('res')
let num = 0
let computador = 0

function sortear(){
    let min = 1
    let max = 100
    let dif = max - min
    let random = Math.random()
    computador = min + Math.trunc(dif * random)
}

function saida(){
    num = Number(prompt(`Qual o seu palpite?`))
    if(num < computador){
        res.innerHTML += `<p>Você falou ${num}. Meu número é <strong>MAIOR!</strong></p>`
    } else if(num > computador) {
        res.innerHTML += `<p>Você falou ${num}. Meu número é <strong>MENOR!</strong></p>`
    } else if (num == computador) {
        res.innerHTML += `<p><strong>PARABÉNS</strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
    
   

   
}