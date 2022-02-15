//esempio var/let e const
var nome = "Zyber";
{
    let nome = "Massimo";
    console.log(nome); //in questo caso nel terminale appare "massimo" perchè è posizionato in maniera corretta
    let cognome = "Ranieri";
    console.log(cognome); //in questo caso nel terminale appare "ranieri" perchè è posizionato in maniera corretta
}
console.log(nome); //In questo caso nella console appare il nome di var ma non di let
console.log(cognome); //in questo caso non appare perchè cognome è un elemento blocco


const nome1 = "zyber";
console.log(nome1);
const nome2 = "zyber";
console.log(nome2);


//esempio booleano
var nome = "Zyber"; //stringa
var anni = 20; //dato numerico
var importo = 34.56; //dato numerico
var patente = true; //dato booleano
console.log(patente);

patente = "A";
console.log(patente);

patente = 23;
console.log(patente)

console.log(anni + importo);

//Esempio con le spaziature e la somma di parole letterarie
var nome = "Zyber";
var cognome = "Pireci";
var nomeCognome = nome + " " + cognome;
console.log(nomeCognome);

//esempio di addizioni
var x = 20;
var y = 30;
var xy = x + y;
console.log(xy);

//esempio sottrazione
var s = 10;
var t = 5;
var st = s - t;
console.log(st);

//esempio moltiplicazione
var n = 20;
var m = 20;
var nm = n * m;
console.log(nm);

//esmpio divisione
var u = 20;
var o = 2;
var uo = u / o;
console.log(uo);

//esempio di paragoni valore
var f = 10;
var z = 1;
var fz = f==z;
console.log(fz); //il risultato sarà false


//esempio riassegnazione
var lettera = "antonio";
var lettera2 = "francesco"; 
var assegnazione = lettera = lettera2; //questo è un metodo di riassegnazione di un valore, nella cosnole apparirà "francesco"
console.log(lettera);

//esempi creativi di funzioni
function changeBkcolor(){
    document.getElementById('bod').style.backgroundColor= '#E52B50';
}
function changeBkcolor1(){
    document.getElementById('bod').style.backgroundColor= '#7FFFD4';
}
function changeFont(){
    document.getElementById('test').style.fontFamily= 'Impact,Charcoal,sans-serif';
}

