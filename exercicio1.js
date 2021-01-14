// 1.	Crie uma função que recebe por parâmetro uma string e retorne um boolean (true|false) se esse valor for palíndromo Palíndromo: Um palíndromo é uma palavra, frase ou qualquer outra sequência de unidades que tenha a propriedade de poder ser lida tanto da direita para a esquerda como da esquerda para a direita
//Exemplos: arara, osso, radar
//function palindromo(palavra) {
  // escreva sua função aqui
//}
//palindromo('arara') //retorna true
//palindromo('aula') //retorna false

function palindromo(palavra){
    var palavraInvertida = palavra.split('').reverse().join('')
    if (palavra === palavraInvertida) {
        return true
    } else {
        return false
    }
}

console.log(palindromo('osso'))