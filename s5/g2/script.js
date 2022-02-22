//Esempio cilco
/*var weekend = "Sabato";
    switch(weekend){
        case 'Venerdì': 
            console.log('questo è il caso 0'); //false
            break;
        case 'Sabato': 
            console.log('questo è il caso 1'); //true
            break;
        case 'Domenica': 
            console.log('questo è il caso 2'); //false
            break;
    default: console.log('questo è il caso default') //mostra il default
}

//Switch, case, break, default
let mesi = "Agosto";
switch(mesi){
    case 'Gennaio':
        console.log(1)
    break;
    case 'Febbraio':
        console.log(2)
    break;
    case 'Marzo':
        console.log(3)
    break;
    case 'Aprile':
        console.log(4)
    break;
    case 'Maggio':
        console.log(5)
    break;
    case 'Giugno':
        console.log(6)
    break;
    case 'Luglio':
        console.log(7)
    break;
    case 'Agosto':
        console.log(8)
    break;
    case 'Settembre':
        console.log(9)
    break;
    case 'Ottobre':
        console.log(10)
    break;
    case 'Novembre':
        console.log(11)
    break;
    case 'Dicembre':
        console.log(12)
    break;


    default: console.log('Scegli un mese');
}

//While
let y = 0;
while(y < 10){ //mostra tutti i numeri minori di 10 escluso il 10
    console.log(y);
    y++ //blocca il loop

}

//Do
let x = 10;
do{
    console.log(x);
    x-- //blocca il loop
}

while(x >= 0){ //mostra tutti i numeri minori di 10 escluso il 10
}*/

//For each & map
/*let testo = "";
let serie = [2,4,7,4,5];
console.log(serie);

serie.forEach(aggiungi); //per aggiungere il primo e unico array usi forEach
document.getElementById('test').innerHTML = testo;

function aggiungi (valore){
   //return valore +2;
   testo += valore + 2 + '<br>';
}

let serie1 = [2,4,7,4,5];
console.log(serie1);

serie.map(aggiungi); //per aggiungere un secondo array usi map
document.getElementById('test').innerHTML = serie1;

function aggiungi (valore){
   return valore +2;
   //testo += valore + 2 + '<br>';
}



//filter
let stringa = [134, 178, 348, 1200, 38489, 2];
let stringa2 = stringa.filter(arrayFilter);

document.getElementById('test').innerHTML = stringa;

function arrayFilter (valo){
    return valo < 5000;
}*/


//some, evry, indexOf
/*var numeri1 =[2,33,4,7,67,5]
var ricerca = numeri1.some(funzione);

document.getElementById('test').innerHTML = ricerca;

function funzione(val){
    return val > 10;
}*/


//Ciclo for
let testo = '';
let pet = ['gatto', 'coniglio', 'cane', 'criceto'];

for(let i = 0; i < pet.length; i++){
    testo += pet[i] +'<br>';
}

document.getElementById('h3').innerHTML = testo;


// for in
let text = '';
let fiori = ['rosa', 'tulipano', 'margherita'];

for(fiore in fiori){
    text += fiori[fiore] + '<br>';
}

document.getElementById('test1').innerHTML = text;

// for of
let v = '';
let nomi = ['Zyber'];

for(nome of nomi){
    v += nome +'<br>'
}
document.getElementById('test').innerHTML = v;