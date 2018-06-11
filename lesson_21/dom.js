export class Dom {
    constructor() {
        let firstField = document.querySelector("#field1"),
            secondField = document.querySelector("#field2"),
            thirdField = document.querySelector("#field3"),
            forthField = document.querySelector("#field4"),
            preload = document.querySelector("#preload");
    }
    showPreloader() {
        preload = document.querySelector("preload").classList.add("preloading");
    }
    hidePreloader() {
        preload = document.querySelector("preload").classList.remove("preloading");
    }
    setCoordinates(coordinate) {
            firstField.value = coordinate.country_name;
            secondField.value = coordinate.city;
            thirdField.value = coordinate.longitude;
            forthField.value = coordinate.latitude;
    }
}