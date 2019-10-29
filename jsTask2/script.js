var b, k, d, l;
var hundreds = ["", "сто", "двести", "триста", "четыреста", "пятсот", "шестсот", "семьсот", "восемсот", "девятсот"];
var tens = ["", "десять", "двадцать", "тридцать", "сорок", "пятдесят", "шестдесят", "семдесят", "восемдесят", "девяносто"];
var units = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
function check() {
	var number = document.getElementById('number').value;
	var text = document.getElementById('text');
	text.innerHTML = "";
	function divide(a) {
		return a.match(/.{1,3}/g);
	}
	function c(a) {

		if (a.length == 1) {
			b = units[a[0]]
		}else if (a.length == 2) {
			k = tens[a[0]]
			b = units[a[1]]
		}else if (a.length == 3) {
			d = hundreds[a[0]]
			k = tens[a[1]]
			b = units[a[2]]
		}
		l = a[2];
		return l;
	}

	if (divide(number).length == 1) {
		c(number)
		text.insertAdjacentText("afterBegin", k + " " + b);


	}else if (divide(number).length == 2) {
		c(divide(number)[1])
		text.insertAdjacentText("afterBegin", d + " " + k + " " + b + " ");
		c(divide(number)[0])
	if (l == 1) {
		text.insertAdjacentText("afterBegin", d + " " + k + " " + "одна" + " тысяча ");
	}else if (l == 2) {
		text.insertAdjacentText("afterBegin", d + " " + k + " " + "две" + " тысячи ");
	}else if (l < 5) {
		text.insertAdjacentText("afterBegin", d + " " + k + " " + b + " тысячи ");
	}else if (l < 9) {
		text.insertAdjacentText("afterBegin", d + " " + k + " " + b + " тысячь ");
	}



	}else if (divide(number).length == 3) {
		c(divide(number)[2])
		text.insertAdjacentText("afterBegin", d + " " + k + " " + b + " ");
		c(divide(number)[1])
	if (l == 1) {
		text.insertAdjacentText("afterBegin", d + " " + k + " " + "одна" + " тысяча ");
	}else if (l == 2) {
		text.insertAdjacentText("afterBegin", d + " " + k + " " + "две" + " тысячи ");
	}else if (l < 5) {
		text.insertAdjacentText("afterBegin", d + " " + k + " " + b + " тысячи ");
	}else if (l < 9) {
		text.insertAdjacentText("afterBegin", d + " " + k + " " + b + " тысячь ");
	}
	c(divide(number)[0])
	if (l == 1) {
		text.insertAdjacentText("afterBegin", d + " " + k + " " + "один" + " милион ");
	}else if (l < 5) {
		text.insertAdjacentText("afterBegin", d + " " + k + " " + b + " миллона ");
	}else if (l < 9) {
		text.insertAdjacentText("afterBegin", d + " " + k + " " + b + " миллионов ");
	}
	}

}
