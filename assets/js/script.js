var startBtn = document.getElementById("start-btn");
var introSecEl = document.getElementById("intro-section");

var questionSectionEl = document.getElementById("question-section");
var titleEl = document.getElementById("title");
var timerEl = document.getElementById("timer");
var choicesEl = document.querySelectorAll(".choices");

// Questions and answers data
var questionIndex = 0;
var questions = [
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text and Multimedia Language"
    ],
    answer: 0
  },
  {
    question: "Which CSS property is used to change the font size?",
    choices: ["font-size", "text-size", "font-style", "text-style"],
    answer: 0
  },
  {
    question: "What is the correct JavaScript syntax to output 'Hello, World!' in the console?",
    choices: [
      "console.out('Hello, World!');",
      "console.log('Hello, World!');",
      "print('Hello, World!');",
      "log('Hello, World!');"
    ],
    answer: 1
  },
  {
    question: "Which HTML tag is used to link an external JavaScript file?",
    choices: ["<js>", "<script>", "<javascript>", "<link>"],
    answer: 1
  },
  {
    question: "What is the purpose of CSS media queries?",
    choices: [
      "To create responsive web designs",
      "To validate HTML syntax",
      "To execute JavaScript code",
      "To style HTML elements"
    ],
    answer: 0
  }
];

  // Add more questions as needed
var timeLeft = questions.length * 15;

/*
1. hide intro section
2. start timer
3. show question
4.  data structure to store questions and choices*/

var setIntervalId = 0;

function startQuiz() {
  introSecEl.style.display = "none";
  //  introSecEl.classList.add("hide")
  questionSectionEl.style.display = "block";
  setIntervalId = setInterval(countDown, 1000);
  showQuestions()
  // startTimer();

  // displayQuestion();
}

function countDown() {
  timerEl.textContent = timeLeft--;
  if (timeLeft === 0) {
    clearInterval(setIntervalId);
  }
}

function showQuestions() {
  titleEl.textContent = questions[questionIndex].question
  choicesEl[0].textContent=questions[questionIndex].choices[0]
  choicesEl[1].textContent=questions[questionIndex].choices[1]
  choicesEl[2].textContent=questions[questionIndex].choices[2]
  choicesEl[3].textContent=questions[questionIndex].choices[3]


}

function nextQuestion(event){
  var currentElement= event.target
  if(currentElement.matches("button")){
    questionIndex++
    showQuestions()
  }
}
startBtn.addEventListener("click", startQuiz);

questionSectionEl.addEventListener("click", nextQuestion);

// // (STARTER CODE)

// var scoreEl = document.getElementById("score");
// // var startBtn = document.getElementById("start-btn");

// var questionElement = document.createElement("h2");
// var answerElement = document.createElement("ul");

// var currentQuestionIndex = 0;
// var score = 0;

// function displayQuestion() {
//   if (currentQuestionIndex >= questions.length) {
//     endQuiz();
//     return;
//   }

//   var currentQuestion = questions[currentQuestionIndex];

//   questionElement.textContent = currentQuestion.question;
//   answerElement.innerHTML = "";

//   for (var i = 0; i < currentQuestion.answers.length; i++) {
//     var answerItem = document.createElement("li");
//     answerItem.textContent = currentQuestion.answers[i];
//     answerItem.addEventListener("click", checkAnswer);
//     answerElement.appendChild(answerItem);
//   }

//   questionSection.appendChild(questionElement);
//   questionSection.appendChild(answerElement);
// }

// function checkAnswer(event) {
//   var selectedAnswer = event.target.textContent;
//   var currentQuestion = questions[currentQuestionIndex];

//   if (selectedAnswer === currentQuestion.correctAnswer) {
//     score += 10;
//   } else {
//     timeLeft -= 10;
//   }

//   currentQuestionIndex++;
//   displayQuestion();
// }

// function startTimer() {
//   timerInterval = setInterval(function() {
//     timeLeft--;
//     timerEl.textContent = timeLeft;

//     if (timeLeft <= 0) {
//       endQuiz();
//     }
//   }, 1000);
// }

// function endQuiz() {
//   clearInterval(timerInterval);

//   questionSection.style.display = "none";
//   scoreEl.textContent = "Final Score: " + score;
//   document.getElementById("initial-section").style.display = "block";
//   // Add code to handle high scores and further actions
// }
