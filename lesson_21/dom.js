export default class Dom {
    constructor() {
        this.firstField = document.getElementById("field1"),
            this.secondField = document.getElementById("field2"),
            this.thirdField = document.getElementById("field3"),
            this.forthField = document.getElementById("field4"),
            this.preload = document.getElementById("preload");
    }
    showPreloader() {

        this.preload.classList.add("preloading");
    }
    hidePreloader() {

        setTimeout(() => {
            this.preload.classList.remove("preloading");
        }, 1000);

    }
    setCoordinates(coordinate) {
            this.firstField.value = coordinate.country_name;
            this.secondField.value = coordinate.city;
            this.thirdField.value = coordinate.longitude;
            this.forthField.value = coordinate.latitude;
    }
}