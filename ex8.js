/*8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.*/

const prompt = require('prompt-sync')()

let horas = parseInt(prompt("Quantas horas de atividade física você teve no mês? "))

function verificarAtividadesFisicas() {

    let pontos, total
    let valorPonto = 0.05

    if (horas < 10) {
        pontos = 2 * horas
    } else if (horas >= 10 && horas <= 20) {
        pontos = 5 * horas
    } else {
        pontos = 10 * horas
    }

    total = (pontos * valorPonto)
    console.log(`Você obteve ${horas} hora(s) de atividade, obtendo ${pontos} pontos no total. Seu valor da receber é de R$${total.toFixed(2)}`)
}

verificarAtividadesFisicas()