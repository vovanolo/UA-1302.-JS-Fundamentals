// console.log(1); //0.1
// console.log(2); // 0.1
// console.log(3); // 0.1

// 0.3

// 0.1


// setTimeout
// console.log(1);

// setTimeout(() => {
//     console.log(2);
// })

// console.log(3);


// Promise, async/await

// Promise - обєкт

// Promise((resolve, reject) => {})

//  Promise(function(resolve, reject) {})

// pending ? resolved : rejected

// function sum(a,b){
//     return a + b;
// }

// console.log(sum(4,4));


// function sum(a,b){
//     return new Promise((resolve,reject) => {
//         resolve(a + b);
//     })
// }

// // console.log(sum(4,4));
// console.log(sum(4,4));
// sum(3,4).then(result => console.log(result));

// function sum(a,b){
//     return new Promise((resolve,reject) => {
//         if(a > 0){
//             resolve(a + b);
//         }
//         reject("Error: a < 0");
//     })
// }


// sum(-3,4).then(result => console.log(result))
//         .catch(error => console.log(error));


// sum(3,4).then(result => console.log(result),
//                 error => console.log(error));

// function sum(a,b){
//     return new Promise((resolve,reject) => {
//         if(a > 0){
//             resolve(a + b);
//         }
//         reject("Error: a < 0");
//     })
// }

// sum(3,4).then(result => result.toString())
//         .then(result => "Result: " + result)
//         .then(result => console.log(result));


// function sum(a,b){
//     return new Promise((resolve,reject) => {
//         if(a > 0){
//             resolve(a + b);
//         }
//         reject("Error: a < 0");
//     })
// }

// sum(-3,4).then(result => console.log(result))
//         .catch(error => {
//             console.log(error);
//             // return sum(3,4)
//             return new Promise((resolve) => {
//                 resolve(6)
//             })
//         })
//         .then(result => console.log(result));

// import {inf, sayHello} from './file.js';

// console.log(inf);

// console.log(sayHello());