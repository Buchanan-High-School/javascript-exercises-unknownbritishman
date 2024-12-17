const colors = ["Red", "Blue", "Purple", "Green", "Black", "violet", "yellow"]

// every color can be represented with a six-value HEX code
// Ex. #A156DF
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
// get the DOM elements
const colorSpan = document.querySelector("#color")
const colorBtn = document.querySelector("#get-color")
const randomBtn = document.querySelector("#random-number")
const saveBtn = document.querySelector("#save-color")

colorBtn.addEventListener("click", function() {
    console.log("I WAS CLICKED AHHHHHHHHHH")
// Get an element from the colors array
let pickedColor = getRandomNumber(color)
// Change the background of the page
document.body.style.backgroundColor = colors[pickedColor]
// Update colorSpan
colorSpan.innerText = colors[pickedColor]
})

randomBtn.addEventListener("click", function() {
    console.log("I WAS CLICKED AGAIN AHHHHHHH")
    // Start a HEX string
    let pickedColor = "#"
    // Pick 6 random vales from hex array
    for(let el=0; el<6; el++) {
        pickedColor += hex[getRandomNumber(hex)];
        console.log(pickedColor)
    }
    // Set the background
    document.body.style.backgroundColor = pickedColor
    // Update colorpSpan
      colorSpan.innerText = pickedColor
})

function getRandomNumber(list) {
    console.log("list worked")
    return Math.floor(Math.random() *list.length)
} 

saveBtn.addEventListener("click", function() {
    console.log("it worked")
    let pickedColor = 
})