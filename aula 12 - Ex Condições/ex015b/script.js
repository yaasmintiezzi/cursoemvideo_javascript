function verificar() {
    var cxtxt1 = document.getElementById('txt1')
    var res = document.getElementById('res')
    var data = new Date()
    var ano = data.getFullYear()
    if (cxtxt1.value.lenght == 0 || cxtxt1.value > ano){
        window.alert("[ERRO] Verifique os campos digitados e tente novamente.")
    } else {
    var sexo = document.getElementsByName('sexo')
    var idade = cxtxt1.value - ano
    var gênero = ''
        if(sexo[0].checked){
            gênero = "Masculino"
        } else if (sexo[1].checked){
            gênero = "Feminino"
        }
    }
    res.innerHTML(`A sua idade é ${idade} e o seu gênero é ${gênero}`)
}