let amigo = {nome: 'José', 
sexo:'M', 
peso: 85.4, 
engordar(p=0){
    console.log('Engordou')
    this.peso += p
    }
}
//console.log(typeof amigo)
amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg.`)
//console.log(amigo.nome)