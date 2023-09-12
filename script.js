const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=cf75f18af860230d8ee7c926c04aac33",
    apiKey = "cf75f18af860230d8ee7c926c04aac33";

async function checkWeather(){
        const res = await fetch(apiUrl + `&appid=${apiKey}`)
        var data = await res.json()
        console.log(data)
    }
