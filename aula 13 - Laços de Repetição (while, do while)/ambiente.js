/* WHILE -> Estrutura de repetição com teste lógico no ínicio;
   DO WHILE -> Estrutura de repetição com teste lógico no final;
*/

/* WHILE

EX 1: EU TENHO UMA PIZZA DE 8 PEDAÇOS PARA COMER:

function comerPizza() {
    while(temFatia()){
        comerFatia()
    }
}

EX 2: PRECISO ESCREVER NA TELA "TUDO BEM" 8 VEZES: 

var escreve = 1
while (escreve <=8){
    console.log('Tudo bem?')
    escreve++ 
}

*/

/* DO WHILE

EX 1: PRECISO ESCREVER NA TELA "TUDO BEM" 8 VEZES: */

var escreve = 1
do {
    console.log('Tudo bem?')
    escreve++
} while (escreve <=8)

 
