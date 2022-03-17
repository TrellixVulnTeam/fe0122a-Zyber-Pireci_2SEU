//Creiamo la classe: Vestiti
class Vestiti { 
    id:number;//Proprietà della classe Vestiti
    codprod:number;//Proprietà della classe Vestiti
    collezione:string;//Proprietà della classe Vestiti
    capo:string;//Proprietà della classe Vestiti
    modello:number;//Proprietà della classe Vestiti
    quantita:number;//Proprietà della classe Vestiti
    colore:string;//Proprietà della classe Vestiti
    prezzoivaesclusa:number;//Proprietà della classe Vestiti
    prezzoivainclusa:number;//Proprietà della classe Vestiti
    disponibile:string;//Proprietà della classe Vestiti
    saldo:number;//Proprietà della classe Vestiti

    //Creiamo il constructor e inizializziamo le caratterisctiche dei capi
    constructor(id:number, codprod:number, collezione:string, capo:string, modello:number, quantita:number, colore:string, prezzoivaesclusa:number, prezzoivainclusa:number, disponibile:string, saldo:number){ //Creiamo il nostro costruttore
        this.id= id;
        this.codprod= codprod;
        this.collezione= collezione;
        this.capo= capo;
        this.modello= modello;
        this.quantita= quantita;
        this.colore= colore;
        this.prezzoivaesclusa= prezzoivaesclusa;
        this.prezzoivainclusa= prezzoivainclusa;
        this.disponibile= disponibile;
        this.saldo= saldo;
    }

    getacquistocapo(){ //Creiamo il metodo getacquistacapo()
        return this.capo +' '+ this.prezzoivainclusa+'€'
    } //Gli diciamo cosa riportare: in questo caso prendiamo il value di "capo" e lo concateniamo con il value ti "prezzoivainclusa"


    getsaldocapo(){ //Creiamo il metodo getsaldocapo()
        return this.capo + " in sconto: " +(this.prezzoivainclusa-((this.prezzoivainclusa / 100) * this.saldo))+"€";
    }//Gli diciamo cosa riportare in questo caso: il value di "capo" concatenato a (il value di "prezzoivainclusa" - ("prezzoivainclusa" - percentuale del value "saldo"))
        
}


//Istanza "cappello" della classe "Vestiti" con tutte le caratteristiche dei capi
let cappello = new Vestiti(6, 3452, "Estate", "Cappello", 3423, 10, "Arancione", 19.20, 23.42, "Online", 50)
console.log(cappello)
//console.log(cappello.getacquistocapo())//Se vogliamo mostrare solo il tipo di capo e il prezzo
console.log(cappello.getsaldocapo())// Mi mostra il tipo di capo e il prezzo scontato

//Istanza "camicia" della classe "Vestiti" con tutte le caratteristiche dei capi
let camicia = new Vestiti(7, 3872, "Estate", "Camicia", 4565, 7, "Bianca-Nera", 20, 24.40, "Negozio", 25)
console.log(camicia)
//console.log(camicia.getacquistocapo())//Se vogliamo mostrare solo il tipo di capo e il prezzo
console.log(camicia.getsaldocapo())// Mi mostra il tipo di capo e il prezzo scontato

//Istanza "sneakers" della classe "Vestiti" con tutte le caratteristiche dei capi
let sneakers = new Vestiti(8, 9472, "Estate", "Sneakers", 2084, 4, "Bianco", 112, 136.64, "Online", 10)
console.log(sneakers)
//console.log(sneakers.getacquistocapo())//Se vogliamo mostrare solo il tipo di capo e il prezzo
console.log(sneakers.getsaldocapo())// Mi mostra il tipo di capo e il prezzo scontato


//Fetch:
fetch('Abbigliamento.json') //Recuperiamo un file JSON
.then(result => result.json())//Qua ci veiene restituita una "promise", quindi per procedere dobbiamo estrarre il contenuto JSON (attraverso "json()") da tutta la rappresentazione dell'intera risposta HTTP contenuta all'interno dell'oggetto "response".
.then(data => {

    data.forEach((item: any) => {//Inizializziamo una ciclo "forEach" che prende tutte gli "item" di "data" e li assegna alla variabile "Abbigliamento"
        let Abbigliamento = new Vestiti(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoivaesclusa, item.prezzoivainclusa, item.disponibile, item.saldo)
        console.log(Abbigliamento)
        //console.log(Abbigliamento.getacquistocapo())//Mi mostra solo il tipo di capo e il prezzo
        console.log(Abbigliamento.getsaldocapo())// Mi mostra il tipo di capo e il prezzo scontato
    })
})



/*Scrivere un programma che descriva e inizializzi le caratteristiche dei capi di abbigliamento
attraverso il costructor.
Utilizzare i metodi getsaldocapo(per applicare il saldo da sottrarre all acquisto del capo alla cassa)
 e il metodo getacquistocapo(che riporterà il costo totale di tale capo).
Successivamente utilizzi fetch per recuperare i capi dal file Abbigliamento.json,
dove son presenti tutte le caratteristiche dei capi di abbigliamento.

è necessario mostrare in console le caratteristiche dei capi una volta ottenuta la risposta della funzione fetch.
Creare manualmente altre 3 istanze della classe creata precedentemente, scrivendo le caratteristiche dei capi a mano.
(vietato modificare il file Abbigliamento.json)*/ 