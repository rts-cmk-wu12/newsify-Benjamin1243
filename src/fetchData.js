const API_URL= "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key="
const API_KEY="AXAA6Yvl8V1YDmzTnRA7GG9jFghRChlF" 
export async function fetchNews() {
    const response = await fetch(API_URL + API_KEY)

    if (!response.ok){
        console.log(response.statusText)
    }
    const data = await response.json()
    return data
    
    
}

