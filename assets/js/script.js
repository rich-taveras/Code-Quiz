var startBtn = document.getElementById("start-btn");
var introSecEl = document.getElementById("intro-section");
var timerEl = document.getElementById("timer");
var questionSection = document.getElementById("question-section");
var titleEl = document.getElementById("title")

// Questions and answers data
var questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris"
  },
  {
    question: "What is the capital of Puerto Rico?",
    choices: ["Ponce", "Caguas", "San Juan", "Arecibo"],
    answer: "San Juan"
  },

  
  // Add more questions as needed
];

/*
1. hide intro section
2. start timer
3. show question
4.  data structure to store questions and choices*/

function startQuiz() {
  introSecEl.style.display = "none";
  questionSection.style.display = "block";
  startTimer();

  displayQuestion();
}



startBtn.addEventListener("click", startQuiz);







// (STARTER CODE)




var scoreEl = document.getElementById("score");
// var startBtn = document.getElementById("start-btn");

var questionElement = document.createElement("h2");
var answerElement = document.createElement("ul");

var currentQuestionIndex = 0;
var score = 0;
var timeLeft = 75;
var timerInterval;



function displayQuestion() {
  if (currentQuestionIndex >= questions.length) {
    endQuiz();
    return;
  }

  var currentQuestion = questions[currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;
  answerElement.innerHTML = "";

  for (var i = 0; i < currentQuestion.answers.length; i++) {
    var answerItem = document.createElement("li");
    answerItem.textContent = currentQuestion.answers[i];
    answerItem.addEventListener("click", checkAnswer);
    answerElement.appendChild(answerItem);
  }

  questionSection.appendChild(questionElement);
  questionSection.appendChild(answerElement);
}

function checkAnswer(event) {
  var selectedAnswer = event.target.textContent;
  var currentQuestion = questions[currentQuestionIndex];

  if (selectedAnswer === currentQuestion.correctAnswer) {
    score += 10;
  } else {
    timeLeft -= 10;
  }

  currentQuestionIndex++;
  displayQuestion();
}

function startTimer() {
  timerInterval = setInterval(function() {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timerInterval);

  questionSection.style.display = "none";
  scoreEl.textContent = "Final Score: " + score;
  document.getElementById("initial-section").style.display = "block";
  // Add code to handle high scores and further actions
}


