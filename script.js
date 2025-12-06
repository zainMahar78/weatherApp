const input = document.getElementById("input");
const btn = document.getElementById("searchBtn");
const divToDisplayTemp = document.getElementById("divToDisplayTemp");
btn.addEventListener("click", showTemp);
function showTemp() {
    if (input.value === "") {
        divToDisplayTemp.innerHTML = "";
        const divForAlert = document.createElement("div");
        divForAlert.classList.add("alert", "alert-warning", "alert-dismissible", "fade", "show");
        divForAlert.role = "alert";
        divForAlert.id = "alert";
        divForAlert.innerHTML = `<strong>Holy guacamole!</strong> Enter the name of the city.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
`;
        divToDisplayTemp.appendChild(divForAlert);
        return;
    }
    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=a7206100fc1c785dbd84874cc0d6ba57`;
    let tempInC;
    fetch(Url).then((response) => {

        return response.json()
    }).then(data => {
        divToDisplayTemp.innerHTML = "";
        const divForCity = document.createElement("div");
        divForCity.innerHTML = `<p><b>${data.name}</b></p>`;
        divToDisplayTemp.appendChild(divForCity);
        const divForImg = document.createElement("div");
        divForImg.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
        divToDisplayTemp.appendChild(divForImg);
        tempInC = Math.round(data.main.temp - 273.15);
        const divForPara = document.createElement("div");
        divForPara.innerHTML = `        <p class="temp">Temperature: ${tempInC}&deg;C</p>`;
        divToDisplayTemp.appendChild(divForPara);
        console.log(data);
        console.log(data.name);
        console.log(data.weather[0].icon);


    }).catch(err => {
        console.log(err)
        divToDisplayTemp.innerHTML = "<p>City not found</p>";
    }
    );
}