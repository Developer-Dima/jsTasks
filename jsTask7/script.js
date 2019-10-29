function check(){
	var str = document.getElementById('str').value;	
	var aCounter = 0;
	var oCounter = 0;
	str = str.split(" ");
	for (var i = 0; i < str.length; i++) {
		check2(str[i])
	}
	function check2(a) {
		var a = a.split("")	
			if(a[a.length - 1] == /[^\w]*/){
			if (a[a.length - 2] == "o") {
				oCounter++	
			}
			}if ((a[0] == "a") || (a[0] == "A")) {
				aCounter++
			}if ((a[a.length - 1] == "o") || (a[a.length - 1] == "O")) {
				oCounter++
			}
	};
		console.log("количество а " + aCounter + " количество о " + oCounter);
}