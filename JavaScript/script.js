// document.querySelector("section").innerHTML = "What is you favorite color?";
// document.getElementsByClassName(btn).innerHTML=

// const quizContainerElement = document.getElementById("quizContainer")

// function codeQuiz() {
//     quizContainerElement.classList.remove("hide")
//     setNextQustion()
// }
// function displayQuestions(questions){ 
//     quizQuestionsElement.innerText = question.question
// }

// const questions = [
//     {
//         question: "what does JS stand for?",
//         answers: [
//             {text: "JavaScript", correct: true},
//             {text: "Just Saying", correct: false},
//             {text: "Job Services", correct: false},
//             {text: "J Son", correct: false}
//         ]
//     }
// ]

// console.log(questions);












/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correctAnswer = 0;

// 2. Store the rank of a player
let score = ''; 

// 3. Select the <main> HTML element
const main = document.querySelector('main')

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

// let btn = "A";
// document.getElementsByClassName(btn).innerHTML= ("how are you?");

// if(question1 === answer) {
//     score = 1;
// }else {
//     score = 0;
// }

// const question2 = prompt("how's the weather?");
// var answer2 = "sunny";
// if (question2 === answer2) {
//     score += 1;
// }

// const question3 = prompt("what's you name?");
// var answer3 = "Geovana";
// if(question3 === answer3){
//     score += 1;
// }

// const question4 = prompt("type 123");
// var answer4 = "123";
// if(question4 === answer4){
//     score += 1;
// }

// const question5 = prompt("type abc");
// var answer5 = "abc";
// if(question5 === answer5){
//     score += 1;
// }


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
//  if (score === 5) {
//      main.innerHTML = "100%";
//  }

// 6. Output results to the <main> element
// main.innerHTML = `
//     <h2> You got ${score} out of 5 correct. </h2>`;


function quizQuestions () {
    main.innerHTML = random.question;
}
    
//         question: "what is your name?",
//         answer:[
//             {text: "JavaScript", correct: true},
//             {text: "Just Saying", correct: false},
//             {text: "Job Services", correct: false},
//             {text: "J Son", correct: false}
//         ]
//     }
//     {
//         question: "what is your birth date?",
//         answer:[
//             {text: "1", correct: true},
//             {text: "2", correct: false},
//             {text: "3", correct: false},
//             {text: "J Son", correct: false}
//         ]
//     }
// ]



























