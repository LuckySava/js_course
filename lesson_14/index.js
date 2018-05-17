// БЕССОВЕСТНО СПИСАЛ У КОЛЛЕГИ ЛЮДМИЛЫ!!!

// ПОЗОР МНЕ!!!

// ИСПРАВЛЮСЬ И РАЗБЕРУСЬ!!!!!

function add( emoji = '❤🇺🇦'){
 
	if( emoji === ''){
		emoji = '❤🇺🇦';
	}
		let sum = 0;
	 //console.log(emoji);
	 for (var i = 0; i < emoji.length; i++){
	 	sum += emoji.charCodeAt(i) ;
	 }
	 let average = sum / (emoji.length/2);
	 
	
	return average;
}


function clearNumbers(array) {
	let sum = 0;
	
	for (let x = 0; x < array.length; x++) {

		for (let y = array[x].length-1; y >=0 ; y-- ){
		
			if (Object.prototype.toString.call(array[x][y]) !== '[object Number]') {

				//console.log(y + " - "+ array[x][y]);
				 array[x].splice(y,1);
			 }
		}
	}
	
	return array;
}

function revers(rev) {
    var arr = [];
    
    for (var i = 0; i < arguments.length; i++) {
        arr.push(arguments[i].split("").reverse().join(""));
    }
	
    return arr;
}


function splitArray(arr, c)
{
	var newarr = [];

	while(arr.length) {
    newarr.push(arr.splice(0, c));
}
	return newarr;
}
