const moment = require('moment');
const result = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log( result );


// Рассчет Дня рождения


let results = 0,
    day = document.querySelector("#day").value,
    out = document.querySelector("out"),
    btn = document.querySelector("btn"),
    enterDate = moment(day, "DD MM"),
    today = moment(),

results = (enterDate.diff(today,'day'));

if (results < 0) {
    results = results + 365;
  };

btn.addEventListener("click", function {
  out.innerHTML = "results"
});

