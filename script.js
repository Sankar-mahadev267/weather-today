const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "75e0b78884a7a8a09995c9894b515f88";
document.querySelector(".correct").style.display="none";
document.querySelector(".error").style.display="none";

document.querySelector(".search button").onclick=async ()=>{
    const city = document.querySelector(".search input");
    const response = await fetch(apiUrl + city.value + `&appid=${apiKey}`);
    var data = await response.json();
    if(data.cod == 404){
        document.querySelector(".error").style.display='block';
        document.querySelector(".correct").style.display="none";

    }
    else{
        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + " °c";
        document.querySelector(".speed").innerHTML= data.wind.speed +" km/h";
        document.querySelector(".percent").innerHTML= data.main.humidity +"%";
        const icon=document.querySelector(".icon");
        if(data.weather[0].main == "Clouds"){
            icon.src="cloudy.webp";
        }
        else if(data.weather[0].main == "Clear"){
            icon.src="clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            icon.src="rainy.webp";
        }
        else if(data.weather[0].main == "Mist"){
            icon.src="mist.webp";
        }
        else if(data.weather[0].main == "Drizzle"){
            icon.src="drizzle.webp";
        }

        document.querySelector(".correct").style.display="block";
        document.querySelector(".error").style.display="none";
    }
        
}
