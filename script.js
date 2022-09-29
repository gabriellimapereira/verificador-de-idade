function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`Tu viajou no tempo foi? Como que tu nasceu nesse ano?`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'homem'
            //Homem
            if (idade >= 0 && idade < 1) {
                //Recém nascido
                res.innerHTML = `Detectamos um  garoto recém nascido com ano algum.`
                img.setAttribute('src', './imagens/foto-recem-nascido.png')
            } else if (idade >= 1 && idade <= 2) {
                //Neném menino
                res.innerHTML = `Detectamos um bebê com ${idade} anos.`
                img.setAttribute('src', './imagens/foto-nenem-menino.png')
            } else if (idade >= 3 && idade <= 5) {
                //Bebê menino
                res.innerHTML = `Detectamos um bebê com ${idade} anos.`
                img.setAttribute('src', './imagens/foto-bebe-menino.png')
            } else if (idade >= 6 && idade <= 10) {
                //Criança
                res.innerHTML = `Detectamos um menino com ${idade} anos.`
                img.setAttribute('src', './imagens/foto-meninin.png')
            } else if (idade >= 11 && idade <= 21) {
                //Jovem
                res.innerHTML = `Detectamos um jovem com ${idade} anos.`
                img.setAttribute('src', './imagens/foto-rapaz.png')
            } else if (idade >= 22 && idade <= 50) {
                //Adulto
                res.innerHTML = `Detectamos um ${gênero} com ${idade} anos.`
                img.setAttribute('src', './imagens/foto-homem.png')
            } else if (idade >= 51 && idade <= 122) {
                //Idoso
                res.innerHTML = `Detectamos um ${gênero} idoso com ${idade} anos.`
                img.setAttribute('src', './imagens/foto-idoso.png')
            } else if (idade >= 123 && idade <= 499) {
                //Caixão
                res.innerHTML = `Detectamos um defunto de ${idade} anos.`
                img.setAttribute('src', './imagens/foto-caixao.png')
            } else {
                //Múmia
                res.innerHTML = `Detectamos uma múmia de ${idade} anos.`
                img.setAttribute('src', './imagens/foto-mumia.png')
            }
            res.appendChild(img)
            res.appendChild(img).style.marginTop = '25px'

        } else if (fsex[1].checked) {
            gênero = 'mulher'
            //Mulher
            if (idade >= 0 && idade < 1) {
                //Recém nascido
                res.innerHTML = `Detectamos uma garota recém nascida com ano algum.`
                img.setAttribute('src', './imagens/foto-recem-nascido.png')
            } else if (idade >= 1 && idade <= 2) {
                //Neném menina
                res.innerHTML = `Detectamos uma bebê com ${idade} anos.`
                img.setAttribute('src', './imagens/foto-nenem-menina.png')
            } else if (idade >= 3 && idade <= 5) {
                //Bebê menina
                res.innerHTML = `Detectamos uma bebê com ${idade} anos.`
                img.setAttribute('src', './imagens/foto-bebe-menina.png')
            } else if (idade >= 6 && idade <= 10) {
                //Criança
                res.innerHTML = `Detectamos uma menina com ${idade} anos.`
                img.setAttribute('src', './imagens/foto-menina.png')
            } else if (idade >= 11 && idade <= 21) {
                //Jovem
                res.innerHTML = `Detectamos uma jovem moça com ${idade} anos.`
                img.setAttribute('src', './imagens/foto-moça.png')
            } else if (idade >= 22 && idade <= 50) {
                //Adulta
                res.innerHTML = `Detectamos uma ${gênero} adulta com ${idade} anos.`
                img.setAttribute('src', './imagens/foto-mulher.png')
            } else if (idade >= 51 && idade <= 122) {
                //Idosa
                res.innerHTML = `Detectamos uma ${gênero} idosa com ${idade} anos.`
                img.setAttribute('src', './imagens/foto-idosa.png')
            } else if (idade >= 123 && idade <= 499) {
                //Caixão
                res.innerHTML = `Detectamos um defunto de ${idade} anos.`
                img.setAttribute('src', './imagens/foto-caixao.png')
            } else {
                //Múmia
                res.innerHTML = `Detectamos uma múmia de ${idade} anos.`
                img.setAttribute('src', './imagens/foto-mumia.png')
            }
            res.appendChild(img)
            res.appendChild(img).style.marginTop = '25px'
        }

    }
}