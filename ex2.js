/*2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.*/

const prompt = require('prompt-sync')()

function verificarVelocidade() {

    let distancia = parseFloat(prompt("Informe a velocidade em (km) do seu carro: "))

    const valor_multa = 5
    let velocidade_permitida = 80
    let multa

    if (distancia > 80) {
        multa = valor_multa * (distancia - velocidade_permitida)
        console.log(`Você foi multado em R$${multa.toFixed(2)} reais.`)
    } else {
        console.log("Você não foi multado.")
    }
}

verificarVelocidade()