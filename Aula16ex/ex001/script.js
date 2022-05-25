var num = document.getElementById('txtnum')
var res = document.getElementById('lista')
var lista = []
var saida = document.getElementById('saida')


function save(){

    if(num.value.length == 0){
        window.alert ('[ERRO] faltam dados!')
    } else if(Number(num.value) <= 0 || Number(num.value) > 100) {
        window.alert ('[ERRO] o número tem que ser entre 1 e 100')
    } else {

        let n = Number(num.value)
        lista.push(parseInt(n))
        
        for (c = 1; c <= 1; c++ ){
            let item = document.createElement('option')
            item.text += `O valor adicionado foi ${n}`
            res.appendChild(item)
        }
               
    saida.innerHTML = ''

    }
       
}

function finalizar(){

    if(lista.length == 0) {
       window.alert ('[ERRO] Preencha algum número para começar!')     
    } else {

        saida.innerHTML = `<p>Ao todo temos ${lista.length} números</p>`
        saida.innerHTML += `<p>O maior valor é ${Math.max(...lista)}</p>`
        saida.innerHTML += `<p>O menor valor é ${Math.min(...lista)}</p>`
        
        let total = 0
        for (let i = 0; i < lista.length; i++) {
            total += lista[i]
            
        }
        saida.innerHTML += `<p>A soma dos valores é ${total}</p>`

        let media = total/lista.length
        saida.innerHTML += `<p>A média entre os valores informados é ${media} </p>`

        
    }
}