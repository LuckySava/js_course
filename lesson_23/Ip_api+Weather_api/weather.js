export default class Weather {
    constructor() {
        this.key = "c25457835732d3353ae482e90075b994"
    }
    getWeather(city) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.key}`)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                throw new Error(res.status);
            }
        })
    }
}