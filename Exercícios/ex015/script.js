function gerador(){
    var res = document.getElementById('res')
    let random = Math.floor(Math.random() * + 100)
    res.innerHTML += `<p> Acabei de pensar no número <mark>${random} </mark>! </p>`
}

function limpar(){
    
    res.innerHTML = `<p></p>`
}


