var questions = [
    {
        question: "Question 1", 
        answers: [
            { text: "answer 1", correct: false},
            { text: "answer 1", correct: true},
            { text: "answer 1", correct: false},
            { text: "answer 1", correct: false},
        ]    },
        {
            question: "Question 2", 
            answers: [
                { text: "answer 2", correct: false},
                { text: "answer 2", correct: true},
                { text: "answer 2", correct: false},
                { text: "answer 2", correct: false},
            ]    },
];
var questionElement = document.getElementById("question");
var answerButton = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-btn");

var currentQuestionIndex = 0 ;
var score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}

function showQuestion(){
    var currentQuestionIndex = question[currentQuestionIndex];
    var questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}