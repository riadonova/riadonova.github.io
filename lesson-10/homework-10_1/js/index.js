var questions = [
    {q: 'Что придает красный оттенок поверхности Марса?', a: 'Оксид железа'},
    {q: 'Какой спутник Сатурна являеться самым большим?', a: 'Титан'},
    ];

var content = document.getElementById('content');

function createMenu() {
    var menuContainer = document.createElement('div'); // => <div></div>
    menuContainer.className = 'menu'; // => <div class="menu"></div>
    var startButton = document.createElement('button'); // <button></button>
    startButton.className = 'btn btn-start'; // <button class="btn btn-start"></button>
    startButton.textContent = 'START'; // <button class="btn btn-start">START</button>
    startButton.addEventListener('click', startGame, false);
    menuContainer.appendChild(startButton); // added to menuContainer => <div class="menu"><button class="btn btn-start">START</button></div>
    return menuContainer;
}

content.appendChild(createMenu());

function createQA() {
    var questionContainer = document.createElement('div');
    questionContainer.className = 'question';
    var timerHolder = document.createElement('div');
    timerHolder.className = 'timer';
    questionContainer.appendChild(timerHolder);
    var questionText = document.createElement('p');
    questionContainer.appendChild(questionText);
    var answerInput = document.createElement('input');
    answerInput.type = 'text';
    questionContainer.appendChild(answerInput);
    var questionController = {
        currentQuestionIndex: 0,
        currentQuestion: null,
        timerId: null,
        getHTML: function() {
            return questionContainer;
        },
        setQuestion: function(question) {
            this.question = question;
            questionText.textContent = question.q;
            timerHolder.textContent = '00:00';
            this.timerId = setInterval(function() {

            }, 1000);
        },
        nextQuestion: function() {
            this.currentQuestionIndex = this.currentQuestionIndex + 1;
            this.setQuestion(questions[this.currentQuestionIndex]);
        },
    };
    return questionController;
}

function startGame() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    var questionController = createQA();
    content.appendChild(questionController.getHTML());
    questionController.setQuestion(questions[0]);
}








