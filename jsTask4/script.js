var a = "2014-12-21T52:29:39";
var b = "1322-10-30T12:49:59";
	var answer = []; 
function check(){
	function splt(a) {
		arr3 = a.split("T")
		arr1 = arr3[0].split("-")
		arr2 = arr3[1].split(":")
		arr3 = arr1.concat(arr2);
		return arr3;		
	}
	function count(b) {
		c = Number(b[0] * 60 * 60 * 24 * 31 * 12) + Number(b[1] * 60 * 60 * 24 * 31) + Number(b[2] * 60 * 60 * 24) + Number(b[3] * 60 * 60) + Number(b[4] * 60) + Number(b[5]);
		return c;
	}

	var s = Number(count(splt(a))) - Number(count(splt(b)))

	function years (a) {
		var b = Math.floor(a / (60 * 60 * 24 * 31 * 12))
		answer.push(b)
		return a;
	}
	function month (a) {
		var b = Math.floor((s - answer[0] * 60 * 60 * 24 * 31 * 12) / (60 * 60 * 24 * 31))
		answer.push(b)
		return a;
	}
	function days (a) {
		var b = Math.floor((s - answer[0] * 60 * 60 * 24 * 31 * 12 - answer[1] * 60 * 60 * 24 * 31) / (60 * 60 * 24))
		answer.push(b)
		return a;
	}


	function hours (a) {
		var b = Math.floor((s - answer[0] * 60 * 60 * 24 * 31 * 12 - answer[1] * 60 * 60 * 24 * 31 - answer[2] * 60 * 60 * 24) / (60 * 60))
		answer.push(b)
		return a;
	}
	function minuts (a) {
		var b = Math.floor((s - answer[0] * 60 * 60 * 24 * 31 * 12 - answer[1] * 60 * 60 * 24 * 31 - answer[2] * 60 * 60 * 24 - answer[3] * 60 * 60) / (60))
		answer.push(b)
		return a;
	}


	function seconds (a) {
		var b = Math.floor((s - answer[0] * 60 * 60 * 24 * 31 * 12 - answer[1] * 60 * 60 * 24 * 31 - answer[2] * 60 * 60 * 24 - answer[3] * 60 * 60 - answer[4] * 60))
		answer.push(b)
		return a;
	}



	years(s)
	month(s)
	days(s)
	hours(s)
	minuts(s)
	seconds(s)
	console.log(answer)

}



















