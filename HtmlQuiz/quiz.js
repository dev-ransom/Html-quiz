
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')


const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answersButtonElement = document.getElementById('answer-butttons')

let shuffledQuestion , currentQuestionIndex;
let QuizScore = 0;



startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
 currentQuestionIndex++
 setnextQuestion();
})

function startGame(){
 startButton.classList.add('hide')
 shuffledQuestion=question.sort(() =>Math.random() -0.5)
 currentQuestionIndex=0;
 questionContainerElement.classList.remove('hide')
 setnextQuestion()
 QuizScore=0;
}

function setnextQuestion(){
 resetState();
 showQuestion(shuffledQuestion[currentQuestionIndex])
}

function showQuestion(question){
 questionElement.innerText= question.Question;
 question.answers.forEach((answers) =>{
  const button = document.createElement('button')
  button.innerText = answer.text;
  button.classList.add('btn')
  if(answer.correct){
   button.dataset.correct =answer.correct
  }
  button.addEventListener('click', selectAnswers)
  answersButtonElement.appendChild(button)
 })
}

function resetState(){
 clearStatusClass(document.body)
 nextButton.classList.add("hide")
 while(answersButtonElement.firstChild)
 answersButtonElement.removeChild(answersButtonElement.firstChild)
}

function selectAnswers(e){
 const selectedButton=e.target
 const correct =selectedButton.dataset.correct

 setStatusClass(document.body, correct)
 Array.from(answersButtonElement.children).forEach((button)=>{
  setStatusClass(button, button.dataset.correct)
 })
 if(shuffledQuestion.length > currentQuestionIndex +1){
  nextButton.classList.remove('hide')
 }else{
  startButton.innerText = "restart"
  startButton.remove("hide")
 }
 if(selectedButton.dataset =correct){
  QuizScore++
 }
 document.getElementById("right-answers").innerHTML=QuizScore
}

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




