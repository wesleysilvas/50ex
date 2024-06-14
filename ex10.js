/*10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.*/

const prompt = require('prompt-sync')()

function analisarNumeros() {
    let menor, resposta
    let qtd_par = 0
    let somatorio = 0
    let i = 0

    do {
        let numero = parseFloat(prompt('Digite um número: '))
       
        somatorio += numero
        i++

        if (menor === undefined || numero < menor) {
            menor = numero;
        }

        if (numero % 2 === 0){
            qtd_par++
        }
        resposta = (prompt('Deseja continuar [S/N]? ')).toUpperCase()
    } while (resposta !== "N")
    let media = somatorio/i

    console.log(`Somatório entre todos os valores: ${somatorio}`)
    console.log(`Menor valor digitado: ${menor}`)
    console.log(`Média entre todos os valores: ${media}`)
    console.log(`Quantidade de valores pares: ${qtd_par}`)
}

analisarNumeros()