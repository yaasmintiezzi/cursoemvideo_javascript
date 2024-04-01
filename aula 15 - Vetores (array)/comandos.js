let num = [5, 8, 1, 9, 3]
num.push(0) // cria +1 elemento no final com valor informado
num.sort() // ordenar para crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`) // comprimento n° de posições
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O segundo valor do vetor é ${num[1]}`)
//localiza valor no vetor:
let pos = num.indexOf(7)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
// quando ele não localiza o valor, ele iguala o valor não encontrado há -1