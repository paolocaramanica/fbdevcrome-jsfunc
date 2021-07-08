// Inizia lo script: viene creato il global lexical environment
console.log('inizio esecuzione script');
let a = 10;

let f = function() {
	// Viene creato il lexical environment di f
	let b = 30;
	
	// funzione g definita all'interno di f...
	let g = function() {
		// Viene creato il lexical environment di g
		let c = 50;
		return a+b+c;
		// Viene eliminato il lexical environment di g
	}
	
	// ... ed eseguita sempre all'interno di f
	return g();
	
	console.log('fine esecuzione di f');
	// Viene eliminato il lexical environment di f
}

let val = f();
console.log(val);
console.log('fine esecuzione script');
// Fine script: viene eliminato il global lexical environment