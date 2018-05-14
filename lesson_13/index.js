function removeKeys1 (obj, arr) {
	for (let key in obj) {
		for (let jey in arr) {
			if (key == arr[jey]){
				delete obj[key];
			}
		};
	};
	return obj;
};

function removeKeys2 (obj1, arr1) {
	let newObj = {};
	for (let n in obj1) {
		newObj[n] = obj1[n];
	}

	for (let n in newObj) {
		for (let k in arr1) {
			if (n == arr1[k]) {
				delete newObj[n];
			};
		};
	};
	return newObj;
};

let absDiff = a =>b => Math.abs(a - b);