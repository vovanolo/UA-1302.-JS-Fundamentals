// 
// fetch("url - api", {})
// fetch("url - api", {method: "POST", body: })


// console.log(fetch("https://jsonplaceholder.typicode.com/users"));


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(result => result.json())
//     .then(result => console.log(result));


// async function getUsers() {
//   let result = await fetch("https://jsonplaceholder.typicode.com/users");
//   result = await result.json();

//   result.map(user => console.log(user.name));
// }


// getUsers();

// const btn = document.querySelector(".btn");

// const usersList = document.querySelector(".users_list");

// btn.addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(result => result.json())
//     .then(result => {
//         result.map(user => {
//             usersList.innerHTML += `<li>${user.name}</li>`
//         })
//     });
//     // .then(result => console.log(result));
// })
