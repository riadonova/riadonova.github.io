var CAR_NAME = 'Lamborghini';
var CAR_PRICE = 3000000;
var CARFRESH_PRICE = 2.99;
var CURRENCY = '$';

var fullPrice = 0;

var userName = prompt('Как Вас зовут?', 'Гость');

alert('Cейчас будет оформлен заказ на ' + CAR_NAME + ' стоимостью ' + CAR_PRICE + CURRENCY);

var amount = prompt ('Введите количество ' + CAR_NAME + ' для покупки:','1');

var bayCarfresh = confirm ('Желаете приобрести освежитель для машины?');

if (bayCarfresh) {
    fullPrice = (CAR_PRICE + CARFRESH_PRICE) * amount
}
else {
    fullPrice = CAR_PRICE * amount
}

alert('Спасибо ' + userName + ', к оплате: ' + fullPrice + CURRENCY);



