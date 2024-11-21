console.log("it connected")

let myArray = [
    "BOB", "BOB"
]
console.log(myArray)

let names = document.querySelectorAll('li')
let target = document.querySelector("#receiver")

names.forEach(item => {
    let newEl = document.createElement("li")
    newEl.innertext = item;
    
})