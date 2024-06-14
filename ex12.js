/*12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.*/

function fibonacci() {
  
    let a = 1, b = 1
    console.log(a)
    console.log(b)
  
    for (let i = 3; i <= 10; i++) {
      const proximo = a + b
      console.log(proximo)
      a = b
      b = proximo
    }
  }
  
  fibonacci()