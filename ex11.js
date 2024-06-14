/*11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência.*/

const prompt = require('prompt-sync')()

function progressaoAritmetica() {
  const a1 = parseFloat(prompt('Informe o primeiro termo da PA: '))
  const razao = parseFloat(prompt('Informe a razão da PA: '))

  let soma = 0
  console.log('Os 10 primeiros termos da PA são:')
  for (let i = 0; i < 10; i++) {
    let termo = a1 + (i * razao)
    console.log(`Termo ${i+1}: ${termo}`)
    soma += termo
  }
  console.log(`Soma dos termos: ${soma}`)
}

progressaoAritmetica()