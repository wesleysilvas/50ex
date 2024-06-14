/*15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.*/

const prompt = require('prompt-sync')()

function numerosPares() {
  const numeros = []
  const pares = []

  for (let i = 0; i < 10; i++) {
    const numero = parseInt(prompt(`Informe o número ${i + 1}: `), 10)
    numeros.push(numero)
    if (numero % 2 === 0) {
      pares.push({ valor: numero, posicao: i })
    }
  }

  console.log('Números pares e suas posições:')
  pares.forEach(par => {
    console.log(`Valor: ${par.valor}, Posição: ${par.posicao}`)
  })
}

numerosPares()