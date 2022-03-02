function tabuada() {
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')
    if (num.value.length == 0){
        alert('[ERRO] Não foi digitado numero, será considerado 1!')
    } else {
        let n1 = Number(num.value)
        res.innerHTML =''//renovar a tabela
    for(let n = 1; n <= 10; n++) {
        res.innerHTML += `<option>${n1} x ${n} = ${n1*n}</option>`
        //option obriga quebra de linha para opções
        }

    }
}