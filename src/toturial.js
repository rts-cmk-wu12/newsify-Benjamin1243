 class ShowNextStep {
returnArray = []
status = 0
textes = ["Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.","Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!","Be part of our dynamic community and contribute your insights and participate in enriching conversations."]
headings = ["Stay Connected,Everywhere, Anytime", "Become a Savvy Global Citizen.", "Enhance your News Journey Now!"]
imgs = ["./images/Onboarding2.png","./images/Onboarding3.png", "./images/Onboarding4.png"]

nextStep(){
    this.returnArray = []
    this.status++
    this.returnArray.push(this.textes[this.status], this.headings[this.status], this.imgs[this.status])
return this.returnArray
 
}
nextStepClick(selfStatus){
    this.returnArray = []
    this.status == selfStatus
    this.returnArray.push(this.textes[this.status], this.headings[this.status], this.imgs[this.status])
    return this.returnArray
}

}

module.exports ={ShowNextStep}


