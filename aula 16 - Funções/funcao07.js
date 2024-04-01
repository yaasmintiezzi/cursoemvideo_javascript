//CLASSIFICAÇÃO POR IDADE

function classificar(idade) {
    if (idade < 25) {
        return 'Jovem!'
    } else if (idade <= 59){
            return 'Adulto'
        } else {
            return 'Idoso'
        }
    }

console.log(classificar(8))
    
