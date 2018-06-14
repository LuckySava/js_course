export default class Weather {
    constructor() {
        this.key = "c25457835732d3353ae482e90075b994"
    }
    receiveWeather (City = "Poltava") {
        return fetch (`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${this.key}`)
            .then(res => {
                if(res.status === 200) {
                    return res.json()
                } else {
                    return Promise.reject(res.status)
                }
            })
    }

    setupWeather (info) {
        let city = document.querySelector("#city"),
            icon = document.querySelector("#icon"),
            weatheTitle = document.querySelector(".weather_title"),
            temp = document.querySelector(".temper");
        
        this.temp.innerHTML = info.main.temp;
        this.weatheTitle.innerHTML = info.weather.description;
        this.icon.src = `http://openweathermap.org/img/w/${info.weather.icon}.png`
        this.city.innerHTML = info.sys.country

    }

}