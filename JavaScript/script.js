// quiz questions
const questionsArray = [
  {
    question: "what does JS stand for?",
    optionA: "JavaScript",
    optionB: "Just Saying",
    optionC: "Job Services",
    optionD: "J Son",
    answer: "A"
  },
  {
    question: "How do you add a comment in a JS file??",
    optionA: "*comment*",
    optionB: "{*comment*}",
    optionC: "/comment",
    optionD: "//comment",
    answer: "D"
  },
  {
    question: "Which HTML should be used for the largest heading?",
    optionA: "<h6>",
    optionB: "<4>",
    optionC: "<h1",
    optionD: "<h3",
    answer: "C"
  },
  {
    question: "What does CSS allow you to do?",
    optionA: "Structure a webpage",
    optionB: "Style a webpage",
    optionC: "Implement complex features to a webpage",
    optionD: "Create an interactive page",
    answer: "B"
  },
  {
    question: "Which of the following is not shown on a deployed website?",
    optionA: "Contents inside the <body> tag",
    optionB: "Contents inside the <heading> tag",
    optionC: "Contents inside the <p> tag",
    optionD: "Contents inside the <head> tag",
    answer: "D"
  },


]


const questCont = document.getElementById("question-container")
const startbutton = document.getElementById("start-button")
const timer = document.getElementById("timer")
const quesDisplay = document.getElementById("question-display")
const buttonA = document.getElementById("A")
const buttonB = document.getElementById("B")
const buttonC = document.getElementById("C")
const buttonD = document.getElementById("D")
const rightOrWrong = document.getElementById("rightOrWrong")
const finalScore = document.getElementById("finalScore")


buttonA.addEventListener("click",evaluateAnswer)
buttonB.addEventListener("click",evaluateAnswer)
buttonC.addEventListener("click",evaluateAnswer)
buttonD.addEventListener("click",evaluateAnswer)


var timerObj;
var timerCounter = questionsArray.length * 10
var currentQuestion = 0
var score = 0

//hide questions if quiz hasn't started
questCont.style.display ="none"


startbutton.addEventListener("click",function(){
  questCont.style.display ="block"
  startbutton.style.display ="none" 

  //timer countdown
  timerObj = setInterval(function(){
    timer.textContent = "Timer: "+timerCounter
    if(timerCounter>0){
      timerCounter--
    
    //if user finishes quiz; display summary
    if(currentQuestion === questionsArray.length-1){
      clearInterval(timerObj)
      timer.style.display = "none"
      displaySummary()
    }
    //if timer runs out; display summary
    if(timerObj == 0){
      displaySummary()
      clearInterval(timerObj)
      timer.style.display = "none"
    }
    }else{
      displaySummary()
      clearInterval(timerObj)
      timer.style.display = "none"
    }
  },1000)
  displayQuestion()
  
})


function displayQuestion(){
  quesDisplay.textContent = questionsArray[currentQuestion].question
  buttonA.textContent = questionsArray[currentQuestion].optionA
  buttonB.textContent = questionsArray[currentQuestion].optionB
  buttonC.textContent = questionsArray[currentQuestion].optionC
  buttonD.textContent = questionsArray[currentQuestion].optionD
}

function displaySummary(){
  questCont.style.display ="none"
  finalScore.textContent = (`You got ${score} out of 5 questions correct`)
}


function evaluateAnswer(){
  var userAnswer = this.getAttribute("id")
  console.log(userAnswer)
  if(userAnswer === questionsArray[currentQuestion].answer){
    score++
    rightOrWrong.textContent = "previous question : Correct"

  // if answer is wrong; deduct 5 sec from timer
  }else{
    rightOrWrong.textContent = "previous question: Incorrect"
    timerCounter-=5
  }

  //if it's not the last question, display next question
  if(currentQuestion<questionsArray.length-1){
    currentQuestion++;
    displayQuestion()
  }else{
    displaySummary()
  }
}

    
    
















