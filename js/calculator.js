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

function operate (a, b, c) {
	if (c === '+') {
		return add(a, b);
	}
	else if (c === '-') {
		return subtract(a, b);
	}
	else if (c === '*') {
		return multiply(a, b);
	}
	else if (c === '/') {
		return divide(a, b);
	}
	else {
		return console.log(`You must enter a operator symbol (ex. +, -, *, /)`)
	}
}

add(36, 100);
subtract(21, 2);
multiply(10, 10);
divide(10, 2);
divide(12, 0);

operate(21, 2, '+');
operate(13, 3, '-');
operate(115, 7, '*');
operate(1, 0, '/');
operate(88, 4, '/');
operate(21, 0, 'hello');