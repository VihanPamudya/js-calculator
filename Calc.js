function clearAll() {
	document.getElementById("result").innerHTML = "0";
}

function removeZero() {
	var value = document.getElementById("result").innerHTML;
	if (value == "0") {
		value = " "
		document.getElementById("result").innerHTML = value;
	}
}

function fordisplay(value) {
	removeZero()
		document.getElementById("result").innerHTML += value;
}

function equal() {
	removeZero()
	var equation = document.getElementById("result").innerHTML;
	var answer = eval(equation);
	document.getElementById("result").innerHTML = answer;
}

function backspace() {
	let current = result.innerHTML;
	result.innerHTML = current.slice(0, -1);
	if (result.innerHTML.length <= 1) {
		result.innerHTML = "0";
	}
}
