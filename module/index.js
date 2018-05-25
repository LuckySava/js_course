// .............................Part 1

function itsMe(a) {
	console.log("It's me, " + a);
	return ("It's me, " + a)
};

itsMe('mario')

// ............................Part 2

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

// ............................Part 3


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
 
 	
// .............................Part 4

function fact(n) {
	if (n == 0) {
		return 1;
	} else if (n > 0){
		return n * fact(n - 1);
	}
};
console.log(fact(4));


// ............................Part 5

function matrixDiff(array1, array2){
	for(let i = 0; i < array1.length; i++){
		// console.log(arr1[i]);
		for(let j = 0; j < array1[i].length; j++){
			// console.log(array1[i][j]);
			// console.log(array1.length)

			if(array1[i].length != array2[i].length) {
				return NaN;

				// !!! Вот тут, после этого я потерялся, не пойму что делать

				let res1 = array1[i][j];
				let res2 = array1[i][j];

				let result = [];
				result = Math.abs(rest1 - rest2);
			}


		}
	} return
};

// matrixDiff(

// [[2,3, 3], [4, 5]],

// [[2, 1], [6, 5]],

// );

// ...........................Part 6

