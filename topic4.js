// обєкти

// const user = {
//     ключ: значення
//     key: value
// }

// const user = {
//     name: "Volodymyr",
//     age: 30,
//     surname: "Pankiv",
//     marriegeStatus: true,
// }

// // let key = "age";

// console.log(user);
// console.log(user.name);
// console.log(user.key);
// console.log(user[key]);
// let key = "name";

// const user = { name: 'Name', ...}
// let nameTwo = user[key];


// const user = {
//     name: "Volodymyr",
//     age: 30,
//     surname: "Pankiv",
//     marriegeStatus: true,
//     friends: [{name:"Ivan"}, {name:"Petro"}],
//     son: {
//         name: "John",
//         age: 10,
//     }
// }

// user.name = "Ivan";

// user.city = "Lviv";


// console.log(user);
// console.log(user.friends[0].name);
// console.log(user.son.name);


// for(let i = 0; i < user.friends.length; i++)


// const user = {
//     name: "Volodymyr",
//     age: 30,
//     surname: "Pankiv",
//     greeting: function(){
//         console.log("Hello");
//     }
// }

// user.greeting();

// const user = {
//     name: "Volodymyr",
//     age: 30,
//     surname: "Pankiv",
//     greeting: function(){
//         console.log(`Hello my name is ${this.name}`);
//     }
// }

// user.greeting();

// const user = {
//     name: "Volodymyr",
//     age: 30,
//     surname: "Pankiv",
// }

// Object.keys()
// Object.values()
// Object.entries()

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// функція конструктор

// Класи

// ООП

// Інкапсуляція
// Поліморфізм
// Наслідування

// class User {
//     constructor(username, age){
//         this._name = username;
//         this.age = age;
//     }

//     sayHello(){
//         console.log(`Hello my name is ${this.name}`);
//     }
//     // гетери і сетери
//     get name(){
//         return this._name;
//     }

//     set name(value){
//         if(value.length < 4){
//             alert("Name must be > 4 chars");
//             return;
//         }
//         this._name = value;
//     }
// }

// let user1 = new User("user1", 24);
// let user2 = new User("user2", 66);


// console.log(user1.name);
// user1.name = 2424;
// user1.name = "user1newname";
// console.log(user1.name);
// console.log(user2);

// user1.sayHello()
// user2.sayHello();


// Наслідування

// class People {
//     constructor(name){
//         this.name = name;
//     }

//     sayHello(){
//         console.log(`My name is ${this.name}`);
//     }
//     walking(){
//         console.log("Walking like people");
//     }
// }

// class Student extends People{
//     #salary;
//     constructor(name,yearofStudy, salary){
//         super(name);
//         this.year = yearofStudy;
//         this.#salary = salary;
//     }
//     study(){
//         console.log("Im studiing....");
//     }
//     walking(){
//         // super.walk
//         super.walking();
//         console.log("Walking like student");
//     }
// }


// let people1 = new People("Name1");

// let student1 = new Student("Student1", 2024);

// console.log(student1.name);
// console.log(student1.year);


// student1.sayHello();

// student1.study();

// student1.walking();

// console.log(student1 instanceof People);

// instanceof





