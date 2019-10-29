function check(){
var tickets = document.getElementById('tickets').innerHTML;	
var tickets = tickets.match(/.{6}/g)
var g = 0;
var h = 0;
function count(b, c, d) {
	return Number(b) + Number(c) + Number(d);
}
function winLost(a) {
if (count(a[0], a[1], a[2]) == count(a[3], a[4], a[5])) {
	console.log(a.join("") + " ВЫИГРАШ");
	g++;
	h++;
}
else {
	console.log(a.join("") + " ПРОИГРАШ");
	h++;
}
}
for (var i = 0; i <= tickets.length; i++) {
	if (i<tickets.length) {
		winLost(tickets[i].split(""))
	}else{} 	
}

function procent() {
	console.log( "здесь " + g + " выиграшных билета и это " + Math.floor(g / h * 100) + "% от всех билетов" );
}
procent();
}





















/*
function check2(){
var val = document.getElementById("val").value;


val = val.split("");

function count(b, c, d) {
	return Number(b) + Number(c) + Number(d);
}
function winLost(a) {
if (count(a[0], a[1], a[2]) == count(a[3], a[4], a[5])) {
	console.log(a.join("") +" ВЫИГРАШ");
}
else {
	console.log(a.join("") + " ПРОИГРАШ");
}
}
winLost(val);
}*/
