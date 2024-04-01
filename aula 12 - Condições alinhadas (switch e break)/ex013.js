var agora = new Date()
var diaSem = agora.getDay()
//var diaSem = 6

/* nosso calendário BR:
    0 = domingo, 
    1 = segunda-feira, 
    2 = terça-feira, 
    3 = quarta-feira, 
    4 = quinta-feira, 
    5 = sexta-feira 
    6 = sábado
*/
console.log(diaSem)

switch(diaSem){
    case 0: 
        console.log(`domingo`)
        break
    case 1: 
        console.log(`segunda`)
        break
    case 2:
        console.log(`terça`)
        break
    case 3:
        console.log(`quarta`)
        break
    case 4:
        console.log(`quinta`)
        break
    case 5:
        console.log(`sexta`)
        break
    case 6:
        console.log(`sábado`) 
        break   
    default:
        console.log(`ERRO!`)
        break
}
