class Player {
#name
#number
#savedScore
#currentScore

constructor(name){
this.#name = name;
this.number = 0;
this.#savedScore = 0;
this.#currentScore = 0;
}

get name() {return this.#name;}
get number() {return this.#number;}
get savedScore() {return this.#savedScore;}
get currentScore() {return this.#currentScore;}

set number(value) {this.#number = value;}
set savedScore(value) {this.#savedScore = value;}
set currentScore(value) {this.#currentScore = value;}

roll(dice)
{
    for (let i = 0; i < dice.length; i++) {

        dice[i].roll();
    }



}











}