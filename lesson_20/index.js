// Создаем класс конструктор

function Human(data) {
    this.name = data.name;
    this.age = data.age;
};

// Добавляем "глобальный" метод классу конструктору

Human.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`)
};

// Создаем класс "потомок"

function AlevelStudent(data) {
	Human.apply(this, arguments);
	this.marks = data.marks;

}

// Наследование вместе с прототипами

AlevelStudent.prototype = Object.create(Human.prototype);
AlevelStudent.prototype.constructor = AlevelStudent;


// Добавляем метод в "потомок"


AlevelStudent.prototype.averageMark = function() {
	let sum = 0;
	let result = 0;
	for(let i = 0; i < this.marks.length; i++) {
		sum += this.marks[i];
	}
	return result = sum / this.marks.length;
};

// Создаем

let person = new Human({
	name: "Tolik",
	age: 83
});


let myProfile = new AlevelStudent({
	name: "Sashko",
	age: 31,
	marks: [4, 3, 5, 5, 4]
})


// >>>>>>>>>>>>>>>>>>>>>>>>>          New Syntax        <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


// class Human {
// 	constructor(data) {

// 		 this.name = data.name;
//    		 this.age = data.age;
// 	}
// 	sayHello() {
// 		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
// 	}
// };

// class AlevelStudent extends Human {
// 	constructor(data) {
// 		super(data);
// 		this.marks = data.marks
// 	}
// 	averageMark(){
// 	let sum = 0;
// 	let result = 0;
// 	for(let i = 0; i < this.marks.length; i++) {
// 		sum += this.marks[i];
// 	}
// 	return result = sum / this.marks.length;
// 	}
// };
