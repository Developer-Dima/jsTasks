function check(){
	var number = document.getElementById('number').value;	
	var numberLength = document.getElementById('numberLength').value;
	text.innerHTML = "";
	text.insertAdjacentText("beforeEnd", number);
	number = number.split("");
	function counter(a, b) {
		return Number(a) - Number(b);
	}
	for (var i = 0; i < counter(numberLength, number.length); i++) {
		console.log(i)
		text.insertAdjacentText("beforeEnd", "e");
	}
}