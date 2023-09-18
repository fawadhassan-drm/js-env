// Primitive Data Types
// nnbbssu => number, null, boolean, bigInt, String, Symbol, Undefined

let num1 = Symbol('123')
let num2 = Symbol('123')

console.log(num1);
console.log(num2);
console.log(num1 == num2);
console.log(num1 === num2);

console.log(typeof num1);



// Non-Primitive Data Types
// array, object, function

let arr = ['Fawad', 'Hassan', 'Javeria']
console.log(arr);
console.log(typeof arr);

let cars = {
    car1: 'city',
    car2: 'audi',
    car3: 'bmw'
}

console.log(cars);
console.log(typeof cars);


let myFunc = function () {
    console.log(3+3)
}
console.log(myFunc);
console.log(typeof myFunc);