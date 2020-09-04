//This is where I'll program the simple overlay menu.

let menuButton = document.querySelector("#menu")
let screen = document.querySelector("body")
let overlay = document.querySelector("#myNav")
let closeButton = document.querySelector(".closebtn")

// window.addEventListener('load', () => {
//     overlay.style.display = "none"
// })

menuButton.addEventListener("click", () => {
        overlay.style.display = "block"
        menuButton.style.display = "none"
        console.log("menu clicked!")
    }
    
)

closeButton.addEventListener("click", () => {
    overlay.style.display = "none"
    menuButton.style.display = "block"
 })


