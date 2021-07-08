

/* Definizione di una funzione tramite una function expression */
let f = function() {
	alert('Ciao');
}

/* Tale definizione è equivalente alla seguente (function declaration)
function f() {
	alert('Ciao');
}*/

// Chiamata della funzione f
f();

/* funzione che ritorna una stringa costante */
let g = function() {
	return 'Ciao ';
}

// Mostra in console il valore ritornato dalla funzione g
console.log(g());

// Mostra in console la funzione g stessa, non il valore che ritorna in seguito all'esecuzione
console.log(g);


// Definiamo alcune funzioni
let somma = function(a,b) {
	return a+b;
}

let differenza = function(a,b) {
	return a-b;
}

let prodotto = function(a,b) {
	return a*b;
}

// Definiamo una funzione che prende come argomento un'altra funzione
let eseguiOperazione = function(operando1, operando2, operazione) {
	return operazione(operando1, operando2);
}

x = 19;
y = 20;

prod = eseguiOperazione(x,y,prodotto);

console.log(prod);

// Definiamo una funzione che restituisce un'altra funzione
let moltiplicatore = function(t) {
	/* Nel body della funzione viene definita una funzione f, che prende come argomento un numero
	   e lo restituisce moltiplicato per t, parametro passato alla funzione genitore */
	let f = function(numero) {
		return numero*t;
	}
	return f;
}

// Creiamo, con la funzione moltiplicatore, una funzione che prende un numero e lo restituisce moltiplicato per 2
let per2 = moltiplicatore(2);

// In modo analogo, una che lo moltiplica per 8
let per8 = moltiplicatore(8);

// Esempio di chiamata di per2
console.log(per2(45));

/* definiamo una nuova funzione sum come arrow function
Stessa funzione definita tramite le function expression: let sum = function(a,b) = {return a+b } */
let sum = (a,b) => a+b;

console.log(sum(4,5));
