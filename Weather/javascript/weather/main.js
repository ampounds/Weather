const searchName = document.getElementById('city');
const submitBtn = document.getElementById('form');
const pName = document.getElementById("city-name");
const pCondition = document.getElementById("condition");
const pC = document.getElementById("city-C");

submitBtn.addEventListener("submit",()=>{
    if(searchName.value!==""){
        getWeather(searchName.value);
        searchName.value = '';
    }
});

async function getWeather(city){
    try {
        pName.textContent = "Loading..."
        pCondition.textContent = '';
        pC.textContent = '';
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=11a1aac6bc7d01ea13f0d2a8e78c227e",{mode:'cors'});
        const cityInfo = await response.json();
        pName.textContent = cityInfo.name+" | "+cityInfo.sys.country;
        pCondition.textContent = cityInfo.weather[0].main;
        pC.textContent = Math.round((cityInfo.main.temp - 273.15)*10)/10 + "°";
        console.log(cityInfo);
    } catch(error) {
        pName.textContent = "City not found";
        pCondition.textContent = "Try again"
    }
};

getWeather("Madrid");

