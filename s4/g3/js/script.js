/*var anni = 17;

var accesso = (anni < 18) ? "non puoi entrare":"puoi entrare";
alert(accesso);

var anni = 20;

var ingresso = (anni < 18) ? "non puoi entrare":"puoi entrare";
alert(ingresso);*/

//Dovrai impostare una funzione che calcola un range di anni (puoi utilizzare una sottrazione)
function rangeAnni (){
    var annoAttuale = 2022;
    var annoNascita = 2001;
    function eta(){
        document.write(annoAttuale - annoNascita)
    }
    return eta();
}
rangeAnni();

//arrow function.
/*let nicole = () => "Non sono una ninja";
console.log(nicole());*/


//Funzione dentro una funzione
/*function operazioni(){
    var x = 10;

    function somma (){
        console.log(x * 2);
    }
    return somma();
}
operazioni();*/


//comparazione
/*var numero1 = 3;
var numero2 = numero1 + 2;

numero2 > numero1 //true
console.log(numero2 > numero1);
numero1 < numero2 //false
console.log(numero1> numero2);

numero2 > (numero1 + 10); //true
console.log(numero2 < (numero1 +10));
numero2 >= (numero1 + 2); //true
console.log(numero2 >= (numero1 +2));*/