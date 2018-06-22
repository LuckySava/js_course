export default class UIController {
    constructor() {
        this.inputCard = document.getElementById("card");
        this.inputName = document.getElementById("name");
        this.regkCard = /\d{4}-\d{4}-\d{4}-\d{4}/;

    }
    checkInput() {
        this.inputCard.addEventListener("change", function(){

            if(this.inputCard.value.exec(regCard)) {
                this.input.style.background = "lightgreen"
            } else {
                this.input.style.background = "red"
            }
        })
    }
    checkCard() {
        this.inputName.onchange = function() {
            
        }
    }
}
