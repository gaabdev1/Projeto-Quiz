const perguntasJavaScript = [

    {
      pergunta: "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const"
      ],
      correta: 0
    },
    {
      pergunta: "Como você escreve um comentário de uma única linha em JavaScript?",
      respostas: [
        "//",
        "--",
        "/* */"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método `parseInt()` em JavaScript?",
      respostas: [
        "Converte uma string para um número inteiro",
        "Converte um número para uma string",
        "Retorna a parte decimal de um número"
      ],
      correta: 0
    },
    {
      pergunta: "Como você verifica se duas variáveis têm o mesmo valor e tipo em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador `%` em JavaScript?",
      respostas: [
        "Multiplicação",
        "Módulo (resto da divisão)",
        "Exponenciação"
      ],
      correta: 1
    },
    {
      pergunta: "Como você define uma função em JavaScript?",
      respostas: [
        "function myFunction()",
        "def function()",
        "func myFunction()"
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Documento Orientado a Modelos",
        "Declaração de Objetos Móveis",
        "Modelo de Objeto de Documento"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a finalidade do comando `console.log()`?",
      respostas: [
        "Imprimir dados no console",
        "Criar um novo objeto de console",
        "Iniciar uma sessão de log do usuário"
      ],
      correta: 0
    },
    {
      pergunta: "O que é hoisting em JavaScript?",
      respostas: [
        "Uma técnica de otimização de código",
        "O ato de elevar variáveis e funções durante a execução",
        "Um padrão de design para lidar com erros"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre `let` e `const` na declaração de variáveis?",
      respostas: [
        "Nenhuma diferença, são sinônimos",
        "`const` é usado para variáveis mutáveis, `let` para imutáveis",
        "`let` é usado para variáveis mutáveis, `const` para imutáveis"
      ],
      correta: 2
    }
  ];









const quiz = document.querySelector('#quiz') 
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntasJavaScript.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


 for(const item of perguntasJavaScript ) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntasJavaScript.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
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
    
    
    quizItem.querySelector('dl dt').remove()
    
    
    quiz.appendChild(quizItem)
 }