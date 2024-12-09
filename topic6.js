// BOM Events

// window

// console.log(window);

// alert("hello");

// window.alert("hello");

// let variable = 10;


// console.log(window.variable);

// console.log(window.innerHeight);
// console.log(window.innerWidth);

// let newwindow = window.open("", "", "width=200, height=200, top=200, left=200");

// newwindow.close();

// newwindow.resizeTo(300,300);
// newwindow.moveTo(300,300);

// Event

// click

// mouseover

// mouseout 

// change

// function handleClick(){
//     console.log("element was clicked");
// }

// let title = document.querySelector("#title");

// title.onclick = function(){
//     console.log("clicked");
// }

// 

// function handleClick(){
//     console.log("clicked");
// }

// title.addEventListener("click", handleClick);

// title.addEventListener('click', function(event){
//     // title.style.color = 'red';
//     // console.log(event);
//     // console.log(event.target);
//     // event.target.style.color = 'red';
//     // console.log(event.type);
//     if(event.type === 'click'){
//         console.log('clicked');
//     }

// })

// function handleClick(event){
//     if(event.type === 'click'){
//         console.log('clicked');
//     }
//     if(event.type === 'mouseover'){
//         console.log('mouse over element');
//     }
// }



// title.addEventListener('click', handleClick);
// title.addEventListener("mouseover", handleClick);


// let title = document.querySelector("#title");
// let inp = document.querySelector("#inp");
// let btn = document.querySelector("#btn");


// // btn.addEventListener('click', function(){
// //     title.style.color = 'red';
// // })

// btn.addEventListener('click', function(){
//     // console.log(inp.value);
//     document.body.innerHTML += `<h2>Hello ${inp.value}</h2>`;
//     // inp.remove();
//     // inp.style.visibility = 'hidden';
//     // btn.remove();
// })

// let registerForm = document.querySelector("#registerForm");

// registerForm.addEventListener("submit", function(event){
//     event.preventDefault();
//     // const {name, surname} = event.target.elements
//     // console.log("Form was submitted");
//     console.log(event.target.elements.name.value);
//     console.log(event.target.elements.surname.value);
// })