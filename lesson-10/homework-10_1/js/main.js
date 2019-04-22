var questions = [
    {q: 'Как называется НАША галактика?', a: 'Млечный путь'},
    {q: 'Какой объект Солнечной системы в 2006 году лишился звания планеты?', a: 'Плутон'},
    {q: 'Самая крупная планета Солнечной системы?', a: 'Юпитер'},
    {q: 'Какая самая яркая звезда на ночном небе Земли?', a: 'Сириус'},
    {q: 'Какой спутник Сатурна является самым большим?', a: 'Титан'},
    {q: 'Что придает красный оттенок поверхности Марса?', a: 'Оксид железа'},
    {q: 'Самая маленькая планета Солнечной системы?', a: 'Меркурий'},
    {q: 'Какая планета стала первой, открытая путем математического расчета?', a: 'Нептун'},
    {q: 'Самое распространенное вещество во Вселенной?', a: 'Водород'},
    {q: 'Какая планета Солнечной системы, так же как Меркурий, не имеет естественных спутников?', a: 'Венера'},
];

var score = 0;
var timerID = null;
var currentQuestionId = 0;

var menu = document.querySelector('.menu');
var startButton = document.querySelector('.btn-start');
var questionArea = document.querySelector('.question');
var questionText = document.querySelector('.question-text');
var inputAnswer = document.querySelector('.answer');
var countdownBlock = document.querySelector('.timer');
var skipButton = document.querySelector('.btn-skip');
var totalBlock = document.querySelector('.total-block');
var totalText = document.querySelector('.total-text');
var replayButton = document.querySelector('.btn-re');
var buttonsQuestion = document.querySelector('.btn-question');
var correctAnswer = document.querySelector('.correct-answer');
var answerForm = document.getElementById('answer-form');

startButton.addEventListener('click', startGame, false);
skipButton.addEventListener('click', nextQuestion, false);
replayButton.addEventListener('click', startGame, false);
answerForm.addEventListener('submit', answer, false);

function startGame() {
    score = 0;
    currentQuestionId = 0;
    menu.style.display = 'none';
    totalBlock.style.display = 'none';
    questionArea.style.display = 'block';
    setQuestion(currentQuestionId);
}


function setQuestion(questionNumber) {
    clearInterval(timerID);
    var question = questions[questionNumber];
    inputAnswer.value = '';
    correctAnswer.style.display = 'none';
    buttonsQuestion.style.display = 'block';
    inputAnswer.focus();
    if(question !== undefined) {
        questionText.textContent = question.q;
        var countdown = 12;
        countdownBlock.textContent = countdown.toString();
        timerID = setInterval(function () {
            if (countdown <= 0) {
                nextQuestion();
            } else {
                countdown = countdown - 1;
                countdownBlock.textContent = countdown.toString();
            }
        }, 1000);
    } else {
        totalText.textContent = 'Вы набрали ' + score + ' очков' + ' из 10';
        questionArea.style.display = 'none';
        totalBlock.style.display = 'block'
    }
}


function nextQuestion(rightAnswer) {
    correctAnswer.style.display = 'block';
    buttonsQuestion.style.display = 'none';
    if (rightAnswer === true) {
        correctAnswer.textContent = 'Верно!'
    } else {
        correctAnswer.textContent = 'Правильный ответ: ' + questions[currentQuestionId].a;
    }
    clearInterval(timerID);
    setTimeout(function () {
        currentQuestionId = currentQuestionId + 1;
        setQuestion(currentQuestionId);
    }, 3000);
}


function answer(event) {
    event.preventDefault();
    var question = questions [currentQuestionId];
    var answerValue = inputAnswer.value.toLowerCase().trim();
    var rightAnswer = false;
    if (answerValue === question.a.toLowerCase()) {
        score = score + 1;
        rightAnswer = true;
        console.log(score, answerValue);
    }
    nextQuestion(rightAnswer);
}