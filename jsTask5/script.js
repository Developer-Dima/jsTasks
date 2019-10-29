function check(){
	var value = document.getElementById('val').value;	
	var reverse = [];
	var counter = value.length;
	value = value.split("");
	for (var i = value.length - 1; i >= 0; i--) {
		reverse[reverse.length] = value[i];
		counter++;
	}
	console.log(reverse)
}