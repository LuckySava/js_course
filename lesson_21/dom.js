class Dom {
    constructor() {
        let firstField = document.querySelector("field1"),
            secondField = document.querySelector("field2"),
            thirdField = document.querySelector("field3"),
            forthField = document.querySelector("field4"),
            preload = document.querySelector("preload");
    }
    showPreloader() {
        preload = document.querySelector("preload").classList.add("preloading");
    }
    hidePreloader() {

    }
}