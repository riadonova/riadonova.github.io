function format(num) {
    if (num.length > 1) {
        return '00' + ':' + '00' + ':' + num;
    } else {
        return '00' + ':' + '00' + ':' + '0' + num;
    }
}

var generatedPassword = null;
var timerID = null;
function onStart() {
    generatedPassword = generatePassword (8);
    var btnStart = document.getElementById('buttonStart');
    btnStart.disabled = true;
    var countdown = 10;
    var timer = document.getElementById('timer');
    timerID = setInterval(function () {
        if (countdown < 0) {
            timer.textContent = 'Bang ! ! !';
            clearInterval(timerID)
        } else {
            timer.textContent = format(countdown.toString());
            countdown = countdown - 1;
        }
    }, 1000);
    var generator = document.getElementById('generator');
    generator.textContent = generatedPassword
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function generatePassword(length) {
    var code ='';
    for (var i=0; i<length; i++) {
        code = code + getRandomInt (0,9).toString();
    }
    return code;
}

var enterCode = '';
function onKeyboard(key) {
    var tbxPassword = document.getElementById('password');
    if (key === 'C') {
        enterCode = enterCode.substr (0,enterCode.length - 1);
        tbxPassword.textContent = enterCode;
    } else if (key === 'OK'){
        if (generatedPassword === enterCode){
            clearInterval(timerID);
            tbxPassword.textContent = 'Deactivated';
        }
    } else if (enterCode.length < 8) {
        enterCode = enterCode + key;
        tbxPassword.textContent = enterCode;
    }
}




