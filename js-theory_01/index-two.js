const MAN = true;
const WOMAN = false;

class Student {
    constructor (firstName, lastName, age, sex, eyesColor){
        this.name = {
            first: firstName,
            last: lastName,
        };
        this.age = age;
        this.sex = sex;
        this.eyesColor = eyesColor;
    }
    sayHello () {
        return 'Hello, my name is ' + this.name.first;
    }
    sayAge() {
        return 'I am ' + this.age;
    }
    doYoulike (something) {
        return 'I am ' + this.age + ',I am too old for ' + something;
    }
    toString () {
        return this.name.first + ' ' + this.name.last;
    }
    cigarets () {
        if (this.age >= 18) {
            return 'Yes'
        }
        else {return 'No'}
    }
    doYouLove (someone) {
        if (this === someone) {
            return 'Yes'
        }
        else if(this.sex === MAN) {
            if (someone.age < 30 && someone.age >= 18 && someone.sex === WOMAN) {
                return 'Yes'
            } else {
                return 'No'
            }
        } else {
           if ((someone.sex === MAN && someone.age >= 28 && someone.age <= 38) || (someone.sex === WOMAN && someone.age === 25)) {
               return 'Yes'
           } else {
               return 'No'
           }
        }
    }
}

const vika = new Student('Vika', 'Spiridonova', 23, WOMAN, 'brown');
const sasha = new Student('Sasha', 'Vovchuk', 35, MAN, 'green');
const sheldon = new Student('Sheldon', 'Cuper', 9, MAN, 'blue');
const emmy = new Student('Emmy', 'Fara Fauler', 29, WOMAN, 'blue');

const group = [vika, sasha, sheldon, emmy];

const cources = [
    [vika, sasha],
    [sasha, sheldon],
    [vika, sasha, sheldon]
];

cources[0][2] = sheldon;  // sheldon add to first group
cources [1][0] = vika; // vika change sasha one second group


for (var i = 0; i < 10; i++){
    group.push(new Student('name'+i, 'lastName'+i, i, MAN, 'black'));
}

for ( var i=0; i<group.length; i++){
    var student = group[i];
   console.log(student.name.first + ' ' + student.name.last);
   // console.log(i);
}



