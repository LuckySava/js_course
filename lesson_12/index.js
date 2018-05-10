
const arr1 = [1, 13, -3, 0];
let sum = 0;

for (i = 0; i < arr1.length; sum += arr1[i++]); {

	console.log(sum);
	console.log(sum / arr1.length);

	let min = Math.min.apply(null, arr1);
	console.log(min);

	let max = Math.max.apply(null, arr1);
	console.log(max);
};

const obj1 = { from: 1, to: 4, value: [4, 5, 12, 7, 5, 4], ignore: [2] };

let array1 = obj1["value"];
let finishArray = [];
let disable = obj1["ignore"];

for (i = obj1["from"]; i <= obj1["to"]; i++) {
	if (disable.includes(i) == true) continue;
	finishArray.push(array1[i]);
};
console.log(finishArray.join(', '));


// const obj1 = { from: 1, to: 4, value: [4, 5, 12, 7, 5, 4], ignore: [2] };

// let array1 = obj1["value"];
// let finishArray = [];

// for (i = obj1["from"]; i <= obj1["to"]; i++) {
// 	if (i == obj1['ignore']) continue;
// 	finishArray.push(array1[i]);
// };
// console.log(finishArray.join(', '));