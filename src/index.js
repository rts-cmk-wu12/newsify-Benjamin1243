require("./styles/style.scss")
//dette er den scss fil, jeg har alle mine animationer i 
require('./styles/sanimations.scss');
//dette er alle mine scss variabler
require('./styles/variables.scss');
//Dette er min scss fil til forsiden
require('./styles/index.scss');
require("./images/newsify_logo2.png")
console.log("her")
//her kører funktionerne til forsiden
const fadeBox = document.querySelector(".splashScreen")
const toturial = document.querySelector(".toturial")
setTimeout(displayNoneFadeScreen, 3000)

function displayNoneFadeScreen(){
fadeBox.style.display = "none"
toturial.style.display = "grid"
}
