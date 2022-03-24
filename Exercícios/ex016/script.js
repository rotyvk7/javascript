function calcular(){

    let res = document.getElementById('res')
    let now = new Date()
    let idade = now.getFullYear()
    
    
    let datanasc = Number(prompt('Digite o ano do seu nascimento'))

    res.innerHTML = `<p>Quem nasceu em ${datanasc} vai completar <strong>${idade-datanasc}</strong> anos em 2022.</p>`


}