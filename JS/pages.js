// initializes the page index we're start on.
let pageNumber = 0

//data that is render on each page
const pages = [
  { copy: "a memphis-based developer", background: "#5B4B49", circle: "#FF9B71" },
  { copy: "passionate about fintech", background: "#F7BFB4", circle: "#7D80DA" },
  { copy: "ray dalio's biggest fan", background: "#7DAF9C", circle: "#91785D" },
  { copy: `excited about <a href="https://vista-trading-app.superhi.com/" target="_blank">Vista's</a> future`, background: "#23967F", circle: "#DFD5A5" }
]

// initializes the changing agent for the footer icons and section update.
const forwardTag = document.querySelector("footer img.forward")
const backTag = document.querySelector("footer img.back")
const randomTag = document.querySelector("footer img.random")
const outputTag = document.querySelector("h2")
const circleTag = document.querySelector("section div.circle")
const bodyTag = document.querySelector("body")

// when the forward icon is clicked it will increase the pageNumber count/loop through pages and update the h2 tag of section
const forward = function () {
  pageNumber = pageNumber + 1
  
  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }
  
  updateSection()
}

// when the back icon is clicked it will decrease the pageNumber count/loop through pages and update the h2 tag of section
const back = function () {
  pageNumber = pageNumber - 1
  
  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }
  
  updateSection()
}

// when the shuffle icon is clicked it will random iterate the pageNumber count/loop through pages and update the h2 tag of section

const random = function () {
  pageNumber = Math.floor( Math.random() * pages.length )
  
  updateSection()
}

//updates the content that is render on the h2 tag
const updateSection = function () {
  outputTag.innerHTML = pages[pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].circle
  bodyTag.style.backgroundColor = pages[pageNumber].background
}

// awaits user action and implements the page change when the forward icon is clicked
forwardTag.addEventListener("click", function() {
  forward()
})

// awaits user action and implements the page change when the back icon is clicked
backTag.addEventListener("click", function () {
  back()                   
})

//on click on random tag pick page

randomTag.addEventListener("click", function () {
  random()
})

//when user types on left or right arrow key on keyboard let the page render in comparsion

document.addEventListener("keyup", function (event) {
	console.log(event)    
  
  //if the key being pressed is ArrowRight
  if (event.key == "ArrowRight") {
    forward()
  }
  
  //if the key being pressed is ArrowLeft
  if (event.key == "ArrowLeft") {
    back()
  }
})

