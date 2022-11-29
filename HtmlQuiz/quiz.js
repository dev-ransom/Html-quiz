
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')


const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answersButtonElement = document.getElementById('answer-butttons')

let shuffledQuestion , currentQuestionIndex;
let QuizScore = 0;

function setStatusClass(element, correct){
clearStatusClass(element)
if(correct){
 element.classList.add("correct")
}else{
 element.classList.add('wrong')
}


}


function clearStatusClass(element){

element.classList.remove('correct')
element.classList.remove('wrong')

}
element.classList.remove('correct')
const question =[
 {
  question: 'which one of this is JavaScript framework?',
  answers :[
   {text : 'python', correct: false},
   {text : 'Django', correct: false},
   {text : 'Selenium', correct: true},
   {text : 'Cypress', correct: false}
  ],
 },

 {
  question: 'Who is the founder of ENI?',
  answers :[
   {text : 'Apostle Joshua Selman', correct: true},
   {text : 'Apostle Edu Udechukwu', correct: false},
  ],
 },

 {
  question: 'What is the largest tech company in the world?',
  answers :[
   {text : 'Amazon', correct: false},
   {text : 'Apple', correct: true},
  ],
 },


]




