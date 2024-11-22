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
    
    const group = document.querySelector("."+elementname)
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



    
    newsArticle.appendChild(newsImage)
    newsArticle.appendChild(newsHeading)
    newsArticle.appendChild(newsText)
    group.appendChild(newsArticle)
    
    newsArticle.classList.add("newsArticle--displayNone")
    //her giver jeg en eventlistener til min section, så når man kilkker på den kommer man videre til den rigtige
    newsArticle.addEventListener("click", ()=>{
        window.open( element.url);
    })
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

