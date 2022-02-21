/*date*/
var date = new Date();
console.log(date);
document.write(date);

var dataCustom = new Date(2010, 7, 28); //anno, mese, giorno
document.write(dataCustom);
console.log(typeof(dataCustom)); //object

var dat = new Date(1979, 02, 26)
console.log(dat)
var pars = Date.parse(2022-01)
console.log(pars);

var millisecondi = new Date(1609459200000);
console.log('Millisecondi: ' + millisecondi);

var year = new Date();
var anno = year.getDay(); //ti indica in quale giorno della settimana ti trovi contando
console.log(anno)

year.setFullYear(2017) //imposti l'anno che vuoi o il giorno e ritorna nel tempo
console.log(year)


//metodi random
console.log(Math.floor(Math.random()*21)); //numeri random da 0 a 20

//metodi booleani

var numero = (20<4);
console.log(Boolean(numero)); //indica il risultato o vero o falso

var stringa = ('lettera' !== 'Lettera'); //true le due stringhe non sono uguali
console.log(Boolean(stringa));

//new Boolean
var n = false;
var nu = new Boolean(false);
console.log(typeof(n)) //il primo type of è un booleano
console.log(typeof(nu)) //questo invece è un object

console.log(Boolean(nu == n)); //true: sono due dati uguali
console.log(Boolean(nu === n)); //false: non sono identici


var maggiorenne = 18;
var minorenne1 = 19;
var minorenne = 17;

if(minorenne1 == maggiorenne || minorenne < maggiorenne ){
    alert('Non entrare pezzo di merda')
}else if(minorenne < maggiorenne){
    alert('Entra');
}else{
    alert ('non lo so')
}



