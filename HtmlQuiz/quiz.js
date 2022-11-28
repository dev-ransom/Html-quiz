
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')


const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answersButtonElement = document.getElementById('answer-butttons')

let shuffledQuestion , currentQuestionIndex;
let QuizScore = 0;



const question =[
 {
  question: 'which one of this is JavaScript framework?',
  answers :[
   {text : 'python', correct: false},
   {text : 'Django', correct: false},
   {text : 'Selenium', correct: false},
   {text : 'Cypress', correct: false}
  ]
 }
]




