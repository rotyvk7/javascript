function sistema(){
    var res = document.getElementById('res')

    let meses = new Array ('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')

    let now = new Date()
    let dia = now.getDate()

    let month = now.getMonth()
    let year = now.getUTCFullYear()
    let hora = now.getHours()
    let minutos = now.getMinutes()
    let segundos = now.getSeconds()
    var weekday = now.getDay();

    res.innerHTML = `<p>Dia: <mark> ${dia} </mark></p> <p>Mês: <mark>${meses[month]} </mark></p> <p> Ano: <mark>${year}</mark></p> <p> Dia da semana: <mark>${semana[weekday]}</mark> </p> <p> Hora: <mark> ${hora}</mark></p>
    <p>Minutos: <mark> ${minutos}</mark></p> <p>Segundos: <mark>${segundos}</mark></p>`
}