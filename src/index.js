require("./styles/style.scss")
//requires billederne
require("./images/newsify_logo2.png")
require("./images/Onboarding2.png")
require("./images/Onboarding3.png")
require("./images/Onboarding4.png")
//dette er den scss fil, jeg har alle mine animationer i 
require('./styles/sanimations.scss');
//dette er alle mine scss variabler
require('./styles/variables.scss');
//Dette er min scss fil til forsiden
require('./styles/index.scss');

//når jeg bruger import er det fordi at det er js filer der indeholder funktioner og objekter der skal bruges direkte i denne js
//normalt når man bruger module.export og require er det fordi det går igennem node
//i  dette tilfælde, bruger jeg den også til test med jest, så jeg bruger require her
const  {ShowNextStep} = require("./toturial.js")

console.log("her")
//her kører funktionerne til forsiden
const fadeBox = document.querySelector(".splashScreen")
const toturial = document.querySelector(".toturial")
setTimeout(displayNoneFadeScreen, 3000)

function displayNoneFadeScreen(){
fadeBox.style.display = "none"
toturial.style.display = "grid"
}

//hernede kører jeg mine toturial funktioner
//først tager jeg fat i html elementerne jeg skal bruge
const textToturElement = document.querySelector(".toturial__text")
const imgToturElement = document.querySelector(".toturial__img")
const headingToturElement = document.querySelector(".toturial__heading")
//her tager jeg lige fat i min knap og giver den en eventlisterner
document.querySelector(".toturial__skipAndNextButton--next").addEventListener("click", toturialNext)
//her tager jeg fat i barsne så jeg kan ændre dem
const bars =  document.querySelectorAll(".toturial__statusButtons div")


console.log(bars)
console.log("ere")
//nu vil jeg instaciere min class
let torturial = new ShowNextStep
function toturialNext(){
let infoarray = torturial.nextStep()
if(torturial.status == 3){
    window.location.href = "auth.html"
}
textToturElement.textContent = infoarray[0]
headingToturElement.textContent = infoarray[1]
imgToturElement.setAttribute("src", infoarray[2] )
//tilføjer grøn styling til selected bar, og fjerner fra unselected
bars[torturial.status].classList.add("toturial__statusButton--selected")
bars[torturial.status -1].classList.remove("toturial__statusButton--selected")
console.log(bars[torturial.status])

}

// bars.forEach((element) =>{
//     element.addEventListener("click", nextStepFunctionOnClick)
// })


//denne kode virker ikke
// function toturialNext(status, id){
//     let infoarray = torturial.nextStepClick()
//     textToturElement.textContent = infoarray[0]
// headingToturElement.textContent = infoarray[1]
// console.log(id)
// imgToturElement.setAttribute("src", infoarray[2] )
// //tilføjer grøn styling til selected bar, og fjerner fra unselected
// bars[status].classList.add("toturial__statusButton--selected");
// bars[Number(id) -1].classList.remove("toturial__statusButton--selected")

// console.log(bars[torturial.status])
// }


// function nextStepFunctionOnClick(){
//     const id = this.getAttribute("id")
//     console.log(id)
//     let newStatus = Number(id) -1
//     console.log(torturial.status)
//     toturialNext(newStatus, id)

    
    
// }


