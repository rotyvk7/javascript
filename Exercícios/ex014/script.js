function sistema(){
    var res = document.getElementById('res')

    let today2 = new Date()
    let dia = today2.getDate()

    var Xmas95 = new Date()
    var month = Xmas95.getUTCMonth()

    let today = new Date()
    let year = today.getUTCFullYear()

    let today3 = new Date()
    let hora = today3.getHours()

    let today4 = new Date()
    let minutos = today4.getMinutes()
    
    let today5 = new Date()
    let segundos = today5.getSeconds()

    res.innerHTML = `<p>Dia: <mark> ${dia} </mark></p> <p>Mês: <mark>${month} </mark></p> <p> Ano: <mark>${year}</mark></p> <p> Hora: <mark> ${hora}</mark></p>
    <p>Minutos: <mark> ${minutos}</mark></p> <p>Segundos: <mark>${segundos}</mark></p>`
}