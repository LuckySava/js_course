let a = 6;
let b = 2;
let operation = "pow";

switch (operation) {
	case "add":
	console.log(a + b);
	break;

	case "sub":
	console.log(a - b);
	break;

	case "mult":
	console.log(a * b);
	break;

	case "div":
	console.log(a / b);
	break;

	case "pow":
	console.log(Math.pow(a, b));
	break;

	default:
	console.log( "Please enter correct value" )
	break;


}
