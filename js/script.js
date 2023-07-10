function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left ";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

setTime();



const questions = [
  {
    question: "Question 1",
    answers: [
      { text: "answer 1", correct: false },
      { text: "answer 2", correct: true },
      { text: "answer 3", correct: false },
      { text: "answer 4", correct: false },
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
  let currentQuestionIndex = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestionIndex.question;

  currentQuestionIndex.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstchild) {
    answerButton.removeChild(answerButton.firstchild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;

  const isCorrect = selectieBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;

  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disable = true;
  })
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Test Again";
  nextButton.style.display = "block";

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }

}

nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
})
startQuiz();
}



var timeEl = document.querySelector("#timer");

var secondsLeft = 60;

