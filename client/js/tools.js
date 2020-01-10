export function log(m) {
	console.log(m);
	var log = document.getElementById("log");
	if(log) log.innerHTML += m + "<br>";
}