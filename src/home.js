import {fetchNews} from "./fetchData.js"
require("./styles/home.scss")


//her tager jeg fat i nogle html elementer
const allArticles= document.querySelector(".allArticles")
const data = await fetchNews()
const categories = []
const articles = data.results
console.log(articles)
//jeg kører et loop med alle og dataerne og indeler dem i kategorier
articles.forEach(element => {
   
    
    //stopper hvis kategorien allerede oprettet
    if(categories.includes(element.section)){
        
        addNewArticle(element.section, element)
        
        return 
    } 
    //her opretter jeg kategori diven
    categories.push(element.section)
   
    const articleDiv = document.createElement("article");
    const articleHeadingBox = document.createElement("div");
    const articleHeading = document.createElement("h2");
    const articleHeadingArrow = document.createElement("i");
    const articleHeadingImg = document .createElement("img")
    articleHeadingImg.setAttribute("src", "./images/newsify_logo2.png")
    articleHeadingArrow.classList.add("fa-solid", "fa-chevron-left");
    articleHeading.textContent = element.section.toUpperCase();
    //Hernede giver jeg classes til mine element
    articleDiv.classList.add("newsArticleBox");
    articleDiv.classList.add(element.section)
    articleHeadingBox.classList.add("newsArticleBox__headingbox");
    articleHeading.classList.add("newsArticleBox__heading");
    articleHeadingArrow.classList.add("newsArticleBox__arrow");
    articleHeadingImg.classList.add("newsArticleBox__image")

    //her giver jeg heading box, dens heading og pilen
    articleHeadingBox.appendChild(articleHeadingImg);
    articleHeadingBox.appendChild(articleHeading);
    
    articleHeadingBox.appendChild(articleHeadingArrow);
    articleDiv.appendChild(articleHeadingBox);
    
    allArticles.appendChild(articleDiv);
    //hernde adder jeg mine eventlisteners 
    articleHeadingArrow.addEventListener("click", dropNewsDown)
    addNewArticle(element.section, element)
    
});

function addNewArticle(elementname, element){
    const archiveIcon = document.createElement("i")
    const group = document.querySelector("."+elementname)
    const extraDiv = document.createElement("div")
    //først opretter jeg en sektion og derefter opretter jeg alle elementer der skal med i
    const newsArticle = document.createElement("section")
    const newsImage = document.createElement("img")
    const newsHeading = document.createElement("h3")
    const newsText = document.createElement("p")
    const imageLink =element.multimedia[0].url
    newsImage.setAttribute("src", imageLink)
    newsHeading.textContent = element.title
    const apiText =  element.abstract
    const shownText = apiText.split(" ")
    let showText = "" 
    for(let i = 1; i < 10;i++){
       showText = showText+ " " +shownText[i]
    }
    showText =showText + "..."
    
    newsText.textContent = showText
    
//her adder jeg classes
newsArticle.classList.add("newsArticle")
newsImage.classList.add("newsArticle__image")
newsHeading.classList.add("newsHeading__heading")
newsText.classList.add("newsHeading__text")
extraDiv.classList.add("newsArticleExtraDiv")
archiveIcon.classList.add("fa-regular")
archiveIcon.classList.add("fa-bookmark")
archiveIcon.classList.add("archiveArticle")


    
    newsArticle.appendChild(newsImage)
    extraDiv.appendChild(archiveIcon)
    archiveIcon.style.display = "none";
    newsArticle.appendChild(newsHeading)
    newsArticle.appendChild(newsText)
    extraDiv.appendChild(newsArticle)
    group.appendChild(extraDiv)
    
    newsArticle.classList.add("newsArticle--displayNone")
    //her giver jeg en eventlistener til min section, så når man kilkker på den kommer man videre til den rigtige
    // newsArticle.addEventListener("click", ()=>{
    //     window.open( element.url);
    // })
}


function dropNewsDown(){
    const articlesInside = this.parentElement.parentElement.querySelectorAll("section")
    const arrow = this.parentElement.querySelector("i")
    if(arrow.classList.contains("fa-chevron-left")){
        arrow.classList.remove("fa-chevron-left")
        console.log(arrow.classList)
        arrow.classList.add("fa-chevron-down" )
    }else{
        arrow.classList.remove("fa-chevron-down")
        arrow.classList.add("fa-solid","fa-chevron-left", "newsArticleBox__arrow" )

    }
    
    articlesInside.forEach(element =>{
        element.classList.toggle("newsArticle--displayNone")
    })
}


//Hernede laver jeg mit swipe event
let swipeElements = document.querySelectorAll(".newsArticle")

let startX = 0;
let startY = 0;
let isSwiping = false;

swipeElements.forEach( swipeElement =>{
    console.log(swipeElement)
    let startX 
    //denne eventlister kører når man lægger hånden på skærmen
swipeElement.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    //dette sætter to variable, hvad x var i starten, og hvad y var i staren 
    startX = touch.clientX;
    startY = touch.clientY;
    isSwiping = true;
});
 //denne kører men der swippes
swipeElement.addEventListener('touchmove', (e) => {
    //dette tager fat i pixels på x-aksen afhængint at hvor meget der scroles
    const touch = e.touches[0].clientX - 300;
    console.log(touch)
    //lige nu har jeg bare hardcoded valuesne, men det betyder bare at jeg begrænser swipen, så man ikke kan swipe elementet helt ud
    if(touch < -200 || touch >3){
        console.log("over")
        return
    }
    swipeElement.style.transform = "translate("+touch+"px)"
    //denne stopper functionen, hvis der ikke swippes
    if (!isSwiping) return;
    // Forhindrer standard scrolladfærd
    e.preventDefault();
});

swipeElement.addEventListener('touchend', (e) => {
    if (!isSwiping) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;

    // Vi tjekker kun for horizontal swipe til venstre
    //denne tjekker om swippet har ændret sig siden den startede
    if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
        console.log('Swipe left!');
    }

    // Nulstiller isSwiping efter swipe
    isSwiping = false;})
})

