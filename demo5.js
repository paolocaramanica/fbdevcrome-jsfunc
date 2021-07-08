// Inizia lo script: viene creato il global lexical environment

let CreateCounter = function() {
	// Inizia l'esecuzione di f: viene creato il lexical environment relativo
	let c = 0;
	
	let counter = function() {
		return c++;
	}
	
	return counter;
	// termina l'esecuzione di CreateCounter: non viene eliminato il lexical environment poiché è referenziato da counter
	// che continua ad esistere (viene infatti restituita e assegnata alla variabile fun)
}

let c1 = CreateCounter();

console.log(c1());
console.log(c1());
console.log(c1());

let c2 = CreateCounter();

console.log(c2());
console.log(c2());
console.log(c1());

