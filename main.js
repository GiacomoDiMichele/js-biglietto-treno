
//chiedo quanti chilometri percorrerà il cliente
var chilometri = prompt('inserisci quanti chilometri percorrerai')
console.log (chilometri);

//chiedo quanti anni ha il cliente
var età = parseInt(prompt('inserisci qui la tua età'))
console.log(età);

var minorenne = 18;

var anziano = 65;

var price = 0.21 * 200;


if (età < minorenne) {
console.log('33,6€');

} else if (età > anziano) {
console.log('25,2€');

} else {
console.log('42');
}
