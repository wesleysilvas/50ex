/*7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km
*/

const prompt = require('prompt-sync')()

let tipo = parseInt(prompt("Informe o número do carro que você alugou (1 - popular | 2 - luxo): "))

if (tipo !== 1 && tipo !== 2) {
    console.log("Tipo de carro inválido.")
    process.exit(0)
}

let dia = parseInt(prompt("Informe o número de dia(s) alugado(s): "))
let distancia = parseFloat(prompt("Informe quantos km foram percorridos: "))

function valorAluguel() {

    let valorDia, valorKm, total

    if (tipo === 1) {
        valorDia = 90
        if (distancia <= 100) {
            valorKm = 0.20
        } else {
            valorKm = 0.10
        }
    }
    if (tipo === 2) {
        valorDia = 150
        if (distancia <= 200) {
            valorKm = 0.30
        } else {
            valorKm = 0.25
        }
    }


    total = (valorKm * distancia) + (valorDia * dia)
    console.log(`Total a ser pago: R$${total.toFixed(2)}.`)
}

valorAluguel()