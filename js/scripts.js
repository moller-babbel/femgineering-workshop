
const button = document.querySelector("button")
const body = document.querySelector("body")

const colors = ["red", "green", "blue", "yellow", "orange"]

body.style.backgroundColor = "violet"

button.addEventListener("click", changeBackground)

function changeBackground() {
    const colorIndex = Math.floor (Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]
}