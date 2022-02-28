function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radisex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <= 3){
                //bebe
                img.setAttribute('src', 'bebemasc.jpg')
                document.body.style.background=`#FF665A`
            } else if (idade <= 13){
                //criança
                img.setAttribute('src', 'criançamasc.jpg')
                document.body.style.background=`#705E78`
            } else if(idade < 18) {
                //adolescente
                img.setAttribute('src', 'adolescentemasc.jpg')
                document.body.style.background=`#87a019`
            } else if(idade <= 30) {
                //adulto jovem
                img.setAttribute('src', 'adultomascjo.jpg')
            } else if(idade < 50) {
                //adulto maduro
                img.setAttribute('src', 'adultomascve.jpg')
                document.body.style.background=`#A3A1A8`
            } else if(idade < 70) {
                //idoso
                img.setAttribute('src', 'idosomasc.jpg')
                document.body.style.background ='#5f9ea0'
            } else {
                //ancião
                img.setAttribute('src', 'ancião.jpg')
                document.body.style.background='#000'
            }
                
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 3){
                //criança
                img.setAttribute('src', 'bebefeminino.jpg')
                document.body.style.background=`#FF8C64`
            } else if (idade <= 13){
                //criança
                img.setAttribute('src', 'criancafem.jpg')
                document.body.style.background=`#A5AAA3`
            } else if(idade < 18) {
                //Adolescente
                img.setAttribute('src', 'adolescentefem.jpg')
            } else if(idade <= 30) {
                //adulto jovem
                img.setAttribute('src', 'adultofemjo.jpg')
                document.body.style.background=`#812F33`
            } else if(idade < 50) {
                //adulto maduro
                img.setAttribute('src', 'adultofemve.jpg')
            } else if (idade < 70) {
                //idoso
                img.setAttribute('src', 'idosafem.jpg')
                document.body.style.background='#000'
            } else{
                //ancião
                img.setAttribute('src', 'anciã.jpg')
                document.body.style.background=`#FEA443`
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}
