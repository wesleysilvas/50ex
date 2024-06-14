/*1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.*/

const prompt = require('prompt-sync')()

function calcularPerdaDeVida() {
  const cigarrosPorDia = parseInt(prompt('Quantos cigarros você fuma por dia? '))
  const anosFumando = parseInt(prompt('Há quantos anos você fuma? '))

  const minutosPerdidosPorDia = cigarrosPorDia * 10
  const diasFumando = anosFumando * 365
  const minutosPerdidosTotal = minutosPerdidosPorDia * diasFumando
  const diasPerdidos = minutosPerdidosTotal / 1440

  console.log(`Você perderá aproximadamente ${diasPerdidos.toFixed(2)} dias de vida.`)
}

calcularPerdaDeVida()