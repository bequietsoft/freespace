export function log(m) {
	m = performance.now() + "\t" + m;
	console.log(m);
	var log = document.getElementById("log");
	if(log) log.innerHTML += m + "<br>";
}