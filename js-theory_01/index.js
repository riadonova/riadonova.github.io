var b;
console.log(b);
var a = null;
console.log(a);




const student = {
    name: {
        first: 'Sasha',
        last: 'Vovchuk'
    },
    age: 35,
    sex: true,
    sayHello: function () {
        return 'Hello, my name is ' + this.name.first;
    },
    sayAge: function () {
        return 'I am ' + this.age;
    },
    doYoulike: function (something) {
        return 'I am ' + this.age + ',I am too old for ' + something;
    },
    toString: function () {
        return 'Stupid dog';
    },
    cigarets: function () {
      if (this.age >= 18) {
          return 'Yes'
      }
      else {return 'No'}
    },
    doYouLove: function (someone) {
        if (someone.age < 30 && someone.sex === false) {
            return 'Yes'
        }
        else {
            return 'No'
        }
    }
};

const studentGirl = {
    name: {
        first: 'Vika',
        last: 'Spiridonova'
    },
    age: 23,
    sex: false,
    sayHello: function () {
        return 'Hello, my name is ' + this.name.first;
    },
    sayAge: function () {
        return 'I am ' + this.age;
    },
    doYoulike: function (something) {
        return 'I am ' + this.age + ',I am too old for ' + something;
    },
    areYouolder: function (someone) {
        if (this.age > someone.age) {
            return 'Yes'
        }
        else if(this.age === someone.age) {
            return 'We the same age'
        }
        else {
            return 'No ' + someone.name.first + ' older'
        }
    }
};




