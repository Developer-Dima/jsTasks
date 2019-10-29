function doit(){
	for (var i = 1; i < 10001; i++) {
		for (var a = 1; a < 10001; a++) {
			for (var x = 1; x < 10001; x++) {
				if (i * i == a * a + x * x) {
					var v = a * a;
					console.log(i + "=" + a + "+" + x);				
				}
			}
		}
	}
}