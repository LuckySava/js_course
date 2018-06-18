export default class Dom {
    constructor() {
            this.load = document.querySelector("#preloader");
            this.city = document.querySelector("#field1");
            this.country = document.querySelector("#field2");
            this.lat = document.querySelector("#field3");
            this.long = document.querySelector("#field4");
            this.city2 = document.querySelector(".city");
            this.temp = document.querySelector(".temper");
            this.icon = document.querySelector("#img_icon");
            this.btn2 = document.querySelector("#btn2");

    }
    showPreloader() {
        this.load.style.opacity = "1";
    }
    hidePreloader() {
        this.load.style.opacity = "0";
    }
    setCoordinates(key) {
        this.city.value = key.city;
        this.country.value = key.country_name;
        this.lat.value = key.latitude;
        this.long.value = key.longitude;
    }
    setWeather(data) {
        this.city2.value = data.name;
        this.temp.innerHTML = Math.round(data.main.temp - 273.15) + "&#8451;"
        this.icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    }
}