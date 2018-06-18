 import Dom from "./dom.js";
 import LocationApi from "./location_ip.js";
 import Weather from "./weather.js";

 let location = new LocationApi();
 let dom = new Dom();
 let weather = new Weather();

 let btn = document.getElementById("btn")

 btn.addEventListener("click", function() {
    dom.showPreloader();
    location.getMyIp()
    .then(res => location.getMyLocation(res.ip))
    .then(res => {
        dom.setCoordinates(res)
        console.log(res.city)
        return weather.getWeather(res.city)
    })
    .then(res => {
        dom.hidePreloader();
        dom.setWeather(res);
    })
    .catch(rej => {
        dom.hidePreloader();
        console.log('Error: ', rej);
    })
 })

 weather.getWeather()


