const questions = [
  {
    question: "Question 1 Finally?",
    answers: [
      { text: "answer here", correct: false },
      { text: "answer here", correct: true },
      { text: "answer here", correct: false },
      { text: "answer here", correct: false },
    ],
  },
  {
    question: "Question 2 Finally",
    answers: [
      { text: "answer 1", correct: false },
      { text: "answer 2", correct: true },
      { text: "answer 3", correct: false },
      { text: "answer 4", correct: false },
    ],
  },
  {
    question: "Question 3 Finally",
    answers: [
      { text: "answer 1", correct: false },
      { text: "answer 2", correct: true },
      { text: "answer 3", correct: false },
      { text: "answer 4", correct: false },
    ],
  },
  {
    question: "Question 4 Finally",
    answers: [
      { text: "answer 1", correct: false },
      { text: "answer 2", correct: true },
      { text: "answer 3", correct: false },
      { text: "answer 4", correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
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
answerButtons.appendChild(button);
   });
}

function resetState() {
nextButton.style.display = "none";
while (answerButtons.firstchild) {
answerButtons.removeChild(answerButtons.firstchild);
   }
 }

startQuiz();
