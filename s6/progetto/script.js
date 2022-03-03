$(document).ready(function(){
    
    const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello",
        "piangere", "ridere", "amare", "amare1", "spavento", "shock"];

    //genera ciclicamente 16 div contenenti le immagini pescate randomicamente
    for(let i=0; i<16; i++){ 
        //crea un ciclo che si fermi alla sedicesima iterazione
        let random = Math.floor(Math.random() * mieImg.length); //usa come un indice il numero appena generato, ed usalo per pescare randomicamente un'immagine
        //genera un numero randomico che va da zero l numero si elementi presenti nell'array mieImg
        let immagineRandom = mieImg.splice(random, 1);

        //usa jquery per creare un div, contenente un tag img, dove i è un indice che si incrementa e immagineRandom è l'immagine pescata randomicamente
        //ricordati di mostrare gli elementi di html appena creati
        $('<div class="images" id="emoji '+i+'"><img id="'+i+'" src="img/'+ immagineRandom+'.png"></div>').appendTo('#memory')
    }

    //In questa sezione avviene la gestione evento click
    //creo un array in cui salverò le informazioni sugli elementi cliccati
    let immaginiCliccate = []

    //Preparo un gestore per l'evento click sugli elementi cliccati(quelli con la classe .images)
    $('.images').click(function(){

        //Crea un contatore di click
        let nClick =$('.numclicks span').text() //inizia creando una variabile che legga il testo contenuto nel tag html che mostra il numero di click(span dentro a .numclicks)
        nClick++ //incrementa di 1 il valore ottenuto
        $('.numclicks span').text(nClick) //riscrivi il numero nell'html, sostituendolo con quello pre esistente
        
        //In questa sezione creiamo il GAME OVER!
        if(nClick >= 26){//Se superi 26 clicks
            $('#gameOver').show() //ti viene mostrato il testo HTML #gameOver
            $('#memory').hide(1000) //e allo stesso tempo nasconde il #memory entro 1s impedendoti di andare avanti
        }

        //crea un controllo che indichi se l'array immaginiCliccate contiene o meno i due elementi da controllare
        if(immaginiCliccate.length != 2){ //se nell'array ci sono meno di 2 elementi permetterai di aggiungerne altri
            let imgId = $(this).children().attr('id') //crea una variabile contenente l'id dell'immagine cliccata
            let imgSrc = $(this).children().attr('src') //crea una variabile contenente l'attributo src dell'immagine cliccata

            //rendi visibile l'immagine presente nell'elemento cliccato
            $('#' + imgId).show()

            //crea un oggetto contenente le proprietà id ed src salvate nelle 2 variabili appena create
            let oggettoImg= {
                id: imgId,
                src: imgSrc
            }

            //aggiungi l'oggetto appena creato all'array immaginiCliccate
            immaginiCliccate.push(oggettoImg)

            //controlla quante immagini sono state cliccate(con un if), se sono 2 devi verificare se sono identiche o meno 
            if(immaginiCliccate.length == 2){

                //crea un nuovo if per verificare se le immagini selezionate sono identiche o meno
                if(immaginiCliccate[0].src == immaginiCliccate[1].src){  //confronta gli elementi cliccati, se le proprietà src sono identiche
                    immaginiCliccate=[] //svuota l'array immaginiCliccate

                }else{ //se le proprietà src sono diverse:
                    setTimeout(function(){//usa setTimeout() per far sparire le immagini dopo un certo lasso di tempo, per far si che l'utente possa osservare
                        $('#'+immaginiCliccate[0].id).hide() //nascondi immagini
                        $('#'+immaginiCliccate[1].id).hide() //nascondi immagini
                        immaginiCliccate=[] //e svuota l'array immaginiCliccate
                    }, 300)//le carte che ha scoperto prima che queste scompaiano entro 0.3s
                }
            }
        }
    })
})

//Questa è la sezione dove mostro e nascondo i vari elementi cliccando i 2 bottoni
$('#start').click(function(){ //Quando clicco il bottone #start
    $('#memory').show('slow'); //Mostrami tutto il #memory 
    $('#restart').show('slow'); //Mostrami anche il bottone #restart
    $('.numclicks').show(); //e mostrami anche la sezione html con classe .numclicks
    $(this).hide(); //Nascondimi però il tasto #start "Nuova partita!"
})

$('#restart').click(function(){ //quando clicco il bottone #restart
    window.location.reload() //fai il refresh della pagina
})



//In questa sezione ho messo un saluto personalizzato che cambia in base all'ora dell'utente.
let today = new Date(); //trova la data necessaria
let hourNow = today.getHours(); //trova l'ora corrente 
let greeting = ''; //spazio dove si andrà a inserire l'ora

if(hourNow > 18){ //se le ore correnti sono inferiori alle 18 
  greeting = 'Buonasera!'; //mostra 'buonasera'
}else if(hourNow > 12){ // se le ore correnti sono inferiori alle 12
  greeting = 'Buon Pomeriggio!'; //inserisci 'Buon pomeriggio'
}else if(hourNow >=0){ //se le ore sono maggiori/uguali <lle 0 
  greeting = 'Buongiorno'; //inserisci 'Buongiorno'
}else{ //altrimenti
  greeting = "Benvenuto!"; //inserisci benvenuto
}

$('#saluto').text(greeting) //in questo modo andrai a mostrare  ell'HTML i risultati in  base all'ora


        
    
            
    
            
                
                
          
               
                
    
    