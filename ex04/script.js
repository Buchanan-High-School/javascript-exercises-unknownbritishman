function task1() {
  let myArray = ["one",
    "two",
    "three"];
  // This will run when you click the button.
  let target = document.querySelector('#task-1-target')

  myArray.forEach((item) => {
    let el = document.createElement("p");
    el.innerText = item;
    target.appendChild(el);
  });
}

function task2A() {
  // Write your code in here
  let target = document.querySelector("#color-list")
  console.log(target)
}

function task2B() {
  // Write your code in here
  let target = document.querySelectorAll("#name-list li")
  //log the array
  console.log(target)
 target.forEach(el => {
  console.log("Hi " + el.innerText)
 })
}

function task3() {
  // Write your code in here
let target = document.querySelectorAll(".item p")
console.log(target)

target.forEach(person => {
  person.style.backgroundColor = '#' + person.innerText;
})
}
