const colors = ["Red", "Blue", "Purple", "Green", "Black", "violet", "yellow"]

// every color can be represented with a six-value HEX code
// Ex. #A156DF
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
// get the DOM elements
const colorSpan = document.querySelector("#color")
const colorBtn = document.querySelector("#get-color")
const randomBtn = document.querySelector("#random-number")

colorBtn.addEventListener("click", function() {
    console.log("I WAS CLICKED AHHHHHHHHHH")
// Get an element from the colors array
let pickedColor = Math.floor(Math.random() * colors.length)
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
        pickedColor += hex[Math.floor(Math.random() * hex.length)]
        console.log(pickedColor)
    }
    // Set the background
    document.body.style.backgroundColor = pickedColor
    // Update colorpSpan
      colorSpan.innerText = pickedColor
})