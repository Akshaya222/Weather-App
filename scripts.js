const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

const main=document.getElementById("main");
const search=document.getElementById("search");
const form=document.getElementById("form");

async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();
    console.log(respData);
    getWeatherToScreen(respData);
}
function KtoC(data){
    return(data.main.temp-273.15).toFixed(2);
}
//<h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temp}°C <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h2>
//<small>${data.weather[0].main}</small>
function getWeatherToScreen(location){
    const temp=KtoC(location);
    const tempDisplay=document.createElement("div");
    tempDisplay.classList.add("weather");
    tempDisplay.innerHTML=`<h2><img src="https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png"/>${temp}°C <img src="https://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png" /></h2>
    <small>${location.weather[0].main}</small> `
    main.innerHTML="";
    main.appendChild(tempDisplay);
}
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const location= search.value;
    if(location){
        getWeatherByLocation(location);
    }
    
});