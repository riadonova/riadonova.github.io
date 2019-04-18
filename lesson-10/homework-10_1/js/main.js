var questions = [
    {q: 'Что придает красный оттенок поверхности Марса?', a: 'Оксид железа'},
    {q: 'Какой спутник Сатурна являеться самым большим?', a: 'Титан'},
];

var menu = document.querySelector('.menu');
var startButton = document.querySelector('.btn-start');
var questionArea = document.querySelector('.question');
var questionText = document.querySelector('.question-text');
var inputAnswer = document.querySelector('.answer');
startButton.addEventListener('click', startGame, false);

function startGame() {
    menu.style.display = 'none';
    questionArea.style.display = 'block';
    setQuestion(0  )
}

function setQuestion(questionNumber) {
    questionText.textContent = questions[questionNumber].q

}