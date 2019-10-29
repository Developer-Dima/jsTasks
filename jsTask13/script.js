function check(){
	var s = 0;
	var firstCounter = 0;
	var secondCounter = 1;
	while (s < 101) {	
		if (s < 100) {
			console.log(s)
		}
		s = firstCounter + secondCounter;
		firstCounter = secondCounter
		secondCounter = s;
	}
}