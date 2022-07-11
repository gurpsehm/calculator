function add (a, b) {
	console.log(a + b);
}

function subtract (a, b) {
	console.log(a - b);
}

function multiply (a, b) {
	console.log(a * b);
}

function divide (a, b) {
	if (b === 0) {
		console.log(`You can't divide by 0`);
	}
	else {
		console.log(a / b);
	}
}

add(36, 100);
subtract(21, 2);
multiply(10, 10);
divide(10, 2);
divide(12, 0);