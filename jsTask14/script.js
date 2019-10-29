function check(){
	var s = "abcd abc asbc ade ade ade ade";
	var arrayWords = s.split(" ");
	var counter = 0;
	for (var i = 0; i < arrayWords.length; i++) {
		var arrayElements = arrayWords[i].split("")
		counter = counter + arrayElements.length;
		if (counter < 8) {
			answer.insertAdjacentHTML("beforeend", arrayWords[i] + " ");
		}else {
			answer.insertAdjacentHTML("beforeend", "<br />");
			counter = 0;
			i--;
		}

	}
}