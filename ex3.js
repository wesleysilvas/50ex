/*3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.*/

const prompt = require('prompt-sync')()

function valorViagem() {

    let distancia = parseFloat(prompt("Informe a distância em (km) que você deseja percorrer: "))

    let valor_km, preco

    if (distancia < 0) {
        console.log("Digite uma distância maior que zero.")
        return
    }

    if (distancia <= 200) {
        valor_km = 0.5
    } else {
        valor_km = 0.45
    }
    preco = valor_km * distancia

    if (preco < 1) {
        console.log(`O preço da passagem para ${distancia}km é R$${preco} centavos.`)
    } else {
        console.log(`O preço da passagem para ${distancia}km é R$${preco.toFixed(2)} real(is).`)
    }
}

valorViagem()