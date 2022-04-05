function contar(){
    let res = document.getElementById('res')
    let c = 0
    
    res.innerHTML += `<h2>Contando de 1 até 10</h2>`

    do {
        res.innerHTML += `<strong>${c} </strong>&#x1F449;`
        c++
    }
    while (c <= 10){
    
    }

    res.innerHTML += ` &#x1F3C1;`        
}