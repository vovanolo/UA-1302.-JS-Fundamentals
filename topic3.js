// debuging 
// handling exceptions

// console.log()

// let a = 10;
// let b = 10;

// let s = a + b;

// console.log("s = a + b - " + s);


// s = a + b + 10;

// console.log("s = a + b + 10 - " + s);


// a = 20;

// s = a;

// let a = 10;

// let b = 20;

// a+= 2;

// b+= 3;

// let c = a + b;

// debugger;

// for(let i = 0; i < 10; i+=1){
//     console.log(i);
// }


// console.log()

// func();

// try catch

// try{
//     console.log("Try section");
// }catch(error){
//     console.log("Catch section");
// }

// try{
//     console.log("Try section");
//     func1();
// }catch(error){
//     console.log("Catch section");
// }

// try{
//     console.log("begin of try section");
//     func1();
//     console.log("end of try section");
// }catch(error){
//     console.log("Catch section");
// }

// try{
//     console.log("begin of try section");
//     console.log(:
//     console.log("end of try section");
// }catch(error){
//     console.log("Catch section");
// }

// try{
//     console.log("begin of try section");
//     func1();
//     console.log("end of try section");
// }catch(error){
//     // console.log("Catch section");
//     // console.log(error);
//     // console.log(typeof error);
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);

// }

// try{
//     console.log("begin of try section");
//     // func1();
//     console.log("end of try section");
// }catch(error){
//     console.log("Catch section");
// } finally{
//     console.log("Finally");
// }

// throw

// Error

// RangeError

// TypeError

// new Error("Age is wrong");

// try{
//     let age = prompt("enter your age");
//     if(age < 18){
//         throw new RangeError("Wrong age");
//     }
//     console.log(age);
// } catch(error){
//     // console.log(error.message);
//     console.error(error.message);

// }

// class AgeError extends Error{
//     constructor(message){
//         super(message);
//         this.name = "AgeError";
//     }
// }


// try{
//     let age = prompt("enter your age");
//     if(age < 18){
//         throw new AgeError("Wrong age");
//     }
//     if(age > 18){
//         throw new RangeError("Wrong age range");
//     }
//     // console.log(age);
// } catch(error){
//     // console.log(error.name);
//     // console.error(error.message);
//     if(error.name = "AgeError"){

//     }
//     if( error instanceof RangeError){

//     }

// }

// forEach map reduce filter find

// const array = [1,2,3,4,5,5,6,7,8,9,10];

// array.forEach(function(element, index, array){
//     // console.log(element);
//     // console.log(index);
//     // console.log(`Index - ${index}: Element - ${element}`);
//     // console.log(array);
// })

// array.map(function(element,index){
//     console.log(element);
// })


// let newArray = array.map(function(element,index){
//     // console.log(element);
//     return element + 10;
// })

// console.log(newArray);

// let result = array.reduce(function(sum, element){
//     return sum + element;
// }, 0);


// console.log(result);

// let filteredArray = array.filter(function(element){
//     return element > 5;
// })

// let filteredArray = array.filter(function(element){
//     return element === 5;
// })

// let filteredArray = array.find(function(element){
//     return element === 5;
// })

// console.log(filteredArray);