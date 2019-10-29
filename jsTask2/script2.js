var b;
var k;
var d;
var l;
var t;

var tensOfThouthands = ["", "десять тысячь", "двадцать тысячь", "тридцать тысячь", "сорок тысячь", "пятьдесят тысячь", "шестьдесят тысячь", "семьдесят тысячь", "восемьдесят тысячь", "девяносто тысячь"]
var thouthands = ["", "одна тысяча", "две тысячи", "три тысячи", "четыре тысячи", "пять тысячь", "шесть тысячь", "семь тысячь", "восемь тысячь", "девять тысячь"]
var hundreds = ["", "сто", "двести", "триста", "четыреста", "пятсот", "шестсот", "семьсот", "восемсот", "девятсот"];
var tens = ["", "десять", "двадцать", "тридцать", "сорок", "пятдесят", "шестдесят", "семдесят", "восемдесят", "девяносто"];
var shit = ["", "одинадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"]
var units = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
function check() {
	var number = document.getElementById('number').value;
	var text = document.getElementById('text');
	text.innerHTML = "";
	var number = number.split('');
	console.log(number)
	if (true) {}
	for (var i = 0; i < number.length; i++) {
		if (i == 0) {
			text.insertAdjacentText("afterBegin", units[number[number.length - 1]] + " ")
		}else if (i == 1) { 
			text.insertAdjacentText("afterBegin", tens[number[number.length - 2]] + " ")
		}else if (i == 2) { 
			text.insertAdjacentText("afterBegin", hundreds[number[number.length - 3]] + " ")
		}else if (i == 3) { 
			text.insertAdjacentText("afterBegin", thouthands[number[number.length - 4]] + " ")		
		}else if (i == 4) { 
			text.insertAdjacentText("afterBegin", tens[number[number.length - 5]] + " ")
		}else if (i == 5) { 
			text.insertAdjacentText("afterBegin", hundreds[number[number.length - 6]] + " ")
		}
}
}