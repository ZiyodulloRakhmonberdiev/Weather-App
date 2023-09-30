const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=",
    apiKey = "cf75f18af860230d8ee7c926c04aac33",
    searchBox = document.querySelector('.search input'),
    search = document.querySelector('.search'),
    searchBTn = document.querySelector('.search button'),
    weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
        const res = await fetch(apiUrl + city + `&appid=${apiKey}`)
        var data = await res.json()
        console.log(data)

        document.querySelector('.city').innerText = data.name;
        document.querySelector('.temp').innerText = Math.round(data?.main?.temp) + "°C";
        document.querySelector('.humidity').innerText = data.main.humidity + "%";
        document.querySelector('.wind').innerText = data.wind.speed + "km/h"; 
        
        if(data.weather[0]?.main == "Clouds"){
            weatherIcon.src = "./images/clouds.png";
        } else if(data.weather[0]?.main == "Clear"){
            weatherIcon.src = "./images/clear.png";
        } else if(data.weather[0]?.main == "Rain"){
            weatherIcon.src = "./images/rain.png";
        } else if(data.weather[0]?.main == "Drizzle"){
            weatherIcon.src = "./images/drizzle.png";
        } else if(data.weather[0]?.main == "Mist"){
            weatherIcon.src = "./images/mist.png";
        } else if(data.weather[0]?.main == "Snow"){
            weatherIcon.src = "./images/snow.png";
        } else {
            weatherIcon.src = "./images/sun.png";
        }

        document.querySelector('.weather').style.display = "block";
    }

    searchBTn.addEventListener('click', () => {
        checkWeather(searchBox?.value);
    })

    search.addEventListener('submit', (e) => {
            e.preventDefault();
            checkWeather(searchBox?.value);
    })