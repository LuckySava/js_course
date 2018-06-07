// Создаем класс конструктор

function Human(name, age) {
    this.name = name;
    this.age = age;
};

// Добавляем "глобальный" метод классу конструктору

Human.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`)
};

// Создаем класс "потомок"

function AlevelStudent(name, age, marks) {
	Human.apply(this, arguments);
	this.marks = marks;

}

// Наследование вместе с прототипами

AlevelStudent.prototype = Object.create(Human.prototype);
AlevelStudent.prototype.constructor = AlevelStudent;


// Добавляем метод в "потомок"


AlevelStudent.prototype.averageMark = function(marks) {
	let sum = 0;
	let result = 0;
	for(let i = 0; i < marks.length; i++) {
		sum += marks[i];
	}
	return result = sum / marks.length;
};

