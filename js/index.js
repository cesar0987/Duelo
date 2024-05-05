class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res,player)
    {
        super(name,cost);
        this.power=power;
        this.res=res;
        this.player=player

    }
    algoritmoDificil(target){
        this.cost -=2;
        target.res +=3;
        console.log(`El jugador ${this.player} juega  "Algoritmo Dificil" en ${target.name}`)
    }

    rechazoDePromesaNoManejado(target){
        this.cost -=1;
        target.res -=2;
        console.log(`El jugador ${this.player} juega  "Rechazo de Promesa no Manejado" en ${target.name}`)
    }

    progrmacionEnPareja(target){
        this.cost -=3;
        target.power +=2;
        console.log(`El jugador ${this.player} juega  "Programacion en Pareja" en ${target.name}`)
    }
    attack(target){
        target.res -= this.power
        console.log(`El jugador ${this.player} ha atacado al jugador ${target.player}`)
        
    }
    stats(){
        console.log("Nombre de la carta:"+this.name)
        console.log("Poder de la carta:"+this.power)
        console.log("Resistencia de la carta: "+this.res)
    }

    play( target ) {
            if( target instanceof Unit ) {
                console.log(`El jugador ${target.player} a jugado la carta ${target.name}`)
            } else {
                throw new Error( "Target must be a unit!" );
            }
        }
        
}
var cartaRojo = new Unit("Drake Stormshield",3,3,4,"uno")
var cartaAzul = new Unit("Atlas Ironheart",4,3,4,"dos")

cartaRojo.play(cartaRojo);
cartaRojo.stats();
cartaAzul.play(cartaAzul);
cartaAzul.stats();
cartaRojo.algoritmoDificil(cartaAzul);
cartaAzul.rechazoDePromesaNoManejado(cartaRojo);
cartaRojo.progrmacionEnPareja(cartaRojo)
cartaRojo.attack(cartaAzul)