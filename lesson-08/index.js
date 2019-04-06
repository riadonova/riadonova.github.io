//массив не тип данных

var arr1 = [1, 2, 3, 4, 5]; // [1,2,3,4,5 ]
console.log('arr1 =', arr1);
console.log('arr1 [0] =', arr1[0]); // 1
console.log('arr1 [4] =', arr1[4]); // 5

var arr2 = new Array(1, 2, 3, 4, 5); // [1,2,3,4,5]
console.log('arr2 =', arr2);

console.log('arr1 === arr2', arr1 === arr2); // false

var arr3 = new Array(5); // [empty х 5]
console.log('arr3 =', arr3);

var arr4 = [1, 2, 3, [4, 5]];
console.log(arr4[3][0]); //4

var arr6 = [1, 2, 3, 4, 5];
arr6 [2] = 7;
console.log('arr6 =', arr6);

console.log('arr6 [10] =', arr6[10]); // undefined
console.log('arr =', arr6);

var arr7 = [];
arr7[0] = 1;
arr7[2] = 3;
console.log('arr7 =', arr7);
console.log('arr7 =', arr7); // undefined

delete arr7 [2];
console.log('arr7 =', arr7); // [1, empty x 2]

var arr8 = [1, 2, 3];
arr8.splice(1, 1);
console.log('arr8 =', arr8); // [1,3]

var arr9 = ['hello', 'world'];
console.log('arr9 =', arr9); // ['hello', 'world']
var str9 = arr9.join(' -+-===*** ');
console.log('str9 =', str9); // 'hello*world'

var arr10 = [1, 2, 3, 4, 5];
var arr11 = arr10.slice(1, 3);
console.log('arr10 =', arr10); //[1,2,3,4,5]
console.log('arr11 =', arr11); // [2, 3, 4]

var arr12 = [1, 2, 3, 4, 5];
arr12.push(6);
console.log('arr12 =', arr12); // [1,2,3,4,5,6]
var pop12 = arr12.pop();
console.log('arr12 =', arr12); // 6
console.log('arr12 =', arr12); // [1,2,3,4,5]
arr12.unshift(0);
console.log('arr12 =', arr12); // [0,1,2,3,4,5]
arr12.shift();
console.log('arr12 =', arr12); //[1,2,3,4,5]

arr12.reverse();
console.log('arr12 =', arr12); //[5,4,3,2,1]

var arr13 = ['Vasy', 'Pety', 'Gena', 'Bory'];

var indexVasy = arr13.indexOf('Vasy');
var indexFedy = arr13.indexOf('Fedor');
console.log('indexVasy =', indexVasy); // 0
console.log('indexFedy =', indexFedy); // -1

var arr14 = [4, 5];
var arr14 = [1, 2, 3, arr14, [4, 5]];
var indexArr = arr14.indexOf(arr14);
var indexArr2 = arr14.indexOf([4, 5]);
console.log('indexArr =', indexArr); // 3
console.log('indexArr2 =', indexArr2); //-1
console.log(arr14.indexOf(undefined));

var str = 'telefon,zarydka,chehol';
var arrStr = str.split(',');
console.log('arrStr =', arrStr);

var user = {
    name: 'Yevgeniy',
    surname: 'Petrosyn',
    age: 70,
    hobby: ['pesni', 'ne smesno shutit'],
    parents: {
        mother: 'Galy',
        father: 'Vova'
    }
};
console.log('user =', user);
console.log('user.name =', user.name); // 'Yevgeniy'
console.log('user.hobby[1]', user.hobby[1]);  // 'ne smesno shutit'
console.log(user.parents.father); // 'Vova'

console.log("user ['surname]) =", user ['surname']); //Petrosyn

var prop = 'age';

console.log('user.prop =', user.prop); // undefined
console.log('user[prop]) =', user[prop]); // 70

user.name = 'Vasiliy';
console.log('user =', user);

user.hobby.push('smeyatsy');
console.log('user =', user);

var keys = Object.keys(user);
console.log('keys =', keys); //[]

var arr20 = [1, 2, 3]; //оследний индекс = 2
console.log('arr20.length =', arr20.length); //3
var str21 = 'Heloo World!!!';
console.log('str21.length =', str21.length); //13

var arr22 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var i = 0;
var l = arr22.length; // 13

while (i < 10) {
    console.log(arr22[i]);
    i = i + 1; // или i+=1 или i++ или ++i
}

var arr23 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < arr23.length; i++) {
    console.log(arr22[i]);
    var user = {
        name: 'Vasy',
        surname: 'Ivanov',
        age: 20
    };

    var keys = Object.keys(user);
    for (var i = 0; i < keys.length; i++) {
        console.log(keys[i]); // name, surname, age

        var prop = keys[i]; //name, surname, age
        console.log(user['prop']);
    }

    var user2 = {
        name: 'Pety',
        surname: 'Sidorov',
        age: 30
    };
}
    for (var k in user2) {
        //k = name, surname, age
        console.log( user2[k]);
    }

    var arr24 = [1,2,3,4,5];
    arr24.test = 'Hello';


    for (var k in arr24) { // не использовать for in для массивов
        console.log (arr24[k]);
    }

    