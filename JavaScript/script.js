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
    question: "what does JS stand for?",
    optionA: "JavaScript",
    optionB: "Just Saying",
    optionC: "Job Services",
    optionD: "J Son",
    answer: "A"
  },
  {
    question: "what does JS stand for?",
    optionA: "JavaScript",
    optionB: "Just Saying",
    optionC: "Job Services",
    optionD: "J Son",
    answer: "A"
  },
  {
    question: "what does JS stand for?",
    optionA: "JavaScript",
    optionB: "Just Saying",
    optionC: "Job Services",
    optionD: "J Son",
    answer: "A"
  },
  {
    question: "what does JS stand for? - LAST",
    optionA: "JavaScript",
    optionB: "Just Saying",
    optionC: "Job Services",
    optionD: "J Son",
    answer: "A"
  },


]


const questCont = document.getElementById("question-container")
const startbutton = document.getElementById("start-button")
const timer = document.getElementById("timer")
const quesDisplay = document.getElementById("question-display")

var timerObj;
var timerCounter = questionsArray.length * 10

questCont.style.display ="none"


startbutton.addEventListener("click",function(){
  questCont.style.display ="block"
  startbutton.style.display ="none" 
  timerObj = setInterval(function(){
    timer.textContent = "Timer: "+timerCounter
    if(timerCounter>1){
      timerCounter--
    }else{
      displaySummary()
    }
  },1000)
  displayQuestion()
})

function displayQuestion(){

}

function displaySummary(){
  clearInterval(timerObj)
}
































