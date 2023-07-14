var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("start-btn");
var questionSection = document.getElementById("question-section");
var titleEl = document.getElementById("title");
var choicesEl = document.getElementsByClassName("choices");
var initialSection = document.getElementById("initial-section");
var scoreEl = document.getElementById("score");
var initialInput = document.getElementById("initial-input");
var saveBtn = document.getElementById("save-btn");
var highscoreSection = document.getElementById("highscore-section");
var goBackBtn = document.getElementById("go-back-btn");
var clearBtn = document.getElementById("clear-btn");
var viewHighscoresLink = document.getElementById("view-highscores-link");

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

var timeLeft = questions.length * 15; // Initialize timeLeft with question length * 15 seconds
var currentQuestionIndex = 0;
var score = 0;
var intervalId;

// Function to start the quiz
function startQuiz() {
  startTimer();
  showQuestion();
  questionSection.classList.remove("hide");
  document.getElementById("intro-section").classList.add("hide");
}

// Function to start the timer
function startTimer() {
  timerEl.textContent = timeLeft;

  intervalId = setInterval(function() {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

// Function to show a question
function showQuestion() {
  if (currentQuestionIndex >= questions.length) {
    endQuiz();
    return;
  }

  var question = questions[currentQuestionIndex];
  titleEl.textContent = question.question;

  for (var i = 0; i < choicesEl.length; i++) {
    choicesEl[i].textContent = question.choices[i];
  }
}

// Function to handle user answer
function handleAnswer(event) {
  var selectedChoiceIndex = Array.prototype.indexOf.call(choicesEl, event.target);
  var currentQuestion = questions[currentQuestionIndex];

  if (selectedChoiceIndex === currentQuestion.answer) {
    score += timeLeft; // Add remaining time to the score
    timeLeft += 10; // Add 10 seconds for correct answer
  } else {
    timeLeft -= 10; // Deduct 10 seconds for wrong answer
  }

  currentQuestionIndex++;
  showQuestion();
}

// Function to end the quiz
function endQuiz() {
  clearInterval(intervalId);
  questionSection.classList.add("hide");
  initialSection.classList.remove("hide");
  scoreEl.textContent = score;
}

// Function to save high score
function saveHighscore(event) {
  event.preventDefault();

  var initials = initialInput.value.trim();
  if (initials !== "") {
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    var newScore = { initials: initials, score: score };
    highscores.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(highscores));
    initialInput.value = "";
    showHighscores();
  }
}

// Function to show high scores
function showHighscores() {
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  var highscoreList = document.querySelector("#highscore-section ol");
  highscoreList.innerHTML = "";

  for (var i = 0; i < highscores.length; i++) {
    var li = document.createElement("li");
    li.textContent = highscores[i].initials + "-" + highscores[i].score;
    highscoreList.appendChild(li);
  }

  highscoreSection.classList.remove("hide");
  initialSection.classList.add("hide");
}

// Function to go back to the quiz
function goBack() {
  highscoreSection.classList.add("hide");
  document.getElementById("intro-section").classList.remove("hide");
  timeLeft = questions.length * 15; // Reset timer to question length * 15 seconds
  currentQuestionIndex = 0;
  score = 0;
}

// Function to clear high scores
function clearHighscores() {
  localStorage.removeItem("highscores");
  showHighscores();
}

// Event listeners
startBtn.addEventListener("click", startQuiz);
for (var i = 0; i < choicesEl.length; i++) {
  choicesEl[i].addEventListener("click", handleAnswer);
}
saveBtn.addEventListener("click", saveHighscore);
goBackBtn.addEventListener("click", goBack);
clearBtn.addEventListener("click", clearHighscores);

// Function to handle "View Highscores" link
function handleViewHighscores() {
  highscoreSection.classList.remove("hide");
  initialSection.classList.add("hide");
  document.getElementById("intro-section").classList.add("hide");
  document.getElementById("question-section").classList.add("hide");
}

// Function to handle "View Highscores" link
function handleViewHighscores(event) {
  event.preventDefault();
  highscoreSection.classList.remove("hide");
  initialSection.classList.add("hide");
  questionSection.classList.add("hide");
  document.getElementById("intro-section").classList.add("hide");
}

viewHighscoresLink.addEventListener("click", handleViewHighscores);