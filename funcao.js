

/*torrar("pão integral" , "Lucian")

function torrar(pao, nome = "Cliente"){
    console.log("torrada feita com " + pao)
    console.log("ele é um pedido feito por " + nome)
}*/



/*let resultado = soma(5, 20)

console.log(`O resultado dessa função ${resultado}`)


function soma(numA, numB) {
    let somatorio = numA + numB
    return somatorio
}*/

let userName = getFirstName("Lucian Marques")
console.log("Seja bem vindo " + userName)
function getFirstName(name) {
    let getFirstName = name.split(" ")[0]
    return getFirstName
}