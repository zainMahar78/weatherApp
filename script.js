const input = document.getElementById("input");
const btn = document.getElementById("searchBtn");
const divToDisplayTemp = document.getElementById("divToDisplayTemp");
btn.addEventListener("click", showTemp);
function showTemp(){

    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=a7206100fc1c785dbd84874cc0d6ba57`;
    let tempInC;
    fetch(Url).then((response)=>{
        
        return response.json()
    }).then(data => {
        const img = Image(data.weather[0].icon)
        console.log(data);
         tempInC = Math.round(data.main.temp - 273.15);
        console.log(data.weather[0].icon);
        // divToDisplayTemp.innerText = "";
        divToDisplayTemp.innerText =`Temperature: ${tempInC}`;
    
    }).catch(err => console.log(err));

    

}