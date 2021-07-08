/* La funzione Saluto utilizza l'oggetto Date
e mostra un messaggio di saluto con l'orario attuale */
function Saluto() {
	let now = new Date();
	let h = now.getHours();
	let m = now.getMinutes();
	let s = now.getSeconds();
	console.log("Salve, sono le ore " + h + ':' + m + ':' + s)
}

/* La funzione Saluto2, come Saluto mostra un messaggio con l'orario,
ma viene personalizzato con un nome accettato come parametro */
function Saluto2(nome) {
	let now = new Date();
	let h = now.getHours();
	let m = now.getMinutes();
	let s = now.getSeconds();
	console.log("Salve " + nome + ", sono le ore " + h + ':' + m + ':' + s)
}

/* La funzione AreaTriangolo accetta come parametri la base e l'altezza
di un triangolo, ne calcola l'area e ne restituisce il valore */
function AreaTriangolo(base, altezza) {
	let a = base * altezza / 2;
	return a;
}

/* Chiamata alla funzione Saluto */
Saluto();

/* Due esempi di chiamata alla funzione Saluto2 */
Saluto2('Paolo'); // Stampa in console.log "Salve Paolo, sono le ore ..."
Saluto2('Mario');

let x = 10;
let y = 8;

/* Esempio di chiamata alla funzione AreaTriangolo, alla quale vengono passati 
x e y come base e altezza */
let z = AreaTriangolo(x,y); // z contiene l'area del triangolo di base 10 e altezza 8

console.log(AreaTriangolo)



