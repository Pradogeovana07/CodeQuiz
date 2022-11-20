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
    optionC: "<h1>",
    optionD: "<h3>",
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

//all constants
const questCont = document.getElementById("question-container");
const startbutton = document.getElementById("start-button");
const timer = document.getElementById("timer");
const quesDisplay = document.getElementById("question-display");
const buttonA = document.getElementById("A");
const buttonB = document.getElementById("B");
const buttonC = document.getElementById("C");
const buttonD = document.getElementById("D");
const finalScore = document.getElementById("finalScore");
const rightOrWrong = document.getElementById("rightOrWrong");

//when a button is clicked it will evaluate whether answer is correct or incorrect
buttonA.addEventListener("click",evaluateAnswer);
buttonB.addEventListener("click",evaluateAnswer);
buttonC.addEventListener("click",evaluateAnswer);
buttonD.addEventListener("click",evaluateAnswer);

//quiz timer
var timerObj;
var timerCounter = questionsArray.length * 10;
var currentQuestion = 0;
var score = 0 ;

questCont.style.display ="none";
//when quiz ends the finalScore is displayed, time = 0, and questions are hidden
function displaySummary(){
  clearInterval(timerObj)
  questCont.style.display ="none";
  finalScore.textContent = `You got ${score} out of 5 correct.`;
}
startbutton.addEventListener("click",function(){
  questCont.style.display ="block";
  startbutton.style.display ="none"; 

  timerObj = setInterval(function(){
    timer.textContent = "Timer: "+timerCounter;
    if(timerCounter>1){
      timerCounter--
      timerObj = setTimeout ("timerCounter", 1000);

      //if user runs out of time the final score will be displayed but does not go below 0
  //   if(timerCounter === -1){
  //     displaySummary();
  //     questCont.style.display ="none";
  //   document.getElementById("finalScore").innerHTML = `<h2>You got ${score} out of 5 correct.</h2>`;

  //  }
    }else{
      displaySummary();
    };
  },1000);
  displayQuestion();
  clearInterval(timerCounter);
  
})

function displayQuestion(){
  quesDisplay.textContent = questionsArray[currentQuestion].question
  buttonA.textContent = questionsArray[currentQuestion].optionA
  buttonB.textContent = questionsArray[currentQuestion].optionB
  buttonC.textContent = questionsArray[currentQuestion].optionC
  buttonD.textContent = questionsArray[currentQuestion].optionD
}




function evaluateAnswer(){
  var userAnswer = this.getAttribute("id");
  console.log(userAnswer);
  if(userAnswer === questionsArray[currentQuestion].answer){
    score += 1;
    rightOrWrong.innerHTML = "Great job!";
  }else{
    rightOrWrong.innerHTML = "Sorry, that's the wrong answer.";
    timerCounter-=10;;
    
  }
  if(currentQuestion<questionsArray.length-1){
    currentQuestion++;
    displayQuestion();
    
  }else {
   displaySummary();
    questCont.style.display ="none";
    finalScore.textContent = `You got ${score} out of 5 correct.`;
  }

}

    
    

















