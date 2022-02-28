function carregar(){
    var msg = document.getElementById('msg')
    img = document.getElementById('img')
    let agora = new Date()
    let hora = agora.getHours()
    let hora2 = agora.getMinutes()
    let hora3 = agora.getSeconds()

    msg.innerHTML = `Agora são ${hora} horas e ${hora2} minutos e ${hora3} segundos`

    if(hora >= 5 && hora <= 12){
        //BOM DIA!
        img.src="manha.jpg"
        msg.innerHTML += '<p>Bom dia!</p>'
        document.body.style.background = '#1A8FE2'
    } else if(hora <= 18 && hora > 12) {
        //BOA TARDE!
        img.src="tarde.jpg"
        msg.innerHTML += '<p>Boa tarde!</p>'
        document.body.style.background = '#F99728'
    } else if(hora > 18 && hora <= 23){
        //BOA NOITE!
        img.src="noite.jpg"
        msg.innerHTML += '<p>Boa noite!</p>'
        document.body.style.background = '#9E79AE'
    } else {
        img.src="madrugada.jpg"
        msg.innerHTML += '<p>Boa madrugada!</p>'
        document.body.style.background = '#1A2C33'
        //BOA MADRUGADA!
    }
}