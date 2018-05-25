// Part 1

function itsMe(a) {
	console.log("It's me, " + a);
	return ("It's me, " + a)
};

itsMe('mario')

// Part 2

function compare(a, b){

	if (typeof a !== "number" || typeof b !== "number" ) {
		return console.log("НЕ ЧИСЛО");
	}
	else if (a > b) {
		return console.log((`${a} > ${b}`));
	} else if (a < b) {
		return console.log((`${a} < ${b}`));
	} else if (a == b) {
		return console.log((`${a} = ${b}`));
	}
};

let i = compare(2, "5");

// Part 3


function row(a, b, c, sign) {
	let finish;
	let arr = [];
 	for(let i = 0; i < arguments.length - 1; i++){
 	arr.push(arguments[i]);
 	}
 	switch(sign){
 		case ("<"):
 		arr.sort();
 		finish = arr.join(" < ");
 		break;

 		case (">"):
 		arr.sort().reverse();
 		finish = arr.join(" > ");
 		break;
 	}
 	console.log(finish)
 };
 
 	
// Part 4

function fact(n) {
	if (n == 0) {
		return 1;
	} else if (n > 0){
		return n * fact(n - 1);
	}
};
console.log(fact(4));


// Part 5

function matrixDiff(arr1, arr2){
	for(let i = 0; i < arr1.length; i++){

	}
};



// Написать функцию “matrixDiff”, которая принимает 2 аргумента, каждый из аргументов
// это массив массивов чисел.

// Она должна вернуть сумму абсолютных разниц соответствующих элементов этих
// структур. И должна вернуть NaN, если размеры массивов не совпадают.

// Пример:

// matrixDiff(

// [[2, 3], [4, 5]],

// [[2, 1], [6, 5]],

// ); // вернет 4, так как |3 - 1| + |4 - 6| = 4

// matrixDiff([[2, 3], [4, 5]],[[2, 1], [6]]); // вернет NaN

// Максимальное количество баллов: 8