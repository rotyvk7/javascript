function save(){
    let num = document.getElementById('txtnum')
    let res = document.getElementById('lista')
    let lista = []

    if(num.value.length == 0){
        window.alert ('[ERRO] faltam dados!')
    } else if(num.value <= 0 || num.value > 100) {
        window.alert ('[ERRO] o número tem que ser entre 1 e 100')
    } else {
        let n = Number(num.value)
        lista.push(n)
        
        for (c = 1; c <= 1; c++ ){
            let item = document.createElement('option')
            item.text += `O valor adicionado foi ${n}`
            res.appendChild(item)
        }
                
    }
       
}