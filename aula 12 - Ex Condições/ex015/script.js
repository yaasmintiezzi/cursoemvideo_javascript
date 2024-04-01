function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var cxtxtano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (cxtxtano.value.length == 0 || cxtxtano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - cxtxtano.value
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'homem-bb.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src','homem-jovem.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src','homem-adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'mulher-bb.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'mulher-jovem.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }


}