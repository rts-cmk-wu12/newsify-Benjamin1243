const{ShowNextStep} = require("./toturial.js")
//jeg starter med at instiancere min class
clssTest = new ShowNextStep
describe("disse testes skal køre min toturial function", () => {
    test("dette tester at status starter på nul", ()=>{
        expect(clssTest.status).toBe(0)
    }),
    test("Dette tester nextStep funktionen i min class", ()=>{
        expect(clssTest.nextStep()).toEqual(["Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!", "Become a Savvy Global Citizen.", "./images/Onboarding3.png"])
    }),
    test("dette tester at status ændrer sig og bliver", ()=>{
        expect(clssTest.status).toBe(1)
})
})