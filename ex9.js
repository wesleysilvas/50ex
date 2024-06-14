/*9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.*/

const prompt = require('prompt-sync')()

function calcularSalarios() {

    let salario, sexo, resposta
    let totalsalariosM = 0
    let totalsalariosF = 0

    do {
        salario = parseFloat(prompt("Informe o seu salário: "))
        sexo = (prompt("Informe o seu sexo [M/F]: ")).toUpperCase()

        if (sexo === "M") {
            totalsalariosM += salario
        } else if (sexo === "F") {
            totalsalariosF += salario
        } else {
            console.log("Sexo inválido")
            return
        }

        resposta = (prompt("Deseja continuar [S/N]? ")).toUpperCase()

    } while (resposta !== "N")

    console.log(`Total dos salários pagos aos homens: ${totalsalariosM}`)
    console.log(`Total dos salários pagos às mulheres: ${totalsalariosF}`)
}

calcularSalarios()