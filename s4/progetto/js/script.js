/*Questa funzione fa si che i numeri appaiono al click all'interno dell'imput*/ 
function task(tasto){
    let result = document.getElementById('display');
    let number = tasto.id; //Assegnando un id posso collegare ciò che l'utente vede e preme con i simboli numerici riconosciuti dalla macchina per poter svolgere le operazioni matematiche.
    result.value += number;
}

/*Con questa funzione ho assegnato al pulsante "C" l'abilità di cancellare  */
function resetCalculator(){
    let result = document.getElementById('display');
    result.value = ''; //L'atto di cancellazione non è altro che una stringa vuota mostrata all'interno dell'imput
}

/*Con questa funzione ho assegnato al pulsante "=" l'abilità di mostrare il risultato di un operazione matematica */
function total(){
    let result = document.getElementById('display');
    result.value = eval(result.value);
}


