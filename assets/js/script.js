var startButton = document.getElementById('start-btn');
var quiz = document.getElementById('quiz');
var rules = document.getElementById('rules');
var question = document.getElementById('question');
var answers = document.getElementById('answer-buttons');
var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var answer4 = document.getElementById('answer4');

startButton.addEventListener('click', startGame);

var questions = [
    {
        question: 'Which of the following types of variables can be stored in an array?',
        answer: [ 
            { text: 'String', correct: false },
            { text: 'Number', correct: false },
            { text: 'Object', correct: false },
            { text: 'All of the above', correct: true }
        ]
    },
    {
        question: 'Which of the following is not an HTML tag?',
        answer: [
            { text: '<button>', correct: false },
            { text: '<link>', correct: false },
            { text: '<import>', correct: true },
            { text: '<script>', correct: false }
        ]
    },
    {
        question: 'What type of CSS selector is the * selector?',
        answer: [
            { text: 'Universal', correct: true },
            { text: 'Class', correct: false },
            { text: 'ID', correct: false },
            { text: 'Element', correct: false }
        ]
    },
    {
        question: 'Where does an array index start?',
        answer: [
            { text: '1', correct: false },
            { text: '0', correct: true },
            { text: '-1', correct: false },
            { text: 'Undefined', correct: false }
        ]
    },
    {
        question: 'Which website is commonly used for project version control?',
        answer: [
            { text: 'Facebook', correct: false },
            { text: 'Google', correct: false },
            { text: 'GitHub', correct: true },
            { text: 'YouTube', correct: false }
        ]
    }
];

var currentQuestion = questions[0];


function startGame() {
    startButton.classList.add('hide');
    quiz.classList.add('hide');
    rules.classList.add('hide');

    question.classList.remove('hide');
    answers.classList.remove('hide');

    nextQuestion();
}

function selectAnswer() {

}

function showQuestion () {
    question.innerText = questions[0].question;
    answer1.innerText = questions[0].answer[0].text;
    answer2.innerText = questions[0].answer[1].text;
    answer3.innerText = questions[0].answer[2].text;
    answer4.innerText = questions[0].answer[3].text;
}

function nextQuestion() {
    showQuestion();
}