var startButton = document.getElementById('start-btn');
var quiz = document.getElementById('quiz');
var rules = document.getElementById('rules');
var question = document.getElementById('question');
var answers = document.getElementById('answer-buttons');
var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var answer4 = document.getElementById('answer4');
var result = document.getElementById('result');

startButton.addEventListener('click', startGame);
answer1.addEventListener('click', selectAnswer1);
answer2.addEventListener('click', selectAnswer2);
answer3.addEventListener('click', selectAnswer3);
answer4.addEventListener('click', selectAnswer4);

var questions = [
    {
        question: {
            text: 'Which of the following types of variables can be stored in an array?',
            answered: false
        },
        answer: [ 
            { text: 'String', correct: false },
            { text: 'Number', correct: false },
            { text: 'Object', correct: false },
            { text: 'All of the above', correct: true }
        ]
    },
    {
        question: {
            text: 'Which of the following is not an HTML tag?',
            answered: false
        },
        answer: [
            { text: '<button>', correct: false },
            { text: '<link>', correct: false },
            { text: '<import>', correct: true },
            { text: '<script>', correct: false }
        ]
    },
    {
        question: {
            text: 'What type of CSS selector is the * selector?',
            answered: false
        },
        answer: [
            { text: 'Universal', correct: true },
            { text: 'Class', correct: false },
            { text: 'ID', correct: false },
            { text: 'Element', correct: false }
        ]
    },
    {
        question: {
            text: 'Where does an array index start?',
            answered: false
        },
        answer: [
            { text: '1', correct: false },
            { text: '0', correct: true },
            { text: '-1', correct: false },
            { text: 'Undefined', correct: false }
        ]
    },
    {
        question: {
            text: 'Which website is commonly used for project version control?',
            answered: false
        },
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

    showQuestion();
}

function selectAnswer1() {
    
    if (questions[0].answer[0].correct) {
        result.classList.remove('hide');
        result.innerText = "Correct!";
        result.style.color = "green";

        nextQuestion();
    } else {
        result.classList.remove('hide');
        result.innerText = "Wrong!";
        result.style.color = "red";
        nextQuestion();
    }

}

function selectAnswer2() {
    
    if (questions[0].answer[1].correct) {
        result.classList.remove('hide');
        result.innerText = "Correct!";
        result.style.color = "green";
        nextQuestion();
    } else {
        result.classList.remove('hide');
        result.innerText = "Wrong!";
        result.style.color = "red";
        nextQuestion();
    }

}

function selectAnswer3() {
    
    if (questions[0].answer[2].correct) {
        result.classList.remove('hide');
        result.innerText = "Correct!";
        result.style.color = "green";
        nextQuestion();
    } else {
        result.classList.remove('hide');
        result.innerText = "Wrong!";
        result.style.color = "red";
        nextQuestion();
    }

}

function selectAnswer4() {
    
    if (questions[0].answer[3].correct) {
        result.classList.remove('hide');
        result.innerText = "Correct!";
        result.style.color = "green";
        nextQuestion();
    } else {
        result.classList.remove('hide');
        result.innerText = "Wrong!";
        result.style.color = "red";
        nextQuestion();
    }

}

function showQuestion () {

    question.innerText = questions[0].question.text;
    answer1.innerText = questions[0].answer[0].text;
    answer2.innerText = questions[0].answer[1].text;
    answer3.innerText = questions[0].answer[2].text;
    answer4.innerText = questions[0].answer[3].text;

    if (answer1.click == true) {
        selectAnswer1(); 
    }

    if (answer2.click == true) {
        selectAnswer1(); 
    }

    if (answer3.click == true) {
        selectAnswer1(); 
    }

    if (answer4.click == true) {
        selectAnswer1(); 
    }

}

function nextQuestion() {

    if (questions[0].question.answered == true) {
        question.innerText = questions[1].question.text;
        answer1.innerText = questions[1].answer[0].text;
        answer2.innerText = questions[1].answer[1].text;
        answer3.innerText = questions[1].answer[2].text;
        answer4.innerText = questions[1].answer[3].text;
    } else if (questions[1].question.answered == true) {
        question.innerText = questions[2].question.text;
        answer1.innerText = questions[2].answer[0].text;
        answer2.innerText = questions[2].answer[1].text;
        answer3.innerText = questions[2].answer[2].text;
        answer4.innerText = questions[2].answer[3].text;
    } else if (questions[2].question.answered == true) {
        question.innerText = questions[3].question.text;
        answer1.innerText = questions[3].answer[0].text;
        answer2.innerText = questions[3].answer[1].text;
        answer3.innerText = questions[3].answer[2].text;
        answer4.innerText = questions[3].answer[3].text;
    } else if (questions[3].question.answered == true) {
        question.innerText = questions[4].question.text;
        answer1.innerText = questions[4].answer[0].text;
        answer2.innerText = questions[4].answer[1].text;
        answer3.innerText = questions[4].answer[2].text;
        answer4.innerText = questions[4].answer[3].text;
    }


    if (answer1.click == true) {
        selectAnswer1(); 
    }

    if (answer2.click == true) {
        selectAnswer1(); 
    }

    if (answer3.click == true) {
        selectAnswer1(); 
    }

    if (answer4.click == true) {
        selectAnswer1(); 
    }

}