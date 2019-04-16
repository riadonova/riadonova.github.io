function format (num) {
    if (num.length > 1) {
        return '00' + ':' + '00' + ':' + num;
    }
    else {
        return '00' + ':' + '00' + ':' + '0' + num;
    }
}

var countdown = 10;
var timer = document.getElementById('timer');
var timerID = setInterval(function () {
    if (countdown < 0) {
        timer.textContent = 'Bang';
        clearInterval(timerID)
    } else {
       timer.textContent = format(countdown.toString());
       countdown = countdown - 1;
    }
},1000);