var userName = 'Vika';

if ('Vika' === userName) {
    console.log('Hello, Vika');
} else if ('Sasha' === userName) {
    console.log('Hello, Sasha');
} else {
    console.log('Who are you?');
}

switch (userName) {
    default:
        console.log('switch: Who are you?');
        break;

    case 'Vika':
        console.log('switch: Hello, Vika');
        break;

    case 'Sasha':
        console.log('switch: Hello, Sasha');
        break;

}

function checkBrowser(browser) {
    if (browser === 'IE') {
        alert('Давай досвиданья!');
    } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
        alert('Нормальные браузеры!');
    } else {
        alert('Браузер не определен!');
    }
}

checkBrowser('Chrome');




function helloWorld(userName) {
    console.log('Hello, World ' + userName);
}

setTimeout( helloWorld,2000, 'Vika'); // и делали функцию обертку



function timer (name, delay) {
    setTimeout(function(userName) {
        console.log('Hello, World ' + userName);
        timer(name, delay+1);
    }, delay, name);
}



function timer (num) {
    if (num > 10) {
        return;
    }
    console.log(num); //0
    ++num; //1
    setTimeout(timer, 1000, num);
}

timer(0);



function bomb() {
    console.log('ВЗРЫВ !!!')
}

var bombTimer = setTimeout(bomb,3000);
clearTimeout(bombTimer);

