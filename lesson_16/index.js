// Добавляем n - количеств цифр
// Делаю таймер и добавляем в код


const n = 12;
const speedOftimer = 1000;

let number = document.getElementById("number");

for (let i = 1; i <= n; i++) {

	let span = document.createElement("span");
	span.setAttribute("id", `span_${i}`);

	span.appendChild(document.createTextNode(i));
	
	number.insertBefore(span, number.children[i]);


	let space = document.createTextNode(", ");
 	if(i > 1) {
 		number.insertBefore(space, number.children[i]);	
 	}
};

// Делаем интервал

let num = 0;
let sec = document.getElementById("sec");
sec.innerHTML = num;
let inter;

function interval() {
	inter = setInterval(function(){
		num++;
		sec.innerHTML = num;
	}, speedOftimer)
};

// Устанавливает события на кнопки СТОП ПАУЗА СТАРТ

let start = document.getElementById("start");
start.addEventListener("click", interval);


let pause = document.getElementById("pause");
pause.addEventListener("click", function() {
	clearInterval(inter);
});

let stop = document.getElementById("stop");
stop.addEventListener("click", function() {
	clearInterval(inter)
	num = 0;
	sec.innerHTML = 0;
});

// Добавляем события на кнопки ускорения

let speed1 = document.getElementById("speed1");
let speed2 = document.getElementById("speed2");
let speed3 = document.getElementById("speed3");

speed1.addEventListener("click", function(){
	inter = setInterval(function(){
		num++
		sec.innerHTML = num;
		speed1.setAttribute("disabled", true)
	})
}, speedOftimer);

speed2.addEventListener("click", function(){
	inter = setInterval(function(){
		num++
		sec.innerHTML = num;
		speed2.setAttribute("disabled", true)
	})
}, speedOftimer / 2);

speed3.addEventListener("click", function(){
	inter = setInterval(function(){
		num++
		sec.innerHTML = num;
		speed3.setAttribute("disabled", true)
	})
}, speedOftimer / 3);