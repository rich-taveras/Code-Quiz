// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left ";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
// }

// setTime();

const questions = [
  {
    question: "Question 1?",
    answers: [
      { text: "answer here", correct: false },
      { text: "answer here", correct: true },
      { text: "answer here", correct: false },
      { text: "answer here", correct: false },
    ],
  },
  {
    question: "Question 2",
    answers: [
      { text: "answer 1", correct: false },
      { text: "answer 2", correct: true },
      { text: "answer 3", correct: false },
      { text: "answer 4", correct: false },
    ],
  },
  {
    question: "Question 3",
    answers: [
      { text: "answer 1", correct: false },
      { text: "answer 2", correct: true },
      { text: "answer 3", correct: false },
      { text: "answer 4", correct: false },
    ],
  },
  {
    question: "Question 4",
    answers: [
      { text: "answer 1", correct: false },
      { text: "answer 2", correct: true },
      { text: "answer 3", correct: false },
      { text: "answer 4", correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstchild) {
    answerButton.removeChild(answerButton.firstchild);
  }
}

startQuiz();
