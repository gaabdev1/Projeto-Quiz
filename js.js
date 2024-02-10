const perguntas = [
  {
    pergunta: "Qual é o nome completo do personagem principal da série Harry Potter?",
    respostas: [
      "Harry James Potter",
      "Harry John Potter",
      "Harry William Potter"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do melhor amigo de Harry Potter em Hogwarts?",
    respostas: [
      "Ron Weasley",
      "Neville Longbottom",
      "Draco Malfoy"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do animal de estimação de Harry Potter?",
    respostas: [
      "Coruja Edwiges",
      "Gato Crookshanks",
      "Sapo Trevor"
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o diretor da escola de magia Hogwarts durante a maior parte da série?",
    respostas: [
      "Alvo Dumbledore",
      "Severo Snape",
      "Minerva McGonagall"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do vilão principal da série Harry Potter?",
    respostas: [
      "Lord Voldemort",
      "Bellatrix Lestrange",
      "Lucius Malfoy"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome da escola frequentada por Harry Potter e seus amigos?",
    respostas: [
      "Hogwarts",
      "Beauxbatons",
      "Durmstrang"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a casa em Hogwarts que valoriza a coragem, a ousadia e a bravura?",
    respostas: [
      "Grifinória",
      "Sonserina",
      "Corvinal"
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o professor de poções em Hogwarts durante a maior parte da série?",
    respostas: [
      "Severo Snape",
      "Horácio Slughorn",
      "Gilderoy Lockhart"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o esporte favorito de Harry Potter no mundo mágico?",
    respostas: [
      "Quadribol",
      "Basquetebol",
      "Futebol"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do elfo doméstico que serve à família Malfoy?",
    respostas: [
      "Dobby",
      "Kreacher",
      "Winky"
    ],
    correta: 0
  }
];


const quiz = document.querySelector('#quiz') 
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


 for(const item of perguntas ) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
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