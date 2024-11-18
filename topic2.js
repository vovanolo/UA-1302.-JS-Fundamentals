// масиви

// let number = 2323;

// []

// let numbers = [0,1,2,3,4,5,6,7,8,9];

// let names = ["Ivan", "Petro"];

// let array = [2,4,"sfsf", true, false, null, undefined]


// let numbers = [2,3,4,6,7,8,9]; // 0,1,2,3,4...

// // console.log(numbers[1]);

// numbers[1] =  110;

// numbers[7] = 2323;
// // console.log(numbers[1]);
// numbers[10] = 1000;
// console.log(numbers.length);
// console.log(numbers);
// console.log(numbers[9]);


// let numbers = [2,4,5,6,7,8];


// numbers.push(9,10);

// numbers.pop();

// numbers.unshift(0,1);

// numbers.shift();

// console.log(numbers);

// // let newNumbers = [numbers];
// // let newNumbers = numbers;
// let newNumbers = [...numbers];


// console.log(newNumbers);


// loops


// while, for


// while (умова) {
//  ..дії
// }

// let i = 0;

// while (i < 10){
//     console.log(i);

//     i += 1;
// }


// for(let i = 0; i < 10; i += 1){
//     console.log(i);
// }

// for(let i = 0; i < 10; i += 2){
//     console.log(i);
// }

// for(let i = 9; i >= 0; i -= 2){
//     console.log(i);
// }

// break;

// continue

// let numbers = [1,2,3,4,5,6,7,8,9];
// // let text = ""
// let result = 0;

// for(let i = 0; i < numbers.length; i+=1){
//     // console.log(numbers[i]);
//     // text += `${numbers[i]} `;
//     result += numbers[i];
// }

// // console.log(text);
// console.log(result);

// let numbers = [1,2,3,4,5,6,7,8,9];

// for(let i = 0; i < numbers.length; i+=1){
//     console.log(numbers[i]);
//     if(numbers[i] === 6){
//         break;
//     }
// }


// for(let i = 0; i < numbers.length; i+=1){
//     if(numbers[i] === 6){
//         continue;
//     }
//     console.log(numbers[i]);
// }



// for in
// for of

// let numbers = [1,2,3,4,5,6,7,8,9];

// // for (let element of numbers){
// //     console.log(element);
// // }

// for (let index in numbers){
//     // console.log(index);
//     console.log(numbers[index]);

// }

// functions

// ``


// function sayHello(){
//     console.log("Hello Guys!");
// }

// sayHello();


// function decalaration


// function expression



// const sayHello = function(){
//     console.log("Hello Guys!");
// }

// sayHello();

// function sum(a, b){
//     console.log(a + b);
// }

// sum(10,10);
// sum(2,7);

// function sum(a, b){
//     return a + b;
// }

// let result = sum(2,3);

// console.log(sum(2,2));

// console.log(result)

// function sum(){
//     // console.log(arguments);
//     let result = 0;
//     for(let i = 0; i < arguments.length; i += 1){
//         result += arguments[i];
//     }
//     return result;
// }

// console.log(sum(2,4,5,6,7,8,56,4,4,3,3,4,5,6,7,8,65,4,3,5));

// function sum(){
//     let name = "sfsfs";
// }

// console.log(name);