console.log("Script running...")
// Task 1: Hello button flow
// Select the 'Click me for hello' button
let button1 = document.getElementById("helloButton")
console.log(button1)
// Select the empty p tag under that button
let tag1 = document.getElementById("helloText")
console.log(tag1)
// Add an event listener to the hello button such that when it's click, the p tag text says "Hello"


button1.addEventListener("click", function(event){
  tag1.textContent = "Hello"
})

// Task 2: All caps button flow
// Select the 'Click me for all caps' button
let button2 = document.getElementById("capsButton")
console.log(button2)
// Select the p tag under that button (says there's no need to shout)
let tag2 = document.getElementById("capsText")
console.log(tag2)
// Add an event listener to the caps button such that when it's clicked, the p tag text is "THERE'S NO NEED TO SHOUT"

button2.addEventListener("click", function(event){
  tag2.textContent = "THERE'S NO NEED TO SHOUT"
})

// Task 3: Dog image flow
// Select the dog image
let image = document.querySelector("img")

// Add an event listener to the dog image such that when the mouse is over it, the image src becomes happy-dog.jpeg
image.addEventListener("mouseover", function(event){
image.src = "happy-dog.jpeg"
})


// Add an event listener to the dog image such that when the mouse is off it, the image src becomes sad-dog.jpeg
image.addEventListener("mouseout", function(event) {
image.src = "sad-dog.jpeg"
})


// Task 4: Name input flow
// Select the submit button
let button3 = document.getElementById("nameButton")
console.log(button3)
// Select the input 
let input = document.getElementById("name")
console.log(input)
// Select the empty p tag under them
let tag3 = document.getElementById("nameText")
console.log(tag3)
// Add an event listener to the submit button such that when it is clicked, the p tag text is "Nice to meet you " + input.value
button3.addEventListener("click", function(event){
  tag3.textContent = "Nice to meet you " + input.value
})



