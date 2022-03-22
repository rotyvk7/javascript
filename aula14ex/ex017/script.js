function calcular(){

    let num = document.getElementById('txtnum')
    let res = document.getElementById('lista')

    if(num.value.length == 0) {
        window.alert ('[ERRO] faltam dados!')
    } else {
        let n = Number(num.value)

        for (c = 1; c <= 10; c++ ){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            res.appendChild(item)
        }
    }

}