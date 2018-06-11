import LocationApi from "./location_api.js";
import Dom from "./dom.js"

console.log("Проверка связи");



// >>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<

// ПРОВЕРИЛ уже десяток раз, не могу найти где именно ошибка, исходя из подсказки консоли.

let myLocation = new LocationApi(),
    myResult = new Dom(),
    btn = document.getElementById("btn");


btn.addEventListener("click", () => {
    myResult.showPreloader();
    myLocation.getMyIp()
        .then(res => myLocation.getMyLocation(res.ip))
        .then(res => myResult.setCoordinates(res))
        .then(res => myResult.hidePreloader())
});