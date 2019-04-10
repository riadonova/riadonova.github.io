// var i = 0;
//
// function tick() {
//     console.log(i);
//     i++
// }
//
// var timerId = setInterval(tick, 1000);
//
// setTimeout(function () {
//         clearInterval(timerId);
//     }, 5000);
//
// var i2 = 0;
// function tick2 () {
//     console.log(i2);
//     ++i2;
//     setTimeout(tick2, 1000);
// }
// tick2();


var now = new Date();
console.log('Date.now =', Date.now());
console.log('now =', now);
console.log('now.getFullYear() =', now.getFullYear());
console.log('now.getMonth() =', now.getMonth());
console.log('now.getDate() =', now.getDate());
console.log('now.getDay() =', now.getDay());

var dayMS = 1000 * 60 * 60 * 24; // сутки

var now2 = new Date(dayMS);
console.log('now2 =', now2);

function getDateBefore(daysNum) {
    var dayMS = 1000 * 60 * 60 * 24; // 1 сутки
    var daysNumMs = daysNum * dayMS; // мс в 140 днях
    var dt = new Date(Date.now() - daysNum);
    console.log('dt =', dt);
    var months = [
        'january',
        'february',
        'math',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
    ];
    console.log('месяц =', months[dt.getMonth()]);
}

 getDateBefore(140);

moment.locale('ru');
console.log(moment().format('DD MMMM YYYY'));

console.log(moment().subtract(140, 'months').format('DD MMMM YYYY'));
console.log(moment().add(140, 'months').format('DD MMMM YYYY'));

console.log(moment().subtract(140, 'months'). add(15, 'months').format('DD MMMM YYYY'));





