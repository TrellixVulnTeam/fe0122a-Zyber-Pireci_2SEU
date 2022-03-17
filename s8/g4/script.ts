abstract class Tasse{

    abstract getUtileTasse(): number;
    abstract getTasseInps(): number;
    abstract getTasseIrpef(): number;
    abstract getRedditoANnuoNetto(): number
}

class Lavoratore extends Tasse{
    redditoAnnuoLordo: number;
    tasseInps: number;
    tasseIrpef: number;

    constructor(redditoAnnnuoLordo: number, tasseInps:number, tasseIrpef:number){
        super();
        this.redditoAnnuoLordo= redditoAnnnuoLordo;
        this.tasseInps=tasseInps;
        this.tasseIrpef= tasseIrpef
    }

    getTasseInps() {
        return (this.redditoAnnuoLordo/ 100) + this.tasseInps
    }
    getTasseIrpef() {
        return (this.redditoAnnuoLordo/ 100) + this.tasseIrpef
    }
    getUtileTasse() {
        return this.getTasseInps() + this.getTasseIrpef()
    }
    getRedditoANnuoNetto() {
        return this.redditoAnnuoLordo - this.getUtileTasse()
    }
}

let user = new Lavoratore(0,0,0);
console.log(user.getRedditoANnuoNetto())

let calcolaImporto = document.getElementById("calcola") as HTMLInputElement;



