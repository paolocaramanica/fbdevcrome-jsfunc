// Inizia lo script: viene creato il global lexical environment

let f = function() {
	// Inizia l'esecuzione di f: viene creato il lexical environment relativo
	let a = 20;
	let b = 30;
	
	let g = function() {
		return a+b;
	}
	
	return g;
	// termina l'esecuzione di f: non viene eliminato il lexical environment poiché è referenziato da g
	// che continua ad esistere (viene infatti restituita e assegnata alla variabile fun)
}

let fun = f();

let x = fun();
console.log(x);