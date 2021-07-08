
let	libri = [
		{
			autore: 'David Allen',
			titolo: 'Detto, fatto!',
			descrizione: 'Il metodo GTD (Getting Things Done) che ha cambiato la vita e il modo di lavorare di milioni di persone in tutto il mondo'
		},
		{
			autore: 'Steven Jonhson',
			titolo: 'Dove nascono le grandi idee',
			descrizione: 'Storia naturale dell\'innovazione'
		},
		{
			autore: 'David Allen',
			titolo: 'Pronti a tutto',
			descrizione: '52 principi per la produttività'
		}
	];
	
let mostraDescrizione = function(descr) {
	alert('Descrizione del libro: ' + descr);
}
	
let	init = function() {
	for (let i in libri) {
		let row = $('<tr><td></td><td></td><td><button type="button">Descrizione</button></td></tr>');
		
		let titolo = libri[i].titolo;
		let autore = libri[i].autore;
		let descrizione = libri[i].descrizione;
		
		$(row).find("td:first-child").text(autore);
		$(row).find("td:nth-child(2)").text(titolo);
		
		$(row).find("button").on('click',function(){
			mostraDescrizione(descrizione);
		});
		
		$("table").append($(row))
	}
}

/*
let	init = function() {
	for (var i in libri) {
		var row = $('<tr><td></td><td></td><td><button type="button">Descrizione</button></td></tr>');
		
		var titolo = libri[i].titolo;
		var autore = libri[i].autore;
		var descrizione = libri[i].descrizione;
		
		$(row).find("td:first-child").text(autore);
		$(row).find("td:nth-child(2)").text(titolo);
		
		$(row).find("button").on('click',function(){
			mostraDescrizione(descrizione);
		});
		
		$("table").append($(row))
	}
} */
		
$(document).ready(init);