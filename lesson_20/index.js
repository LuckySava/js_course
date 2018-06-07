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


// >>>>>>>>>>>>>>>>>>>>>>>>>          New Syntax        <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

