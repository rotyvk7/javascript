function verificar(){

    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        window.alert ('[ERRO] faltam dados!')
    } else {
        res.innerHTML = 'Contando:  '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (let c = i; c <= f; c += p)
        res.innerHTML += `${c} \u{1F449} `
    }
}