const Farkel = 10000;

class Game {

#players;
#currentPlayerIndex;
#dice;
#scoreDice;
#scoringDice;


constructor() {
this.#players = [];
this.#currentPlayerIndex = 0;
this.#dice = [];
this.#scoreDice = [];
this.#scoringDice = [];
this.#dice.push(new Die());
this.#dice.push(new Die());
this.#dice.push(new Die());
this.#dice.push(new Die());
this.#dice.push(new Die());
this.#dice.push(new Die());
}
get dice() {return this.#dice;}
get scoreDice() { return this.#scoreDice; }
getCurrentPlayer() {
return this.#players[this.#currentPlayerIndex];}
addPlayer(name) {
let player = new Player(name);
player.number = this.#players.length + 1;
this.#players.push(player);
console.log(player.number);

}
///Need remaining code
startNewGame() {
this.#currentPlayerIndex = 0;
for (const player of this.#players) {
this.#players.savedScore = 0;
this.#players.currentScore = 0;
}
}

getCurrentPlayer() {
   return this.#players[this.#currentPlayerIndex];
}

rollDice() {
    this.getCurrentPlayer().roll(this.#dice);
  
}

getDiceValues() {
    let values = [];
    for (let die of this.#dice) {
        values.push(die.value);
    }
    return values;
}

setDieAside(index) {
    let removedDice = this.#dice.splice(index, 1);
    let dieRemoved = removedDice[0];
    this.#scoreDice.push(dieRemoved);
    return dieRemoved.value;
}   

CalculateScore(){
     let six = 0;
     let five = 0;
     let four = 0;
     let three = 0;
     let two = 0;
     let one = 0;
     let points = 0;
     let done = false;
     let triples = 0;
    for (let i = 0; i < this.#scoreDice.length; i++) {
        let results = this.#scoreDice[i].value;
        this.#scoringDice.push(results);
        
}
for(let i = 0; i < this.#scoringDice.length; i++) {
if (this.#scoringDice[i] == 1) {one++;}
if (this.#scoringDice[i] == 2) {two++;}
if (this.#scoringDice[i] == 3) {three++;}
if (this.#scoringDice[i] == 4) {four++;}
if (this.#scoringDice[i] == 5) {five++;}
if (this.#scoringDice[i] == 6) {six++;}
}
if (one == 2) {triples = triples + 1}
if (two == 2) {triples = triples + 1}
if (three == 2) {triples = triples + 1}
if (four == 2) {triples = triples + 1}
if (five == 2) {triples = triples + 1}
if (six == 2) {triples = triples + 1}



//console.log(one);console.log(two);console.log(three);console.log(four);console.log(five);console.log(six); 
if ((one == 3  && two == 3) ||(one == 3  && three == 3)||(one == 3  && four == 3)||(one == 3  && five == 3)||(one == 3  && six == 3)
    ||(two == 3  && three == 3)||(two == 3  && four == 3)||(two == 3  && five == 3)||(two == 3  && six == 3)||(three == 3  && four == 3)||(three == 3  && five == 3)
    ||(three == 3  && six == 3)||(four == 3  && five == 3)||(four == 3  && six == 3)||(five == 3  && six == 3)) {points = points + 2500; done == true;}
if ((one == 4  && two == 2) ||(one == 4  && three == 2)||(one == 4  && four == 2)||(one == 4  && five == 2)||(one == 4  && six == 2)
    ||(two == 4  && three == 2)||(two == 4  && four == 2)||(two == 4  && five == 2)||(two == 4  && six == 2)||(three == 4  && four == 2)||(three == 4  && five == 2)
    ||(three == 4  && six == 2)||(four == 4  && five == 2)||(four == 4  && six == 2)||(five == 4  && six == 2)||(one == 2  && two == 4) ||(one == 2  && three == 4)||(one == 2  && four == 4)||(one == 2  && five == 4)||(one == 2  && six == 4)
    ||(two == 2  && three == 4)||(two == 2  && four == 4)||(two == 2  && five == 4)||(two == 2  && six == 4)||(three == 2  && four == 4)||(three == 2  && five == 4)
    ||(three == 2  && six == 4)||(four == 2  && five == 4)||(four == 2  && six == 4)||(five == 2  && six == 4)) {points = points + 1500; done == true;}
    
if (triples == 3) {points = points + 2500; done = true;}

if (one == 1 && two == 1 && three == 1 
    && four == 1 && five == 1 && six == 1 && done == false) {points = points + 1500; done = true;}
    
    if (one == 6 || two == 6 || three == 6 
        || four == 6 || five == 6 || six == 6 && done == false) {points = points + 3000; done = true;}
        
        if ((two == 5  && one == 1)|| (three == 5  && one == 1) 
            || (four == 5  && one == 1) || (five == 5  && one == 1) || (six == 5  && one == 1) && done == false) {points = points + 2100; done = true;}
            if ((two == 5  && five == 1)|| (three == 5  && five == 1) 
            || (four == 5  && five == 1) || (one == 5  && five == 1) || (six == 5  && five == 1) && done == false) {points = points + 2100; done = true;}
        
            if (one == 5 || two == 5 || three == 5 
            || four == 5 || five == 5 || six == 5 && done == false) {points = points + 2000; done = true;}
            
            if (one == 4 || two == 4 || three == 4 
                || four == 4 || five == 4 || six == 4 && done == false) {points = points + 1000; done = true;}
                
                if ((one == 4  && five == 1)||(two == 4  && five == 1)|| (three == 4  && five == 1) 
                    || (four == 4  && five == 1)  || (six == 4  && five == 1) && done == false) {points = points + 1050; done = true;}
                    if ((five == 4  && one == 1)||(two == 4  && one == 1)|| (three == 4  && one == 1) 
                    || (four == 4  && one == 1)  || (six == 4  && one == 1) && done == false) {points = points + 1100; done = true;}
                
                if (six == 3 && five == 2 && one == 1 && done == false) {points = points + 800;done = true;}
                if (six == 3 && five == 1 && one == 2 && done == false) {points = points + 850;done = true;}
                if (six == 3 && five == 1 && one == 1 && done == false) {points = points + 750;done = true;}
                if (six == 3 && done == false) {points = points + 600;}


                if (five == 3 && one == 1 && done == false) {points = points + 600;done = true;}
                if (five == 3 && one == 2 && done == false) {points = points + 700;done = true;}
                if (five == 3 && done == false) {points = points + 500;}

                if (four == 3 && five == 2 && one == 1 && done == false) {points = points + 600;done = true;}
                if (four == 3 && five == 1 && one == 2 && done == false) {points = points + 650;done = true;}
                if (four == 3 && five == 1 && one == 1 && done == false) {points = points + 550;done = true;}
                if (four == 3 && done == false) {points = points + 400;}

                if (three == 3 && five == 2 && one == 1 && done == false) {points = points + 500;done = true;}
                if (three == 3 && five == 1 && one == 2 && done == false) {points = points + 550;done = true;}
                if (three == 3 && five == 1 && one == 1 && done == false) {points = points + 450;done = true;}
                if (three == 3 && done == false) {points = points + 300;}

                if (two == 3 && five == 2 && one == 1 && done == false) {points = points + 400;done = true;}
                if (two == 3 && five == 1 && one == 2 && done == false) {points = points + 450;done = true;}
                if (two == 3 && five == 1 && one == 1 && done == false) {points = points + 350;done = true;}
                if (two == 3 && done == false) {points = points + 200;}
                
                if (one == 3 && five == 2 && done == false) {points = points + 400; done = true;}
                if (one == 3 && five == 1 && done == false) {points = points + 350; done = true;}
                
                if (five == 2 && one == 2 && done == false) {points = points + 300; done = true;}
                if (five == 2 && one == 1 && done == false) {points = points + 200; done = true;}
                if (five == 2 && done == false) {points = points + 100; done = true;}

                if (one == 2 && five == 2 && done == false) {points = points + 300; done = true;}
                if (one == 2 && five == 1 && done == false) {points = points + 250; done = true;}
                if (one == 2 && done == false) {points = points + 200; done = true;}

                if (five == 1 && one == 1 && done == false) {points = points + 150; done = true;}
                if (five == 1 && done == false) {points = points + 50; done = true;}

                if (five == 1 && one == 1 && done == false) {points = points + 150; done = true;}
                if (five == 1 && done == false) {points = points + 50; done = true;}

                if (one == 1 && five == 1  && done == false) {points = points + 100; done = true;}
                if (one == 1 && done == false) {points = points + 100; done = true;}
                
                






                
                
                
                return points;





                }

 
clearDice(){
    /*for(let i = 1; i < this.#scoreDice.length;){
    this.#scoreDice.splice(index, 0);
    }*/


}      
    
}






//EndTurn() {

//}

/*
TODO
Make method to send score from saved score and pass turn
make method to clear scored dice
make method to delcare winner and reset
*/



















