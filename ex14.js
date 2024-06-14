/*14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.*/

const prompt = require('prompt-sync')()

function listaDeNomes() {
    
    let nomes = []

    for (let i = 1; i <= 7; i++) {
        let nome = prompt("Informe o seu nome: ")
        nomes.push(nome)
    }

    for (i = nomes.length - 1; i >= 0; i--) {
        console.log(nomes[i])
    }
}

listaDeNomes()