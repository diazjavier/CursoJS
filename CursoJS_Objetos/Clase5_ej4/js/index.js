function Avenger(nombre, nombreReal, poder){
    this.nombre = nombre;
    this.nombreReal = nombreReal;
    this.poder = poder;
    this.salud = 100;
    
    this.status = function(){
        if (this.salud > 0){
            console.log(this.nombre + " Salud: " + this.salud + " Energia: " + this.poder)
        }else{
            console.log("Estoy muerto");
        }        
    }
    
    this.atacar = function(malo){
        malo.salud -= 50;
        estados();

    }

    this.curar = function(amigo){
        if(this.poder > 40){
            amigo.salud += 20;
            this.salud -= 40;
        }
        estados();

    }

}

var Ironman = new Avenger("Ironman", "Tony", 1000);
var Capitan = new Avenger("Capitan America", "Steve", 500);
var Thanos = new Avenger("Thanos", "Thanos", 1500);

function estados(){
    Ironman.status();
    Capitan.status();
    Thanos.status();
}

estados();
