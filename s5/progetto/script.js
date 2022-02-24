//Creiamo una variabile bottone e andiamo ad agganciarci al button in HTML
let bottone = document.querySelector('#bottone');


//Cliccando il bottone scateniamo una serie di meccanismi
bottone.addEventListener('click' , function(){
    //Con queste due variabili "aggiunta" e "list" andiamo a selezionare e a leggere gli elementi all'interno dell'HTML
    let aggiunta = document.querySelector('#aggiunta').value;
    let list = document.querySelector('#list');

    //Crea Tag lista e aggiungici gli elementi al suo interno
    let li = document.createElement('li'); //crea elemento tag <li></li>
    li.innerHTML = aggiunta; //Aggiungi ciò che scrivi nell'imput all'interno del tag "li"
    li.classList.add('item');

    //Rimuovi con un click elementi della tua lista
    li.addEventListener('click', function(){
        li.remove()
        rimuoviElementodaDb(li);
    })

    //aggiungi elementi nuovi in prima posizione sulla tua lista
    list.prepend(li);
    //Si poteva usare anche "append" per aggiungere elementi nuovi in fondo alla lista
    
    salvaDatiNelDb(aggiunta);
})

function creaHTML(){
    var loStorage = localStorage.getItem('elementiSalvati');
    var dataBase = loStorage ? JSON.parse(loStorage) : [];

    dataBase.forEach(function(elemento){
        let li = document.createElement('li'); 
        li.innerHTML = elemento;

        li.addEventListener('click', function(){
            li.remove()
        })

        list.prepend(li)
    })
}
creaHTML();
 
 //con questa funzione salvo e aggiorno i dati in localstorage
 function salvaDatiNelDb(aggiunta){

    /*salvataggio dati*/
    
        /* versione estesa
        if( localStorage.getItem('elementiSalvati') == null ){
            var db = [aggiunta]
        }else{
        var db = JSON.parse(localStorage.getItem('elementiSalvati'))
        db.push(aggiunta)
    }
    */

    var ls = localStorage.getItem('elementiSalvati')
    
    var db = ls ? JSON.parse(ls) : []
    db.push(aggiunta)
    
    localStorage.setItem('elementiSalvati',JSON.stringify(db))
}

//con questa funzione rimuovo un elemento da localstorage
function rimuoviElementodaDb(el){

    let ls = localStorage.getItem('elementiSalvati')
    let db = JSON.parse(ls)

    let indiceElemento = db.indexOf(el.innerHTML)

    db.splice(indiceElemento,1)

    localStorage.setItem('elementiSalvati',JSON.stringify(db))
}