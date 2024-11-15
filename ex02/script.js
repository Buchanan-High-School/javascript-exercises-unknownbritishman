// Write your Task 1 code inside this function!
function task1() {
  console.log("Running task 1");
  // 1. target the div
  let target = document.querySelector("#text-content")
  console.log("target")
  // 2. set inner text to something new
  target.innerText = "AHHHHHHHHHHHHH"
}

// Write your task 2 code inside this function!
function task2() {
  console.log("Running task 2");
  
}

let inverted = false; 
function task2() {
  let button = document.querySelector('BLYAT')
  let html = document.querySelector ('#task2')
  console.log("AHHHHHHHHHHHHH")
  html.classList.toggle("inverted")
  inverted = !inverted;
}

// Write your task 3 code inside this function!
function task3() {
  console.log("Running task 3");
}

function task3() {
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("New Task"));
  ul.appendChild(li);
}
