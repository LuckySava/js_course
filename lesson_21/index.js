import LocationApi from "./location_api.js";
import Dom from "./dom.js"

console.log("Проверка связи");



// >>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<

let myLocation = new LocationApi(),
    myResult = new Dom(),
    btn = document.getElementById("btn");


btn.addEventListener("click", () => {
    myResult.showPreloader();
    myLocation.getMyIp()
        .then(res => myLocation.getmyLocation(res.ip))
        .thin(res => myResult.setCoordinates(res))
        .then(res => myResult.hidePreloader())
});