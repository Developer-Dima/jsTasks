function check(){
	var firstWord = document.getElementById('firstWord').value;	
	var secondWord = document.getElementById('secondWord').value;
	var firstArray = firstWord.split("")
	var secondArray = secondWord.split("")
	var letters = [];
	for (var i = 0; i < firstArray.length; i++) {
		for (var a = 0; a < secondArray.length; a++) {
				if (secondArray[a] === firstArray[i]) {
				letters.push(firstArray[i])
				delete secondArray[a];

					console.log(letters)


			}
		}
	}
	if (firstArray.length == secondArray.length & letters.length == secondArray.length) {
		console.log("аннаграмы")
	}
}