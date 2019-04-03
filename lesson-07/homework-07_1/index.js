//Константы
var CAR_NAME = 'Lamborghini';
var CAR_PRICE = 3000000;
var CARFRESH_PRICE = 2.99;
var CURRENCY = '$';

//СТоимость
var fullPrice = 0;

//Имя пользователя
var userName = prompt('Как Вас зовут?', 'Гость');
console.log(userName);

alert('Cейчас будет оформлен заказ на ' + CAR_NAME + ' стоимостью ' + CAR_PRICE + CURRENCY);

//Количество
var amount = prompt ('Введите количество ' + CAR_NAME + ' для покупки:','1');
console.log(amount);

// Покупает ли освежители(да\нет)(true/false)
var bayCarfresh = confirm ('Желаете приобрести освежитель для машины?');
console.log(bayCarfresh);
//Если покупает
if (bayCarfresh) {
    //стоимость равна цена машины плюс цена освежителя умноженные на их количество
    fullPrice = (CAR_PRICE + CARFRESH_PRICE) * amount
}
//Иначе если не покупает
else {
    //стоимость равна цена машины умноженная на количество
    fullPrice = CAR_PRICE * amount
}

alert('Спасибо ' + userName + ', к оплате: ' + fullPrice + CURRENCY)



