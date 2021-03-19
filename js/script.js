var etaUtente = prompt("eta' utente:");
var chilometri = prompt("Chilometri da percorrere:");
var prezzoPerChilometro = 0.21;

var etaMinorenne = etaUtente < 18;
var etaOver = etaUtente > 65;

var prezzoTotale = chilometri * prezzoPerChilometro;
var prezzoMinorenne = Math.round(((prezzoPerChilometro * chilometri * 0.8) + Number.EPSILON) * 100) / 100;
var prezzoOver = Math.round(((prezzoPerChilometro * chilometri * 0.6) + Number.EPSILON) * 100) / 100;

console.log(prezzoTotale);

if (chilometri < 1) {
  alert("Inserire correttamente i chilometri da percorrere");
}

if (etaMinorenne) {
  alert(prezzoMinorenne);
} else if (etaOver) {
  alert(prezzoOver);
} else {
  alert(prezzoTotale);
}