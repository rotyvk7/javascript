function gerar(){

    let res = document.getElementById('res')
    let valor = prompt('Digite o mês por extenso (ex: Setembro)')
    let estacao

    /*if (valor == 'Janeiro' || valor == 'janeiro' || valor == 'JANEIRO') {
        res.innerHTML = `<p>No mês de <mark>${valor}</mark> na estação de <mark><strong>INVERNO</strong></mark>`
    } else if (valor == 'Fevereiro' || valor == 'fevereiro' || valor == 'FEVEREIRO') {
        res.innerHTML = `<p>No mês de <mark>${valor}</mark> na estação de <mark><strong>INVERNO</strong></mark>`
    } else if (valor == 'Março' || valor == 'março' || valor == 'MARÇO') {
        res.innerHTML = `<p>No mês de <mark>${valor}</mark> na estação de <mark><strong>INVERNO</strong></mark>`
    } else if (valor == 'Abril' || valor == 'abril' || valor == 'ABRIL') {
        res.innerHTML = `<p>No mês de <mark>${valor}</mark> na estação de <mark><strong>PRIMAVERA</strong></mark>`
    } else if (valor == 'Maio' || valor == 'maio' || valor == 'MAIO'){
        res.innerHTML = `<p>No mês de <mark>${valor}</mark> na estação de <mark><strong>PRIMAVERA</strong></mark>`
    } else if (valor == 'Junho' || valor == 'junho' || valor == 'JUNHO') {
        res.innerHTML = `<p>No mês de <mark>${valor}</mark> na estação de <mark><strong>PRIMAVERA</strong></mark>`
    } else if (valor == 'Julho' || valor == 'julho' || valor == 'JULHO') {
        res.innerHTML = `<p>No mês de <mark>${valor}</mark> na estação de <mark><strong>VERÃO</strong></mark>`
    } else if (valor == 'Agosto' || valor == 'agosto' || valor == 'AGOSTO') {
        res.innerHTML = `<p>No mês de <mark>${valor}</mark> na estação de <mark><strong>VERÃO</strong></mark>`
    } else if (valor == 'Setembro' || valor == 'setembro' || valor == 'SETEMBRO') {
        res.innerHTML = `<p>No mês de <mark>${valor}</mark> na estação de <mark><strong>VERÃO</strong></mark>`
    } else if (valor == 'Outubro' || valor == 'outubro' || valor == 'OUTUBRO') {
        res.innerHTML = `<p>No mês de <mark>${valor}</mark> na estação de <mark><strong>OUTONO</strong></mark>`
    } else if (valor == 'Novembro' || valor == 'novembro' || valor == 'NOVEMBRO'){
        res.innerHTML = `<p>No mês de <mark>${valor}</mark> na estação de <mark><strong>OUTONO</strong></mark>`
    } else if (valor == 'Dezembro' || valor == 'dezembro' || valor == 'DEZEMBRO') {
        res.innerHTML = `<p>No mês de <mark>${valor}</mark> na estação de <mark><strong>OUTONO</strong></mark>`
    } else {
        res.innerHTML = '[ERRO] Valor inválido'
    }
    */

    switch (valor.toUpperCase()) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            estacao = 'INVERNO'
            break;

        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estacao = 'PRIMAVERA'
            break;
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estacao = 'VERÃO'
            break;
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estacao = 'OUTONO'
        default:
            estacao = '[ERRO] estação inválida'
            break;
    }
    res.innerHTML = `<p>No mês de <mark>${valor}</mark>, estamos na estação <mark><strong>${estacao}</strong></mark>.</p>`
}