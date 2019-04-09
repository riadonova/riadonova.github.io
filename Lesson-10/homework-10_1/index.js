function game () {
    var textfield = document.getElementById('textfield');
    var div = document.getElementById('text');

    console.log('textfield.value =', textfield.value);

    div.textContent = textfield.value;
}

setTimeout(test, 1000);

var lowStr = 'hello';
var upStr = 'HeLLo';
console.log('lowStr =', lowStr.toLocaleLowerCase() );
console.log('upStr =', upStr.toLocaleUpperCase());


var game = {
    ask: [{
        q: 'Кто 1-ый полетел в космос',
        a: 'ГАГАРИН'
    }]
};

console.log('game.ask[0].q', game.ask[0].q);
console.log('game.ask[0].q', game.ask[0].a);
