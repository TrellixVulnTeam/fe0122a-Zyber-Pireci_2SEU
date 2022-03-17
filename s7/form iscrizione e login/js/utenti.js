creaUtenti()


function creaUtenti(){
    var divPosizione = document.getElementById('contenitoreUtenti')
    var checkUser = localStorage.getItem('Users')
    var userObject = JSON.parse(checkUser)

    userObject.forEach(function (element){
        var tr = document.createElement('tr')
        divPosizione.prepend(tr)
        var trCreata = document.querySelector("tr")
        //var tableCaption = document.createElement("th")
        //tableCreata.append(tableCaption)
        //document.querySelector("th").innerHTML=  'Id:'+ element.id
        
        for (key in element){
        var td = document.createElement('td')
        trCreata.prepend(td)
        document.querySelector("td").innerHTML= element[key]
        }

        var deleteButton = document.createElement("button")
        var modificaButton = document.createElement("button")
        deleteButton.classList.add('deleteUtente')
        modificaButton.classList.add('changeUtente')
        deleteButton.innerHTML= "Delete"
        modificaButton.innerHTML= "Change"
        trCreata.append(deleteButton, modificaButton)   

        deleteButton.addEventListener('click', function(){
            tr.remove()
            rimuoviElementodaDB(element)
        })
        modificaButton.addEventListener('click', function(){
            modificaButton = new URL (location.href='http://127.0.0.1:5500/modificaUtenti.html')
        })
    })
    
}


function rimuoviElementodaDB(user){
    let ls = localStorage.getItem('Users')
    let db = JSON.parse(ls);
    let indiceElemento = db.find(function(el){
        return user.id == el.id
    })

    var indexElement = db.indexOf(indiceElemento)
    db.splice(indexElement, 1)
    localStorage.setItem('Users', JSON.stringify(db))
}


//Se il typeof è un obj allora devo fare element.key(nice name) altrimenti valore (quello che abbiamo già)