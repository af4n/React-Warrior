// var getMovie = function (name, start) {
//     return name + ' ' + start;
// }
// console.log(getMovie('Averages', '2018'));

// var getMovie = (name, start) => {
//     return name + ' ' + start;
// }
// console.log(getMovie('Averages', '2018'));

var getMovie = (name, start) => name + ' ' + start;
console.log(getMovie('Averages', '2018'));

// var getMovie = name => name;
// console.log(getMovie('Averages'));

var getMovie = () => 'Averages';
console.log(getMovie());

function API () {
    this.url = 'http://reactwarrior.com';
}
// API.prototype.get = function () {
//     //var self = this;
//     return [1,2].map(function (number) {
//         console.log('this', this);
//         return number;
//     }.bind(this))
// }
API.prototype.get = function () {
    return [1,2].map(number => {
        console.log('this', this);
    });
}
var api = new API();
api.get();

var getMovie = function (name, start) {
    console.log(arguments);
    return name + ' ' + start;
}
console.log(getMovie('Averages', '2018'));

// let warrior = 3;
// if (true) {
//     let warrior = 5;
//     console.log(warrior);
// }
// console.log(warrior);

// let warrior = 5;
// let warrior = 3;
// console.log(warrior);

var warriors = [];
for(let i = 0; i < 10; i++) {
    warriors.push(function () {
        console.log(i);
    })
}

const API_URL = 'http://reactwarriors.com';
if (true) {
    const API_URL = 'http://reactwarriors.com';
}
console.log(API_URL);

// var obj = {
//     width: 100
// };
// console.log(obj.width);

function generateObj () {
    return {
        title: 'Menu',
        width: 100,
        height: 200
    };
}
var { width: containerWidth, height: containerHeight } = generateObj();
console.log(containerWidth);
console.log(containerHeight);

var obj = {
    id: '123',
    attributes: {
        //width: 100,
        //height: 200
    }
}
var { id, attributes: { width = 50, height = 100 } } = obj;
console.log(id);
console.log(width);
console.log(height);

var [ red = 'super red', yellow ] = ['red', 'yellow'];
console.log(red);
console.log(yellow);

// const getText = (a, ...args) => {
//     console.log(a, args);
// }
// getText('a', 'b', 'c');

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);
console.log(arr1);

const args = ['a', 'b', 'c'];
const getText = (a, b, c) => {
    console.log(a, b, c);
}
getText(...args);

// var name = 'React Warrior';
// var hello = 'Hello ' + name;
// console.log(hello);

var name = 'React Warrior';
const hello = `Hello ${name}`;
console.log(hello);
//var html = '<div>' + '<h1>' + name + '</h1>' + '</div>';
const html = `
    <div>
        <h1>${name}</h1>
    </div>
`;
console.log(html);

// const message = `This equals to ${100/2}`;
// console.log(message);

const tag = (strings, ...values) => {
    console.log(strings, values);
    if (values[0] < 20) {
        values[1] = 'awake';
    }
    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}
const message = tag`It's ${new Date().getHours()} and I'm ${'sleepy'}`;
console.log(message);

// export const getSum = (a, b) => a + b;
// import { getSum } from './math';
// console.log(getSum(1, 2));
// export const API_URL = 'http://reactwarrior.com';
// import { getSum, API_URL as URL } from './math';
// console.log(getSum(1, 2), API_URL);
// export default (a, b) => a + b;
// import getSum from './math';
// console.log(getSum(1, 2));

class SimpleDate {
    constructor (year, month, day) {
        this.year = year,
        this.month = month,
        this.day = day;
    }
    toString() {
        return `${this.day}/${this.month}/${this.year}`;
    }
}
const today = new SimpleDate(2020, 04, 03);
console.log(today.toString());

class OtherDate extends SimpleDate {
    constructor(year, month, day) {
        super(year, month, day)
    }
    toString() {
        return `${this.day}.${this.month}.${this.year}`;
    }
}
const tomorrow = new OtherDate(2020, 04, 02);
console.log(tomorrow.toString());

const promise = new Promise((resolve, reject) => {
    throw new Error('ALARM')
    setTimeout(() => {
        if (true) {
            resolve('Hello word');
        } else {
            reject();
        }
    }, 2000)
});
// promise.then(data => console.log('success: ', data))
//     .then(data => console.log('success 2: ', data))
//     .catch(error => console.log('error: ', error));
// promise.then(data => {
//     console.log('success: ', data);
//     return 'foo bar';
// })
//     .then(data => console.log('success 2: ', data))
//     .catch(error => console.log('error', error));
promise.then(
    data => console.log('success: ', data),
    error => console.log('error: ', error)
)