  # Exercícios
  
1) Crie uma função que recebe por parâmetro uma string e retorne um boolean (true|false) se esse valor for palíndromo
  Palíndromo: Um palíndromo é uma palavra, frase ou qualquer outra sequência de unidades que tenha a propriedade de poder ser lida tanto da direita para a esquerda como da esquerda para a direita
  
  Exemplos: arara, osso, radar

    function palindromo(palavra) {
      // escreva sua função aqui
    }
    palindromo('arara') //retorna true
    palindromo('aula') //retorna false
    
  2) Crie uma função que recebe por parâmetro um array de números, e encontre o número que não faz parte daquela sequência.
  
  Exemplo: [1, 2, 3, 4, 5, 6, 20, 7, 8, 9] - O número 20 não está na sequência 

    function foraDaSequencia(arrayDeNumeros) {
      // escreva sua função aqui
    }
    foraDaSequencia([1, 2, 3, 4, 5, 6, 20, 7, 8, 9]) //retorna 20

  3) Crie uma função que receba por parâmetro uma string e a retorne revertido
  
  Exemplo: roma - O valor a ser retornado deve ser: amor 

    function inverterPalavra(palavra) {
      // escreva sua função aqui
    }
    inverterPalavra('roma') //retorna amor 

  4) Crie uma função que receba por parâmetro um número e calcule o seu fatorial
  Fatorial: O fatorial de um número natural n, representado por n!, é a multiplicação de todos os inteiros positivos menores ou iguais a n
  
  Exemplo: n = 6 então para calcular o fatorial do número 6 é 6x5x4x3x2x1 = 720
  
  O valor a ser retornado é 720

    function calculaFatorial(numero) {
      // escreva sua função aqui
    }
    calculaFatorial(6) //retorna 720
   
   
  5) Com o array de objetos de cidades descrito abaixo, precisamos extrair alguns relatórios:
  
    const cidades = [{
    "nome": "Salvador",
    "estado": "BA",
    "populacao": 30000
    }, {
    "nome": "São Paulo",
    "estado": "SP",
    "populacao": 10000
    }, {
    "nome": "Rio de Janeiro",
    "estado": "RJ",
    "populacao": 20000
    }, {
    "nome": "Curitiba",
    "estado": "PR",
    "populacao": 15000
    }, {
    "nome": "Porto Alagre",
    "estado": "RS",
    "populacao": 25000
    }, {
    "nome": "Porto Seguro",
    "estado": "BA",
    "populacao": 5000
    },
    {
    "nome": "Santo André",
    "estado": "SP",
    "populacao": 8000
    }, {
    "nome": "Macaé",
    "estado": "RJ",
    "populacao": 3000
    }]
	
  a) Cria uma função que retorne apenas o(s) NOME(S) de todas as cidades, sendo filtradas por estado 
  
    function cidadesPorEstado(estado) {
      // escreva sua função aqui
    }
    cidadesPorEstado("SP") // retorna ["São Paulo", "Santo André"] 
  
  b) Crie uma função que receba por parâmetro dois números, sendo eles população mínima e máxima. Retornando apenas o(s) NOMES de todas as cidades que estejam entre esses números 	
    
    function cidadesPorIntervaloDePopulacao(populacao_minimo, populacao_maximo) {
      // escreva sua função aqui
    }
    cidadesPorIntervaloDePopulacao(1000, 9000) // retorna ["Macaé", "Santo André", "Porto Seguro"]  

  c) Crie uma função que recebe por parâmetro o nome de uma cidade, e retorne uma string: 'Informativo de Salvador: cidade que fica na Bahia e possui 30000 habitantes'	
  
    function informativoCidade(cidade) {
      // escreva sua função aqui
    }
    informativoCidade('Macaé') // retorna 'Informativo de Macaé: cidade que fica no Rio de Janeiro e possui 3000 habitantes'
