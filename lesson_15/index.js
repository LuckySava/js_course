// Create tag "button", and insert into body

let btn = document.createElement("button");
btn.innerHTML = "Удалить";
btn.id = "btn1"



document.body.appendChild(btn);

let button = document.querySelector("btn");
console.log(btn);

// init({className: 'class', attributes: { 'data-name': 'Anatoliy' }, content: 'Some Text'}, 5);


function init(obj, n) {

	let ul = document.createElement("ul");
	let li = document.createElement("li");

	li.className = obj.className;
	li.innerHTML = obj.content;

	for(let atr in obj.attributes) {
	li.setAttribute(atr, obj.attributes[atr]);
};
	let body = document.body;
	body.appendChild(ul);

	for(let num = 0; num < n; n++) {
		ul.appendChild(li.cloneNode(true));
	};
};

function listen() {
	btn.addEventListener("click", function(){
		button.appendChild("ul");
	});
};