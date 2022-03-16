

let btn1 = document.getElementById('btnG1')
let btn2 = document.getElementById('btnG2')
let random= document.getElementById('random')

btn1.addEventListener('click', function(){
    let giocatore1 = document.querySelector('#inputg1').value;
    let posizione = document.querySelector('#risultato');
    let div1 = document.createElement('div'); 
    div1.innerHTML = giocatore1; 
    div1.classList.add('item')
    posizione.append(div1);
})

btn2.addEventListener('click', function(){
    let giocatore2 = document.querySelector('#inputg2').value;
    let posizione = document.querySelector('#risultato');
    let div2 = document.createElement('div'); 
    div2.innerHTML = giocatore2; 
    div2.classList.add('item')
    posizione.append(div2);
})

random.addEventListener('click', function () {
    gioca();
})

function gioca(giocatore1, giocatore2) {
    var giocatore1 = document.querySelector('#inputg1').value;
    var giocatore2 = document.querySelector('#inputg2').value;
    var numeroCaso = Math.floor(Math.random() * (10 - 1) + 1);
    let posizione = document.querySelector('#risultato');
    var div3 = document.createElement('div');
    div3.innerHTML = numeroCaso;
    div3.classList.add('item');
    posizione.append(div3);
    if (giocatore1 == numeroCaso) {
        console.log('G1: Hai vinto stronzo')
    } else {
        console.log('hai perso g1')
    }

    if (giocatore2 == numeroCaso) {
        console.log('G2: hai vinto')
    } else {
        console.log('scarso g2')
    }

}








