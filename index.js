const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "const myVar = 10;",
        "var myVar = 10;",
      ],
      correta: 1
    },
    {
      pergunta: "Como é possível comentar uma única linha de código em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "# Este é um comentário",
        "/* Este é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é utilizado para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "toFixed()",
        "parseFloat()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara valores e tipos de dados sem coerção",
        "Compara apenas os valores, ignorando os tipos de dados",
        "Compara valores e tipos de dados com coerção",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      respostas: [
        "Adiciona um novo elemento ao DOM",
        "Adiciona um ouvinte de eventos a um elemento",
        "Remove um ouvinte de eventos de um elemento",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
      respostas: [
        "10",
        "55",
        "Erro de tipo",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Uma técnica de otimização de código",
        "Um padrão de design de código",
        "O comportamento de mover declarações para o topo do escopo durante a fase de compilação",
      ],
      correta: 2
    },
    {
      pergunta: "Como você pode verificar o tipo de uma variável em JavaScript?",
      respostas: [
        "typeOf myVar;",
        "typeof(myVar);",
        "myVar.getType();",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'map' em arrays JavaScript?",
      respostas: [
        "Aplica uma função a cada elemento e retorna um novo array",
        "Filtra os elementos do array com base em uma condição",
        "Remove o último elemento do array",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador ternário faz em JavaScript?",
      respostas: [
        "Atribui um valor a uma variável",
        "Executa uma instrução condicional de forma abreviada",
        "Concatena duas strings",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  // dl Pai e dt Filho 
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input'). value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => { 
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
  
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    
    
    quizItem.querySelector('dl').appendChild(dt)
  
    
  }
  
  quizItem.querySelector('dl dt'). remove()
  
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }