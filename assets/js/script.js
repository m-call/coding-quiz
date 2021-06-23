// Grabbing HTML elements and assigning them to variables
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
var timer = document.getElementById('timer');
var gameOver = document.getElementById('game-over');
var initials = document.getElementById('initials');

// Setting global variables to be used in functions
var currentQuestion = 0;
var secondsLeft = 60;
var score = secondsLeft;

// Event listeners for when these buttons are clicked
startButton.addEventListener('click', startGame);
answer1.addEventListener('click', selectAnswer1);
answer2.addEventListener('click', selectAnswer2);
answer3.addEventListener('click', selectAnswer3);
answer4.addEventListener('click', selectAnswer4);

// Array containing objects that contain the question objects and the answers which are stored in an array with objects for each answers
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

// This is ran when the start button is pressed. Hides unnecessary UI elements and shows necessary UI elements for the game. Starts timer and shows first question.
function startGame() {
    startButton.classList.add('hide');
    quiz.classList.add('hide');
    rules.classList.add('hide');

    question.classList.remove('hide');
    answers.classList.remove('hide');

    startTimer();
    showQuestion();
}

// Sets the timer to 60 seconds and starts the countdown
function startTimer() {

    timer.textContent = "Time: " + secondsLeft;
      // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;

    timer.textContent = "Time: " + secondsLeft;

    if (currentQuestion == questions.length) {
        clearInterval(timerInterval);
    }

    if(secondsLeft === 0) {

        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Determines the game is over
        nextQuestion();
        
    }

  }, 1000);

}

//  Function that is called when the first answer button is clicked
function selectAnswer1() {
    
    if (questions[currentQuestion].answer[0].correct) {
        result.classList.remove('hide');
        result.innerText = "Correct!";
        result.style.color = "green";
        currentQuestion++;
        nextQuestion();
    } else {
        result.classList.remove('hide');
        result.innerText = "Wrong!";
        result.style.color = "red";
        currentQuestion++;
        secondsLeft -= 10;
        nextQuestion();
    }

}

//  Function that is called when the second answer button is clicked
function selectAnswer2() {
    
    if (questions[currentQuestion].answer[1].correct) {
        result.classList.remove('hide');
        result.innerText = "Correct!";
        result.style.color = "green";
        currentQuestion++;
        nextQuestion();
    } else {
        result.classList.remove('hide');
        result.innerText = "Wrong!";
        result.style.color = "red";
        currentQuestion++;
        secondsLeft -= 10;
        nextQuestion();
    }

}

//  Function that is called when the third answer button is clicked
function selectAnswer3() {
    
    if (questions[currentQuestion].answer[2].correct) {
        result.classList.remove('hide');
        result.innerText = "Correct!";
        result.style.color = "green";
        currentQuestion++;
        nextQuestion();
    } else {
        result.classList.remove('hide');
        result.innerText = "Wrong!";
        result.style.color = "red";
        currentQuestion++;
        secondsLeft -= 10;
        nextQuestion();
    }

}

//  Function that is called when the fourth answer button is clicked
function selectAnswer4() {
    
    if (questions[currentQuestion].answer[3].correct) {
        result.classList.remove('hide');
        result.innerText = "Correct!";
        result.style.color = "green";
        currentQuestion++;
        nextQuestion();
    } else {
        result.classList.remove('hide');
        result.innerText = "Wrong!";
        result.style.color = "red";
        currentQuestion++;
        secondsLeft -= 10;
        nextQuestion();
    }

}

// Shows the first question
function showQuestion () {

    question.innerText = questions[0].question.text;
    answer1.innerText = questions[0].answer[0].text;
    answer2.innerText = questions[0].answer[1].text;
    answer3.innerText = questions[0].answer[2].text;
    answer4.innerText = questions[0].answer[3].text;

    if (answer1.click == true) {
        console.log('test');
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

// Shows the next question and determines if the game is over if no questions remain
function nextQuestion() {

    if (currentQuestion == questions.length) {

        question.classList.add('hide');
        answers.classList.add('hide');
        gameOver.classList.remove('hide');
        initials.textContent = "Your final score is " + secondsLeft;

    } else {

        question.innerText = questions[currentQuestion].question.text;
        answer1.innerText = questions[currentQuestion].answer[0].text;
        answer2.innerText = questions[currentQuestion].answer[1].text;
        answer3.innerText = questions[currentQuestion].answer[2].text;
        answer4.innerText = questions[currentQuestion].answer[3].text;

    }

}