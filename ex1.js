/*1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.*/

let qtdCigarros = parseInt(prompt("Informe a quantidade de cigarro por dia: "))
let tempo = parseInt(prompt("Há quanto tempo você fuma? "))

dias = tempo/12/30
minutosPerdidos_dia = 10*qtdCigarros*dias

