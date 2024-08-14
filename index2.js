/*function jogadorClassificado(vitorias) {
    function saldoDeVitorias (101)

    console.log("O Herói tem de saldo de " + saldoDeVitorias + "está no nivel " + nivel)
    jogadorClassificado("Itachi Uchiha")

    if (vitorias < 10) {
        nivel = "Ferro"
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze"

    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata"
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro"
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante"
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendario"
    } else {
        nivel = "Imortal"
    }
    
}
*/

function calcularRank(Vitorias, Derrotas) {
     

    let saldoFinal = Vitorias - Derrotas;

    let nivel;

    if (saldoFinal < 10) {
        nivel = "Ferro"
    } else if (saldoFinal >= 11 && saldoFinal <= 20) {
        nivel = "Bronze"
    } else if (saldoFinal >= 21 && saldoFinal <= 50) {
        nivel = "Prata"
    } else if (saldoFinal >= 51 && saldoFinal <= 80) {
        nivel = "Ouro"
    } else if (saldoFinal >= 81 && saldoFinal <= 90) {
        nivel = "Diamante"
    } else if (saldoFinal >= 91 && saldoFinal <= 100) {
        nivel = "Lendário"
    } else if (saldoFinal >= 101) {
        nivel = "Imortal"
    }


    console.log("O Herói tem um saldo de " + saldoFinal + " está no nivel de  " + nivel)
}

calcularRank(200, 99);





