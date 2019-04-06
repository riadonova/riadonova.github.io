hello();

function hello() { // function declaration
    console.log('Hello');
}

var hello2 = function () { // function expression
    console.log('Hello 2');
};
hello2();

function helloUser(userName, text) {
    if (text) {
        console.log('Hello, ' + userName + text);
    } else {
        console.log('Hello, ' + userName);
    }

}

helloUser('Vika', ', How are you?');
helloUser('Sasha');


function helloUser2(userObj) {
    console.log(userObj.name + ' ' + userObj.surname);
}

var user = {
    name: 'Vasy',
    surname: 'Ivanov'
};

helloUser2(user);

function getUserFullName(userObj) {
    console.log('перед RETURN');
    return userObj.name + userObj.surname;
    console.log('после RETURN');
}

var fullName = getUserFullName(user);
console.log('fullName =', fullName);

var test = 123;

function showTest() {
    console.log('test =', test);
    var test2 = 456;
}

showTest();
// console.log('test2 =', test2);

var user = 'Vika';
var user = 'Sasha';
console.log('user =', user);


var a = 5;

function myFunc() {
    // LexicalEnviroment { a: indefined }

    a = 10;

    if (false) {
        var a = 20;
    }
}

myFunc();

console.log('a =', a);


var user = {
    first: 'Vika',
    last: 'Spiridonova',
};

var user2 = {
    first: 'Sasha',
    last: 'Vovchuk'
};

function showFullName() {
    console.log(this.first + ' ' + this.last);
}

user.FullName = showFullName;
user2.FullName = showFullName;
user.FullName();
user2.FullName();

// прочитать про bind, call и apply

function showNums(a, b) {
    console.log(a, b);
}

showNums(5, 10);


function showNums() {
    console.log('arguments =', arguments);
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

showNums(5, 10, 20, 30);


function sum () {
    var result =0;
    for(var i =0; i<arguments.length; i++) {
        result = result+arguments[i];
    }
    return result;
}
sum(1, 2, 3, 4, 5);

console.log(sum(1, 2, 3, 4, 5));


