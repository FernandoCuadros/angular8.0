

for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log(i);


var i;

for (i = 0; i < 10; i++) {
    console.log(i);
}

console.log(i);



function sum(numbers) {
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }

    console.log(i);

    return result;
}
sum([10,20,30]); // 60


// 1

function suma(a, b) {
    return a + b;
}


let suma = (a, b) => {
    let result = a + b;

    return result;
}

// 2
let suma = (a, b) => a + b;

suma(4, 4);

let getUser = () => suma(4, 5);

class Dom {

    hideForm() {

    }
    setEvent() {
        $('button').on('click', () => {
            this.hideForm();
        });
    }
}



const sum = (a = 0, b = 0, ...rest) => {
    // rest = [c, d, ...];
    let result = 0
    result = a + b;

    for (let i = 0; i < rest.length; i++) {
        result += rest[i];
    }

    return result;
}

const numbers = [5, 10, 15];

sum(...numbers);


function Circle(radio) {
    this.radio = radio;
    this.PI = 3.1416;
}

Circle.prototype.area = function () {
    return this.PI * this.radio * this.radio;
}

let c1 = new Circle(10);
c1.area();



function func1(cb) {
    console.log('ejecutando func 1');
    cb();
}

function func2() {
    console.log('ejecutando func 2');
}


func1(func2);


function saludar() {
    return new Promise((resolve, reject) => {
        console.log('Hola que tal?');
        setTimeout(() => {
            reject('Error');
        }, 3000);
    });
}

saludar()
    .then((rpta) => {
        console.log(rpta);
    })
    .catch((err) => {
        console.log(err);
    })