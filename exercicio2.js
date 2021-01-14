//2.	Crie uma função que recebe por parâmetro um array de números, e encontre o número que não faz parte daquela sequência.
//Exemplo: [1, 2, 3, 4, 5, 6, 20, 7, 8, 9] - O número 20 não está na sequência
//function foraDaSequencia(arrayDeNumeros) {
  // escreva sua função aqui
//}
//foraDaSequencia([1, 2, 3, 4, 5, 6, 20, 7, 8, 9]) //retorna 20

function foraDaSequencia (array){
  var resposta = undefined
  var sortedArray = array.sort((a, b) => a - b)
  for (let i = 0; i < sortedArray.length; i++){
    if(sortedArray[i] + 1 === sortedArray[i+1]) {
      continue
    } else { 
      resposta = sortedArray[i]
    }
  }
  return resposta
} 

console.log(foraDaSequencia([1, 2, 3, 4, 5, 6, 20, 7, 8, 9]))