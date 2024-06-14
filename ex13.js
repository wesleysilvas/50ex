/*13. Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.*/

function vetorFibonacci() {

    const vetor = [1, 1]
    
    for (let i = 2; i < 15; i++) {
      vetor[i] = vetor[i - 1] + vetor[i - 2]
    }
  
    console.log('Os primeiros 15 elementos da sequência de Fibonacci são:')
    console.log(vetor)
  }
  
  vetorFibonacci()